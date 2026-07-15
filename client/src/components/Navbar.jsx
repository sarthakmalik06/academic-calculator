import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function Navbar() {
  const { theme, toggleTheme } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to set active link style classes
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
      isActive
        ? 'bg-brand-550/15 text-brand-400 border border-brand-550/20 shadow-glow-primary'
        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block px-4 py-3 rounded-xl font-medium text-base transition-all duration-300 ${
      isActive
        ? 'bg-brand-550/20 text-brand-400 border border-brand-550/30'
        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-tr from-brand-600 to-brand-550 rounded-xl shadow-glow-primary group-hover:scale-105 transition-transform duration-300">
                <FaGraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-sans tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all duration-300">
                AcadSync
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/attendance" className={linkClasses}>
              Attendance
            </NavLink>
            <NavLink to="/cgpa" className={linkClasses}>
              CGPA
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-300 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <HiSun className="h-5 w-5 text-accent-amber" />
              ) : (
                <HiMoon className="h-5 w-5 text-brand-400" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-300 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950 px-4 pt-2 pb-4 space-y-1 shadow-2xl transition-all duration-300 animate-fadeIn">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Home
          </NavLink>
          <NavLink
            to="/attendance"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Attendance Calculator
          </NavLink>
          <NavLink
            to="/cgpa"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            CGPA Calculator
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            About Project
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
