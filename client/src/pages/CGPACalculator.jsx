import React from 'react';
import { FaGraduationCap, FaInfoCircle, FaListUl } from 'react-icons/fa';

function CGPACalculator() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header and description */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center md:justify-start gap-3">
          <FaGraduationCap className="text-brand-550 h-8 w-8" />
          <span>CGPA Calculator</span>
        </h1>
        <p className="text-slate-400 text-base max-w-xl">
          Project your Cumulative Grade Point Average based on semester courses, credit hours, and grades.
        </p>
      </div>

      {/* Info Warning Alert */}
      <div className="flex gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-sm">
        <FaInfoCircle className="h-5 w-5 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Placeholder Interface:</span> The database connection is active, and server environment setup is complete. The interactive calculation logic and Mongo API synchronization will be implemented in the next phase!
        </div>
      </div>

      {/* Skeleton / Demo Card Layout to present premium visuals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Input Card Mockup */}
        <div className="glass-panel p-6 space-y-4 md:col-span-2 opacity-80 pointer-events-none">
          <h2 className="text-lg font-bold text-white mb-2">Simulate Semester Grades</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-grow">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="e.g. Mathematics II"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-500"
                />
              </div>
              <div className="w-24">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Credits
                </label>
                <input
                  type="number"
                  disabled
                  placeholder="4"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-500"
                />
              </div>
              <div className="w-28">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Grade Point
                </label>
                <input
                  type="number"
                  disabled
                  placeholder="10"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-500"
                />
              </div>
            </div>
            
            <button
              disabled
              className="w-full py-3 bg-slate-800 text-slate-500 font-semibold rounded-xl"
            >
              + Add Course Row
            </button>
          </div>
        </div>

        {/* Info/Tips Column */}
        <div className="glass-panel p-6 flex flex-col justify-between opacity-80 pointer-events-none">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FaListUl className="text-brand-400" />
              <span>Grading Scheme</span>
            </h2>
            <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
              <li>GPA = Σ(Credits × Points) / ΣCredits</li>
              <li>A grade point of 10 matches O (Outstanding).</li>
              <li>Calculators can be saved to profile context.</li>
            </ul>
          </div>
          
          <div className="pt-4 border-t border-slate-800/80 text-xs text-brand-400 font-semibold uppercase tracking-wider">
            Ready to integrate
          </div>
        </div>
      </div>
    </div>
  );
}

export default CGPACalculator;
