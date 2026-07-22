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
    `px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
      isActive
        ? 'bg-brand-550/20 text-brand-300 border border-brand-550/30 shadow-glow-primary'
        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block px-4 py-3 rounded-xl font-medium text-base transition-all duration-200 ${
      isActive
        ? 'bg-brand-550/25 text-brand-300 border border-brand-550/40 shadow-glow-primary'
        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2.5 bg-gradient-to-tr from-brand-600 to-brand-550 rounded-xl shadow-glow-primary group-hover:scale-105 transition-transform duration-300">
                <FaGraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all duration-300">
                  AcadSync
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-400 -mt-1 hidden sm:block">
                  Attendance & CGPA
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink to="/" className={linkClasses} end>
              Home
            </NavLink>
            <NavLink to="/attendance" className={linkClasses}>
              Attendance Calculator
            </NavLink>
            <NavLink to="/cgpa" className={linkClasses}>
              CGPA Calculator
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
          </nav>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-550/40"
              aria-label="Toggle dark mode"
              title="Toggle theme"
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
              className="md:hidden p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-200 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-slideUp">
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className={mobileLinkClasses}
          >
            Home Page
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
    </header>
  );
}

export default Navbar;
