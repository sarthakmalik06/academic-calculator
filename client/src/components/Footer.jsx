import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaGithub, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl py-10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="p-2 bg-gradient-to-tr from-brand-600 to-brand-550 rounded-xl shadow-glow-primary group-hover:scale-105 transition-transform duration-300">
                <FaGraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">AcadSync</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              The modern, all-in-one student workspace designed for tracking attendance thresholds and projecting CGPA targets effortlessly.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Calculators</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/attendance" className="hover:text-brand-400 transition-colors">
                  Attendance Calculator
                </Link>
              </li>
              <li>
                <Link to="/cgpa" className="hover:text-brand-400 transition-colors">
                  CGPA Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">
                  About AcadSync
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & GitHub */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Stack</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">React.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Vite</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Express</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} AcadSync. Crafted for modern students.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              Built with <FaHeart className="h-3 w-3 text-rose-500" /> for academic success
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
