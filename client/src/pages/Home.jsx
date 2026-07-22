import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPercent,
  FaGraduationCap,
  FaArrowRight,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
} from 'react-icons/fa';
import PageContainer from '../components/ui/PageContainer';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

function Home() {
  return (
    <PageContainer maxWidth="max-w-7xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto py-8 sm:py-12">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-550/30 bg-brand-550/10 text-brand-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-glow-primary animate-fadeIn">
          <FaBolt className="text-amber-400 h-3.5 w-3.5" />
          <span>Ultimate Student Academic Workspace</span>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="space-y-4 animate-slideUp">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Streamline Your Academic{' '}
            <span className="bg-gradient-to-r from-brand-400 via-brand-550 to-brand-600 bg-clip-text text-transparent glow-text-primary">
              Calculations
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Manage your lecture thresholds and score targets with precision. Never drop below attendance requirements and calculate your CGPA with zero effort.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 pt-2">
          <Link to="/attendance" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" icon={FaPercent} className="w-full sm:w-auto">
              Attendance Calculator
            </Button>
          </Link>

          <Link to="/cgpa" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" icon={FaGraduationCap} className="w-full sm:w-auto">
              CGPA Calculator
            </Button>
          </Link>
        </div>

        {/* Quick Stats / Trust Bar */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 border-t border-slate-800/80 w-full mt-10">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-white">100% Free</div>
            <div className="text-xs text-slate-400">No account required</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-brand-400">Real-Time</div>
            <div className="text-xs text-slate-400">Instant calculations</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-accent-emerald">75% & 80%</div>
            <div className="text-xs text-slate-400">Attendance thresholds</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-accent-teal">10-Point</div>
            <div className="text-xs text-slate-400">CGPA grading scale</div>
          </div>
        </div>
      </div>

      {/* Main Tools Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {/* Attendance Calculator Card */}
        <Card hover={true} className="flex flex-col justify-between p-2">
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 rounded-2xl bg-brand-550/15 border border-brand-550/30 flex items-center justify-center text-brand-400 shadow-glow-primary">
                <FaPercent className="h-7 w-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-550/10 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                Smart Tracker
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Attendance Calculator</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Know exactly how many lectures you need to attend or can safely skip to satisfy university regulations.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-accent-emerald shrink-0 h-4 w-4" />
                <span>Calculate required classes to hit 75% or 80% target</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-accent-emerald shrink-0 h-4 w-4" />
                <span>Track safe skippable lecture counts in real-time</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-accent-emerald shrink-0 h-4 w-4" />
                <span>Add and manage subject-wise attendance rosters</span>
              </li>
            </ul>
          </CardContent>

          <div className="p-6 pt-0">
            <Link to="/attendance">
              <Button variant="primary" size="md" className="w-full" icon={FaArrowRight} iconPosition="right">
                Launch Attendance Tool
              </Button>
            </Link>
          </div>
        </Card>

        {/* CGPA Calculator Card */}
        <Card hover={true} className="flex flex-col justify-between p-2">
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 rounded-2xl bg-brand-600/15 border border-brand-600/30 flex items-center justify-center text-brand-400 shadow-glow-secondary">
                <FaGraduationCap className="h-7 w-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-600/10 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                GPA Projection
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">CGPA Calculator</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Project your overall Cumulative Grade Point Average based on course credit hours and letter grades.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-accent-emerald shrink-0 h-4 w-4" />
                <span>Semester-wise SGPA and overall CGPA calculation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-accent-emerald shrink-0 h-4 w-4" />
                <span>Support for customizable credit hours and letter grades</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-accent-emerald shrink-0 h-4 w-4" />
                <span>Clean break-down of total earned credits</span>
              </li>
            </ul>
          </CardContent>

          <div className="p-6 pt-0">
            <Link to="/cgpa">
              <Button variant="secondary" size="md" className="w-full" icon={FaArrowRight} iconPosition="right">
                Launch CGPA Tool
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Value Proposition Features Grid */}
      <div className="space-y-10 my-20">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Designed for <span className="text-brand-400">Peak Performance</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to keep your academic record organized, transparent, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover={false} className="p-6 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-brand-550/15 flex items-center justify-center text-brand-400">
              <FaBolt className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">Instant Projections</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calculations update live as you tweak class counts or grades without reloading.
            </p>
          </Card>

          <Card hover={false} className="p-6 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-accent-teal/15 flex items-center justify-center text-accent-teal">
              <FaShieldAlt className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">Attendance Safety</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automatic alert status lets you know whether you are safe or in danger of debarment.
            </p>
          </Card>

          <Card hover={false} className="p-6 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-accent-emerald/15 flex items-center justify-center text-accent-emerald">
              <FaChartLine className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">Grade Targeting</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Experiment with future course grades to see what SGPA you need to reach your CGPA goal.
            </p>
          </Card>

          <Card hover={false} className="p-6 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-brand-400/15 flex items-center justify-center text-brand-400">
              <FaMobileAlt className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">Mobile Optimized</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed to look crisp on all screens, from pocket smartphones to wide desktop displays.
            </p>
          </Card>
        </div>
      </div>

      {/* Call To Action Banner */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-900/60 via-slate-900 to-slate-950 border border-brand-550/30 text-center space-y-6 my-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-550/10 blur-3xl pointer-events-none" />
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-xl mx-auto">
          Ready to Take Control of Your Academic Goals?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
          Start calculating your attendance thresholds or grade point averages right now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link to="/attendance">
            <Button variant="primary" size="md" icon={FaPercent}>
              Start Attendance Calculator
            </Button>
          </Link>
          <Link to="/cgpa">
            <Button variant="outline" size="md" icon={FaGraduationCap}>
              Start CGPA Calculator
            </Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}

export default Home;
