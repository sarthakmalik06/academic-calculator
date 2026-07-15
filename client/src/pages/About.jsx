import React from 'react';
import { FaGraduationCap, FaServer, FaDatabase, FaCodeBranch } from 'react-icons/fa';

function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
      {/* Header section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          About{' '}
          <span className="bg-gradient-to-r from-brand-400 to-brand-550 bg-clip-text text-transparent glow-text-primary">
            AcadSync
          </span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
          A production-grade React & Express boilerplate built to showcase modern software engineering practices.
        </p>
      </div>

      {/* Tech stack details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend details */}
        <div className="glass-panel p-6 space-y-4">
          <div className="h-10 w-10 rounded-xl bg-brand-550/15 flex items-center justify-center text-brand-400">
            <FaCodeBranch className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-white">Frontend Architecture</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Powered by <strong>Vite</strong> and <strong>React.js</strong>. Uses <strong>Tailwind CSS v3</strong> for styling, custom theme configurations, responsive utility layouts, and Google Outfit fonts.
          </p>
        </div>

        {/* Backend details */}
        <div className="glass-panel p-6 space-y-4">
          <div className="h-10 w-10 rounded-xl bg-brand-600/15 flex items-center justify-center text-brand-400">
            <FaServer className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-white">Backend Layer</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Constructed with <strong>Node.js</strong> and <strong>Express</strong>, implementing CORS, native ESM module parsing, custom central error-handling, environment-variable configurations, and clean routes templates.
          </p>
        </div>

        {/* Database details */}
        <div className="glass-panel p-6 space-y-4">
          <div className="h-10 w-10 rounded-xl bg-accent-teal/15 flex items-center justify-center text-accent-teal">
            <FaDatabase className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-white">Database Integration</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Configured with <strong>MongoDB</strong> using <strong>Mongoose</strong> for object modeling, offering structural schemas, connection failure handling logic, and robust scaling patterns.
          </p>
        </div>
      </div>

      {/* Architecture description */}
      <div className="glass-panel p-8 space-y-4 text-left">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FaGraduationCap className="text-brand-400" />
          <span>Professional Blueprint Standards</span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          This project was structured as a monorepo separated cleanly into a <code>/client</code> and a <code>/server</code> layer. The codebase follows modern industrial standards: functional components with custom React hooks, environment separation for credentials, global state providers, centralized API layers utilizing interceptors, and strict RESTful design guidelines.
        </p>
      </div>
    </div>
  );
}

export default About;
