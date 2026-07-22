import React, { useState } from 'react';
import {
  FaGraduationCap,
  FaPlus,
  FaTrash,
  FaBookOpen,
  FaChartLine,
  FaEye,
} from 'react-icons/fa';
import PageContainer from '../components/ui/PageContainer';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Modal from '../components/ui/Modal';
import EmptyState from '../components/ui/EmptyState';

// Mock initial data for UI demonstration
const MOCK_SEMESTERS = [
  {
    id: 'sem1',
    title: 'Semester 1',
    sgpa: 8.80,
    totalCredits: 21,
    courses: [
      { id: 'c1', name: 'Mathematics I', credits: 4, grade: 'O', points: 10 },
      { id: 'c2', name: 'Physics for Engineers', credits: 4, grade: 'A+', points: 9 },
      { id: 'c3', name: 'Basic Electrical Eng.', credits: 3, grade: 'A', points: 8 },
      { id: 'c4', name: 'Engineering Graphics', credits: 3, grade: 'A+', points: 9 },
      { id: 'c5', name: 'Programming in C', credits: 4, grade: 'O', points: 10 },
      { id: 'c6', name: 'Physics Lab', credits: 3, grade: 'O', points: 10 },
    ],
  },
  {
    id: 'sem2',
    title: 'Semester 2',
    sgpa: 8.71,
    totalCredits: 21,
    courses: [
      { id: 'c7', name: 'Mathematics II', credits: 4, grade: 'A+', points: 9 },
      { id: 'c8', name: 'Data Structures', credits: 4, grade: 'O', points: 10 },
      { id: 'c9', name: 'Digital Logic Design', credits: 3, grade: 'A', points: 8 },
      { id: 'c10', name: 'Object Oriented Prog.', credits: 4, grade: 'A+', points: 9 },
      { id: 'c11', name: 'Environmental Science', credits: 3, grade: 'A', points: 8 },
      { id: 'c12', name: 'DS Lab', credits: 3, grade: 'O', points: 10 },
    ],
  },
];

const GRADE_OPTIONS = [
  { value: 'O', label: 'O (Outstanding - 10 Grade Points)' },
  { value: 'A+', label: 'A+ (Excellent - 9 Grade Points)' },
  { value: 'A', label: 'A (Very Good - 8 Grade Points)' },
  { value: 'B+', label: 'B+ (Good - 7 Grade Points)' },
  { value: 'B', label: 'B (Above Average - 6 Grade Points)' },
  { value: 'C', label: 'C (Average - 5 Grade Points)' },
  { value: 'F', label: 'F (Fail - 0 Grade Points)' },
];

