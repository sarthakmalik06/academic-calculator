import { useState, useEffect, useMemo } from 'react';
import {
  calculateSubjectMetrics,
  calculateOverallMetrics,
  validateSubjectForm,
} from '../utils/attendanceUtils';

const LOCAL_STORAGE_KEY = 'acadsync_attendance_subjects';

// Default initial subjects if user opens the app for the first time
const INITIAL_DEMO_SUBJECTS = [
  {
    id: 'subj-1',
    name: 'Data Structures & Algorithms',
    totalClasses: 45,
    attendedClasses: 38,
    targetAttendance: 75,
  },
  {
    id: 'subj-2',
    name: 'Operating Systems',
    totalClasses: 40,
    attendedClasses: 28,
    targetAttendance: 75,
  },
  {
    id: 'subj-3',
    name: 'Database Management Systems',
    totalClasses: 32,
    attendedClasses: 26,
    targetAttendance: 80,
  },
  {
    id: 'subj-4',
    name: 'Computer Networks',
    totalClasses: 30,
    attendedClasses: 24,
    targetAttendance: 75,
  },
];

/**
 * Custom Hook for managing Attendance Calculator subjects, CRUD actions, and LocalStorage persistence.
 */
export function useAttendance() {
  const [subjects, setSubjects] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (err) {
      console.error('Error reading attendance subjects from localStorage:', err);
    }
    return INITIAL_DEMO_SUBJECTS;
  });

  // Sync state to LocalStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(subjects));
    } catch (err) {
      console.error('Error saving attendance subjects to localStorage:', err);
    }
  }, [subjects]);

  // Compute calculated metrics for each subject
  const processedSubjects = useMemo(() => {
    return subjects.map((subj) => {
      const metrics = calculateSubjectMetrics(
        subj.totalClasses,
        subj.attendedClasses,
        subj.targetAttendance
      );
      return {
        ...subj,
        ...metrics,
      };
    });
  }, [subjects]);

  // Compute overall summary metrics
  const overallMetrics = useMemo(() => {
    return calculateOverallMetrics(subjects);
  }, [subjects]);

  /**
   * Add a new subject
   */
  const addSubject = (formData) => {
    const validation = validateSubjectForm(formData);
    if (!validation.isValid) {
      return { success: false, errors: validation.errors };
    }

    const newSubject = {
      id: `subj-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: formData.name.trim(),
      totalClasses: parseInt(formData.totalClasses, 10),
      attendedClasses: parseInt(formData.attendedClasses, 10),
      targetAttendance: parseFloat(formData.targetAttendance),
    };

    setSubjects((prev) => [newSubject, ...prev]);
    return { success: true };
  };

  /**
   * Update an existing subject by ID
   */
  const updateSubject = (id, formData) => {
    const validation = validateSubjectForm(formData);
    if (!validation.isValid) {
      return { success: false, errors: validation.errors };
    }

    setSubjects((prev) =>
      prev.map((subj) => {
        if (subj.id === id) {
          return {
            ...subj,
            name: formData.name.trim(),
            totalClasses: parseInt(formData.totalClasses, 10),
            attendedClasses: parseInt(formData.attendedClasses, 10),
            targetAttendance: parseFloat(formData.targetAttendance),
          };
        }
        return subj;
      })
    );

    return { success: true };
  };

  /**
   * Delete a subject by ID
   */
  const deleteSubject = (id) => {
    setSubjects((prev) => prev.filter((subj) => subj.id !== id));
  };

  /**
   * Quick increment: +1 Attended (adds 1 to attended and 1 to total)
   */
  const incrementAttended = (id) => {
    setSubjects((prev) =>
      prev.map((subj) => {
        if (subj.id === id) {
          return {
            ...subj,
            totalClasses: subj.totalClasses + 1,
            attendedClasses: subj.attendedClasses + 1,
          };
        }
        return subj;
      })
    );
  };

  /**
   * Quick increment: +1 Absent (adds 1 to total, attended stays same)
   */
  const incrementAbsent = (id) => {
    setSubjects((prev) =>
      prev.map((subj) => {
        if (subj.id === id) {
          return {
            ...subj,
            totalClasses: subj.totalClasses + 1,
          };
        }
        return subj;
      })
    );
  };

  /**
   * Reset subjects to default demo data
   */
  const resetToDefault = () => {
    setSubjects(INITIAL_DEMO_SUBJECTS);
  };

  /**
   * Clear all subjects
   */
  const clearAllSubjects = () => {
    setSubjects([]);
  };

  return {
    subjects: processedSubjects,
    overallMetrics,
    addSubject,
    updateSubject,
    deleteSubject,
    incrementAttended,
    incrementAbsent,
    resetToDefault,
    clearAllSubjects,
  };
}

export default useAttendance;
