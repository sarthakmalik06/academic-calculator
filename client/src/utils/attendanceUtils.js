/**
 * Attendance Utility Functions
 * Pure functions for calculating percentages, safe skip classes, required classes,
 * overall summary metrics, and form validation rules.
 */

/**
 * Calculates attendance metrics for a single subject.
 * 
 * @param {number} totalClasses - Total conducted classes (T >= 0)
 * @param {number} attendedClasses - Classes attended (0 <= A <= T)
 * @param {number} targetAttendance - Targeted percentage (e.g. 75)
 * @returns {Object} Calculated metrics including percentage, status, skippable, and needed.
 */
export function calculateSubjectMetrics(totalClasses, attendedClasses, targetAttendance = 75) {
  const total = Math.max(0, parseInt(totalClasses, 10) || 0);
  const attended = Math.max(0, parseInt(attendedClasses, 10) || 0);
  const target = Math.min(100, Math.max(1, parseFloat(targetAttendance) || 75));

  // If no classes conducted yet, percentage is 100%
  const percentageRaw = total === 0 ? 100 : (attended / total) * 100;
  const percentage = Math.round(percentageRaw * 10) / 10; // Round to 1 decimal place

  const isSafe = percentage >= target;
  const status = isSafe ? 'safe' : 'warning';

  let skippable = 0;
  let needed = 0;

  if (isSafe) {
    // Formula for skip classes: A / (T + x) >= target / 100 => x <= (100 * A / target) - T
    const maxTotalForTarget = (100 * attended) / target;
    skippable = Math.max(0, Math.floor(maxTotalForTarget - total));
  } else {
    // Formula for required classes: (A + y) / (T + y) >= target / 100 => y >= (target * T - 100 * A) / (100 - target)
    if (target === 100 && attended < total) {
      needed = Infinity; // Impossible to reach 100% if missed any class
    } else if (target < 100) {
      const requiredNumber = (target * total - 100 * attended) / (100 - target);
      needed = Math.max(0, Math.ceil(requiredNumber));
    }
  }

  return {
    totalClasses: total,
    attendedClasses: attended,
    targetAttendance: target,
    percentage,
    status,
    skippable,
    needed,
  };
}

/**
 * Calculates cumulative overall attendance summary for a list of subjects.
 * 
 * @param {Array} subjects - List of subject objects
 * @returns {Object} Overall summary stats
 */
export function calculateOverallMetrics(subjects = []) {
  if (!Array.isArray(subjects) || subjects.length === 0) {
    return {
      totalSubjects: 0,
      totalClasses: 0,
      totalAttended: 0,
      overallPercentage: 100,
      safeCount: 0,
      warningCount: 0,
    };
  }

  let totalClasses = 0;
  let totalAttended = 0;
  let safeCount = 0;
  let warningCount = 0;

  subjects.forEach((subject) => {
    const total = Math.max(0, parseInt(subject.totalClasses, 10) || 0);
    const attended = Math.max(0, parseInt(subject.attendedClasses, 10) || 0);
    const target = Math.min(100, Math.max(1, parseFloat(subject.targetAttendance) || 75));

    totalClasses += total;
    totalAttended += attended;

    const metrics = calculateSubjectMetrics(total, attended, target);
    if (metrics.status === 'safe') {
      safeCount += 1;
    } else {
      warningCount += 1;
    }
  });

  const overallPercentageRaw = totalClasses === 0 ? 100 : (totalAttended / totalClasses) * 100;
  const overallPercentage = Math.round(overallPercentageRaw * 10) / 10;

  return {
    totalSubjects: subjects.length,
    totalClasses,
    totalAttended,
    overallPercentage,
    safeCount,
    warningCount,
  };
}

/**
 * Validates Subject Form data for Add and Edit operations.
 * 
 * @param {Object} formData - { name, totalClasses, attendedClasses, targetAttendance }
 * @returns {Object} { isValid: boolean, errors: Object }
 */
export function validateSubjectForm(formData) {
  const errors = {};

  // Subject Name validation
  if (!formData.name || typeof formData.name !== 'string' || formData.name.trim() === '') {
    errors.name = 'Subject name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Subject name must be at least 2 characters';
  }

  // Total Classes validation
  const total = parseInt(formData.totalClasses, 10);
  if (isNaN(total) || total < 0) {
    errors.totalClasses = 'Total conducted classes must be 0 or a positive number';
  }

  // Attended Classes validation
  const attended = parseInt(formData.attendedClasses, 10);
  if (isNaN(attended) || attended < 0) {
    errors.attendedClasses = 'Attended classes must be 0 or a positive number';
  } else if (!isNaN(total) && attended > total) {
    errors.attendedClasses = `Attended classes (${attended}) cannot exceed total conducted classes (${total})`;
  }

  // Target Attendance validation
  const target = parseFloat(formData.targetAttendance);
  if (isNaN(target) || target <= 0 || target > 100) {
    errors.targetAttendance = 'Target percentage must be between 1% and 100%';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
