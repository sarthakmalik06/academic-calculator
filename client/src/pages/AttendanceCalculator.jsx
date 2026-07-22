import React, { useState } from 'react';
import {
  FaPercent,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBook,
  FaSearch,
  FaSlidersH,
  FaRedo,
  FaUserCheck,
  FaUserTimes,
} from 'react-icons/fa';
import PageContainer from '../components/ui/PageContainer';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Modal from '../components/ui/Modal';
import EmptyState from '../components/ui/EmptyState';
import { useAttendance } from '../hooks/useAttendance';

function AttendanceCalculator() {
  const {
    subjects,
    overallMetrics,
    addSubject,
    updateSubject,
    deleteSubject,
    incrementAttended,
    incrementAbsent,
    resetToDefault,
    clearAllSubjects,
  } = useAttendance();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Add / Edit Modal state
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingSubjectId, setEditingSubjectId] = useState(null); // null = Add mode, string = Edit mode
  const [formData, setFormData] = useState({
    name: '',
    totalClasses: '',
    attendedClasses: '',
    targetAttendance: '75',
  });
  const [formErrors, setFormErrors] = useState({});

  // Delete confirmation modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingSubject, setDeletingSubject] = useState(null);

  // Form input change handler
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for that field as user types
    if (formErrors[id]) {
      setFormErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  // Open Modal for Adding a new subject
  const handleOpenAddModal = () => {
    setEditingSubjectId(null);
    setFormData({
      name: '',
      totalClasses: '',
      attendedClasses: '',
      targetAttendance: '75',
    });
    setFormErrors({});
    setIsFormModalOpen(true);
  };

  // Open Modal for Editing an existing subject
  const handleOpenEditModal = (subject) => {
    setEditingSubjectId(subject.id);
    setFormData({
      name: subject.name,
      totalClasses: subject.totalClasses.toString(),
      attendedClasses: subject.attendedClasses.toString(),
      targetAttendance: subject.targetAttendance.toString(),
    });
    setFormErrors({});
    setIsFormModalOpen(true);
  };

  // Submit Add or Edit Form
  const handleFormSubmit = (e) => {
    if (e) e.preventDefault();

    let result;
    if (editingSubjectId) {
      result = updateSubject(editingSubjectId, formData);
    } else {
      result = addSubject(formData);
    }

    if (!result.success) {
      setFormErrors(result.errors);
    } else {
      setIsFormModalOpen(false);
      setEditingSubjectId(null);
      setFormErrors({});
    }
  };

  // Open Delete Confirmation Modal
  const handleOpenDeleteModal = (subject) => {
    setDeletingSubject(subject);
    setIsDeleteModalOpen(true);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    if (deletingSubject) {
      deleteSubject(deletingSubject.id);
    }
    setIsDeleteModalOpen(false);
    setDeletingSubject(null);
  };

  // Filter subjects based on search query and status filter dropdown
  const filteredSubjects = subjects.filter((subj) => {
    const matchesSearch = subj.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'safe' && subj.status === 'safe') ||
      (statusFilter === 'warning' && subj.status === 'warning');
    return matchesSearch && matchesStatus;
  });

  return (
    <PageContainer maxWidth="max-w-7xl">
      {/* Page Section Header */}
      <SectionHeader
        badge="Attendance Tracker"
        title="Attendance"
        highlightTitle="Calculator"
        description="Monitor course attendance thresholds, calculate safe skip limits, and track required lectures to stay above target."
        action={
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="md" icon={FaRedo} onClick={resetToDefault}>
              Reset Sample Data
            </Button>
            <Button variant="primary" size="md" icon={FaPlus} onClick={handleOpenAddModal}>
              Add Subject
            </Button>
          </div>
        }
      />

      {/* Top Overview Summary Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card hover={false} className="p-5 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Subjects</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {overallMetrics.totalSubjects}
            </div>
          </div>
          <div className="h-12 w-12 rounded-xl bg-brand-550/15 border border-brand-550/30 flex items-center justify-center text-brand-400">
            <FaBook className="h-6 w-6" />
          </div>
        </Card>

        <Card hover={false} className="p-5 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Overall Attendance</div>
            <div
              className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
                overallMetrics.overallPercentage >= 75 ? 'text-brand-400' : 'text-amber-400'
              }`}
            >
              {overallMetrics.overallPercentage}%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {overallMetrics.totalAttended} / {overallMetrics.totalClasses} total classes
            </div>
          </div>
          <div className="h-12 w-12 rounded-xl bg-brand-600/15 border border-brand-600/30 flex items-center justify-center text-brand-400">
            <FaPercent className="h-6 w-6" />
          </div>
        </Card>

        <Card hover={false} className="p-5 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Status Overview</div>
            <div className="text-sm font-bold text-accent-emerald mt-1 flex items-center gap-1.5">
              <FaCheckCircle className="h-4 w-4" /> {overallMetrics.safeCount} Safe Subjects
            </div>
          </div>
          <div className="h-12 w-12 rounded-xl bg-accent-emerald/15 border border-accent-emerald/30 flex items-center justify-center text-accent-emerald">
            <FaCheckCircle className="h-6 w-6" />
          </div>
        </Card>

        <Card hover={false} className="p-5 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Action Needed</div>
            <div className="text-sm font-bold text-amber-400 mt-1 flex items-center gap-1.5">
              <FaExclamationTriangle className="h-4 w-4" /> {overallMetrics.warningCount} Need Attention
            </div>
          </div>
          <div className="h-12 w-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <FaExclamationTriangle className="h-6 w-6" />
          </div>
        </Card>
      </div>

      {/* Toolbar: Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="w-full sm:w-80">
          <Input
            placeholder="Search subject name..."
            icon={FaSearch}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <Select
            className="w-48"
            icon={FaSlidersH}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={[
              { value: 'all', label: 'All Statuses' },
              { value: 'safe', label: 'Safe Only (≥ Target)' },
              { value: 'warning', label: 'Warning Only (< Target)' },
            ]}
          />
          {subjects.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllSubjects} className="text-slate-400 hover:text-rose-400">
              Clear All
            </Button>
          )}
        </div>
      </div>

      {/* Subject Cards Grid or Empty State */}
      {filteredSubjects.length === 0 ? (
        <EmptyState
          icon={FaBook}
          title={subjects.length === 0 ? 'No subjects added yet' : 'No matching subjects found'}
          description={
            subjects.length === 0
              ? 'Start by adding your semester subjects to calculate safe skip limits and target attendance.'
              : 'Try clearing your search keyword or changing the status filter.'
          }
          actionLabel={subjects.length === 0 ? 'Add Your First Subject' : undefined}
          actionIcon={FaPlus}
          onAction={subjects.length === 0 ? handleOpenAddModal : undefined}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {filteredSubjects.map((subject) => (
            <Card key={subject.id} hover={true} className="flex flex-col justify-between">
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div className="pr-2">
                  <CardTitle>{subject.name}</CardTitle>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                    <span>Target: <strong className="text-slate-200">{subject.targetAttendance}%</strong></span>
                    <span>•</span>
                    <span>Conducted: <strong className="text-slate-200">{subject.totalClasses}</strong></span>
                  </div>
                </div>

                {/* Status Indicator Badge */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 ${
                    subject.status === 'safe'
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {subject.status === 'safe' ? (
                    <>
                      <FaCheckCircle className="h-3 w-3" /> Safe
                    </>
                  ) : (
                    <>
                      <FaExclamationTriangle className="h-3 w-3" /> Warning
                    </>
                  )}
                </span>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Percentage Display & Attended Ratio */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Attendance</span>
                    <div
                      className={`text-3xl font-extrabold ${
                        subject.status === 'safe' ? 'text-white' : 'text-rose-400'
                      }`}
                    >
                      {subject.percentage}%
                    </div>
                  </div>
                  <div className="text-right text-xs text-slate-400">
                    <span className="text-slate-100 font-bold">{subject.attendedClasses}</span> / {subject.totalClasses} attended
                  </div>
                </div>

                {/* Dynamic Progress Bar */}
                <div className="space-y-1.5">
                  <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        subject.percentage >= subject.targetAttendance
                          ? 'bg-gradient-to-r from-accent-emerald to-accent-teal shadow-glow-primary'
                          : 'bg-gradient-to-r from-rose-500 to-amber-500'
                      }`}
                      style={{ width: `${Math.min(subject.percentage, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Calculation Output Recommendation Banner */}
                <div
                  className={`p-3.5 rounded-xl text-xs font-medium border leading-relaxed ${
                    subject.status === 'safe'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-300'
                  }`}
                >
                  {subject.status === 'safe' ? (
                    subject.skippable > 0 ? (
                      <span>
                        🎉 On Track! You can safely skip up to <strong>{subject.skippable}</strong> lecture(s) while maintaining ≥{subject.targetAttendance}%.
                      </span>
                    ) : (
                      <span>
                        ⚠️ On Threshold! You are exactly at your target ({subject.targetAttendance}%). Do not miss the next class!
                      </span>
                    )
                  ) : subject.needed === Infinity ? (
                    <span>
                      🚨 Target Impossible! You have missed too many classes to reach 100% attendance requirement.
                    </span>
                  ) : (
                    <span>
                      🚨 Action Required! You must attend the next <strong>{subject.needed}</strong> consecutive lecture(s) to reach your {subject.targetAttendance}% target.
                    </span>
                  )}
                </div>
              </CardContent>

              {/* Action Buttons Footer: Quick Increments & Edit/Delete */}
              <div className="p-6 pt-0 border-t border-slate-800/40 flex items-center justify-between gap-2">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={FaUserCheck}
                    onClick={() => incrementAttended(subject.id)}
                    title="Add 1 attended class"
                    className="text-xs hover:bg-emerald-500/15 hover:text-emerald-300"
                  >
                    +1 Attended
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={FaUserTimes}
                    onClick={() => incrementAbsent(subject.id)}
                    title="Add 1 missed class"
                    className="text-xs hover:bg-rose-500/15 hover:text-rose-300"
                  >
                    +1 Absent
                  </Button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEditModal(subject)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Edit subject"
                  >
                    <FaEdit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleOpenDeleteModal(subject)}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Delete subject"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Add / Edit Subject Interactive Modal Dialog */}
      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title={editingSubjectId ? 'Edit Subject Details' : 'Add New Subject'}
        subtitle={
          editingSubjectId
            ? 'Update subject name, conducted classes, or attendance targets'
            : 'Enter course details and attendance record'
        }
        footerActions={
          <>
            <Button variant="ghost" size="md" onClick={() => setIsFormModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="md" onClick={handleFormSubmit}>
              {editingSubjectId ? 'Update Subject' : 'Save Subject'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input
            id="name"
            label="Subject Name"
            placeholder="e.g. Machine Learning"
            value={formData.name}
            onChange={handleInputChange}
            error={formErrors.name}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              id="totalClasses"
              type="number"
              min="0"
              label="Total Conducted"
              placeholder="e.g. 40"
              value={formData.totalClasses}
              onChange={handleInputChange}
              error={formErrors.totalClasses}
              required
            />
            <Input
              id="attendedClasses"
              type="number"
              min="0"
              label="Classes Attended"
              placeholder="e.g. 35"
              value={formData.attendedClasses}
              onChange={handleInputChange}
              error={formErrors.attendedClasses}
              required
            />
          </div>

          <Select
            id="targetAttendance"
            label="Target Attendance Percentage"
            value={formData.targetAttendance}
            onChange={handleInputChange}
            error={formErrors.targetAttendance}
            options={[
              { value: '75', label: '75% (Standard University Minimum)' },
              { value: '80', label: '80% (Recommended Safety Target)' },
              { value: '85', label: '85% (High Requirement)' },
              { value: '90', label: '90% (Strict Target Goal)' },
              { value: '100', label: '100% (Perfect Attendance Goal)' },
            ]}
          />
        </form>
      </Modal>

      {/* Delete Confirmation Modal Dialog */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Deletion"
        subtitle="This action cannot be undone"
        maxWidth="max-w-md"
        footerActions={
          <>
            <Button variant="ghost" size="md" onClick={() => setIsDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="md" onClick={handleConfirmDelete}>
              Delete Subject
            </Button>
          </>
        }
      >
        <div className="text-sm text-slate-300 leading-relaxed">
          Are you sure you want to delete <strong className="text-white">{deletingSubject?.name}</strong>?
          This will permanently remove its attendance records.
        </div>
      </Modal>
    </PageContainer>
  );
}

export default AttendanceCalculator;