function CGPACalculator() {
  const [semesters, setSemesters] = useState(MOCK_SEMESTERS);
  const [showEmptyStateToggle, setShowEmptyStateToggle] = useState(false);

  // Modals state
  const [isSemesterModalOpen, setIsSemesterModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [activeSemesterId, setActiveSemesterId] = useState(null);

  // Form states
  const [semesterTitle, setSemesterTitle] = useState('');
  const [courseFormData, setCourseFormData] = useState({
    name: '',
    credits: '4',
    grade: 'O',
  });

  const handleCourseInputChange = (e) => {
    const { id, value } = e.target;
    setCourseFormData((prev) => ({ ...prev, [id]: value }));
  };

  const openAddCourseModal = (semId) => {
    setActiveSemesterId(semId);
    setIsCourseModalOpen(true);
  };

  const displayedSemesters = showEmptyStateToggle ? [] : semesters;

  return (
    <PageContainer maxWidth="max-w-7xl">
      {/* Section Header */}
      <SectionHeader
        badge="GPA Projection"
        title="CGPA"
        highlightTitle="Calculator"
        description="Calculate semester SGPAs, project cumulative CGPA, and manage weighted course credit hours seamlessly."
        action={
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="md"
              icon={FaEye}
              onClick={() => setShowEmptyStateToggle(!showEmptyStateToggle)}
            >
              {showEmptyStateToggle ? 'Show Demo Data' : 'Preview Empty State'}
            </Button>
            <Button
              variant="primary"
              size="md"
              icon={FaPlus}
              onClick={() => setIsSemesterModalOpen(true)}
            >
              Add Semester
            </Button>
          </div>
        }
      />

      {/* Result Section: Overall CGPA Summary Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Main CGPA Score Card */}
        <div className="glass-panel p-6 sm:p-8 bg-gradient-to-br from-brand-900/40 via-slate-900 to-slate-950 border-brand-550/40 md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glow-primary">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-550/15 text-brand-300 text-xs font-semibold uppercase tracking-wider">
              Cumulative Result
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Cumulative GPA</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Calculated across {displayedSemesters.length} semesters and 42 total credit hours.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end justify-center">
            <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-brand-300 via-white to-brand-400 bg-clip-text text-transparent glow-text-primary">
              {displayedSemesters.length > 0 ? '8.755' : '0.00'}
            </div>
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider mt-1 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              First Class Distinction
            </span>
          </div>
        </div>

        {/* Quick Stats Column */}
        <div className="flex flex-col gap-4">
          <Card hover={false} className="p-5 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Semesters</div>
              <div className="text-2xl font-extrabold text-white mt-1">
                {displayedSemesters.length}
              </div>
            </div>
            <div className="h-10 w-10 rounded-xl bg-brand-550/15 border border-brand-550/30 flex items-center justify-center text-brand-400">
              <FaGraduationCap className="h-5 w-5" />
            </div>
          </Card>

          <Card hover={false} className="p-5 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Earned Credits</div>
              <div className="text-2xl font-extrabold text-accent-teal mt-1">
                {displayedSemesters.length > 0 ? '42 Credits' : '0 Credits'}
              </div>
            </div>
            <div className="h-10 w-10 rounded-xl bg-accent-teal/15 border border-accent-teal/30 flex items-center justify-center text-accent-teal">
              <FaBookOpen className="h-5 w-5" />
            </div>
          </Card>
        </div>
      </div>

      {/* Semesters List or Empty State */}
      {displayedSemesters.length === 0 ? (
        <EmptyState
          icon={FaGraduationCap}
          title="No semesters recorded"
          description="Click below to add your first semester and start adding courses, credit hours, and grades."
          actionLabel="Add Semester"
          actionIcon={FaPlus}
          onAction={() => setIsSemesterModalOpen(true)}
        />
      ) : (
        <div className="space-y-8 mb-12">
          {displayedSemesters.map((sem) => (
            <Card key={sem.id} hover={false} className="overflow-hidden">
              {/* Semester Header Bar */}
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-550/15 border border-brand-550/30 flex items-center justify-center text-brand-400 font-bold">
                    <FaChartLine className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>{sem.title}</CardTitle>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {sem.courses.length} Courses • Total {sem.totalCredits} Credits
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-1.5 rounded-xl bg-brand-550/20 border border-brand-550/30 text-brand-300 font-extrabold text-sm shadow-glow-primary">
                    SGPA: {sem.sgpa}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={FaPlus}
                    onClick={() => openAddCourseModal(sem.id)}
                  >
                    Add Course
                  </Button>

                  <button
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Delete semester"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                </div>
              </CardHeader>

              {/* Courses Table */}
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-950/60 border-b border-slate-800/80">
                    <tr>
                      <th className="py-3.5 px-6">Course Name</th>
                      <th className="py-3.5 px-4 text-center">Credit Hours</th>
                      <th className="py-3.5 px-4 text-center">Grade Received</th>
                      <th className="py-3.5 px-4 text-center">Grade Points</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {sem.courses.map((course) => (
                      <tr key={course.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-6 font-semibold text-white">{course.name}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono">
                            {course.credits} Cr
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="px-3 py-1 rounded-full bg-brand-550/15 border border-brand-550/30 text-brand-300 text-xs font-bold">
                            {course.grade}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-slate-200">
                          {course.points} / 10
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                            title="Delete course"
                          >
                            <FaTrash className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modal: Add Semester */}
      <Modal
        isOpen={isSemesterModalOpen}
        onClose={() => setIsSemesterModalOpen(false)}
        title="Add New Semester"
        subtitle="Create a new academic term section"
        footerActions={
          <>
            <Button variant="ghost" size="md" onClick={() => setIsSemesterModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="md" onClick={() => setIsSemesterModalOpen(false)}>
              Create Semester
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            id="semesterTitle"
            label="Semester Name"
            placeholder="e.g. Semester 3"
            value={semesterTitle}
            onChange={(e) => setSemesterTitle(e.target.value)}
            required
          />
        </div>
      </Modal>

      {/* Modal: Add Course */}
      <Modal
        isOpen={isCourseModalOpen}
        onClose={() => setIsCourseModalOpen(false)}
        title="Add Course Row"
        subtitle="Enter course details, credits, and earned grade"
        footerActions={
          <>
            <Button variant="ghost" size="md" onClick={() => setIsCourseModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="md" onClick={() => setIsCourseModalOpen(false)}>
              Add Course
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            id="name"
            label="Course / Subject Name"
            placeholder="e.g. Machine Learning"
            value={courseFormData.name}
            onChange={handleCourseInputChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              id="credits"
              type="number"
              label="Credits (1 - 6)"
              placeholder="4"
              value={courseFormData.credits}
              onChange={handleCourseInputChange}
              required
            />
            <Select
              id="grade"
              label="Grade Earned"
              value={courseFormData.grade}
              onChange={handleCourseInputChange}
              options={GRADE_OPTIONS}
            />
          </div>
        </div>
      </Modal>
    </PageContainer>
  );
}

export default CGPACalculator;
