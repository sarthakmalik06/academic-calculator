import React from 'react';
import { FaPercent, FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';

function AttendanceCalculator() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header and description */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center md:justify-start gap-3">
          <FaPercent className="text-brand-550 h-8 w-8" />
          <span>Attendance Calculator</span>
        </h1>
        <p className="text-slate-400 text-base max-w-xl">
          Easily calculate how many sessions you must attend or can afford to miss to maintain your targeted percentage.
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
          <h2 className="text-lg font-bold text-white mb-2">Simulate Current Attendance</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Classes Conducted
              </label>
              <input
                type="number"
                disabled
                placeholder="e.g. 45"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Classes Attended
              </label>
              <input
                type="number"
                disabled
                placeholder="e.g. 38"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Required Percentage (%)
              </label>
              <input
                type="number"
                disabled
                placeholder="75"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-500"
              />
            </div>
          </div>
        </div>

        {/* Info/Tips Column */}
        <div className="glass-panel p-6 flex flex-col justify-between opacity-80 pointer-events-none">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FaCalendarCheck className="text-brand-400" />
              <span>Smart Tips</span>
            </h2>
            <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
              <li>Regular entry helps catch trends early.</li>
              <li>Always account for lab sessions separately if they carry individual weights.</li>
              <li>Aim for at least 3-5% above the strict minimum target for unforeseen buffer.</li>
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

export default AttendanceCalculator;
