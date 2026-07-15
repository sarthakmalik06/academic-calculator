import React from 'react';
import { Link } from 'react-router-dom';
import { FaPercent, FaGraduationCap, FaArrowRight, FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 max-w-4xl mx-auto py-6">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/60 bg-slate-800/40 text-brand-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md animate-pulse">
        ⚡ Ultimate Student Toolkit
      </div>

      {/* Hero Main Content */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Streamline Your Academic{' '}
          <span className="bg-gradient-to-r from-brand-400 via-brand-550 to-brand-600 bg-clip-text text-transparent glow-text-primary">
            Calculations
          </span>
        </h1>
        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Manage your lectures and score goals like a pro. Keep your attendance above the threshold and calculate your future CGPA using our simple, intuitive workspace.
        </p>
      </div>

      {/* Action Buttons (CTAs) */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
        {/* Attendance Calculator Button */}
        <Link
          to="/attendance"
          className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-550 hover:from-brand-500 hover:to-brand-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-premium hover:shadow-glow-primary hover:-translate-y-0.5 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <FaPercent className="h-5 w-5" />
          <span>Attendance Calculator</span>
          <FaArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* CGPA Calculator Button */}
        <Link
          to="/cgpa"
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-750 text-slate-200 hover:text-white font-semibold rounded-2xl transition-all duration-300 shadow-premium hover:shadow-glow-secondary hover:-translate-y-0.5"
        >
          <FaGraduationCap className="h-5 w-5 text-brand-400" />
          <span>CGPA Calculator</span>
          <FaArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform text-slate-400" />
        </Link>
      </div>

      {/* Feature Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12 text-left">
        {/* Attendance Promo Card */}
        <div className="glass-panel glass-panel-hover p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-xl bg-brand-550/15 flex items-center justify-center text-brand-400">
              <FaPercent className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Attendance Tracking</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Find out exactly how many lectures you need to attend or can safely skip to keep your attendance above your targeted target (e.g. 75% or 80%).
            </p>
          </div>
          <Link
            to="/attendance"
            className="text-brand-400 group-hover:text-brand-300 font-semibold text-sm inline-flex items-center gap-1.5 hover:underline"
          >
            Explore tool <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* CGPA Promo Card */}
        <div className="glass-panel glass-panel-hover p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-xl bg-brand-600/15 flex items-center justify-center text-brand-400">
              <FaGraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">CGPA Projection</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Calculate semester SGPA and overall CGPA using customizable credit weights and grading systems. Save historical scores to track progress over time.
            </p>
          </div>
          <Link
            to="/cgpa"
            className="text-brand-400 group-hover:text-brand-300 font-semibold text-sm inline-flex items-center gap-1.5 hover:underline"
          >
            Explore tool <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
