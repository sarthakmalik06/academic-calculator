import React from 'react';
import { FaGraduationCap, FaServer, FaDatabase, FaCodeBranch, FaCheck } from 'react-icons/fa';
import PageContainer from '../components/ui/PageContainer';
import SectionHeader from '../components/ui/SectionHeader';
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card';

function About() {
  return (
    <PageContainer maxWidth="max-w-5xl">
      {/* Header */}
      <SectionHeader
        badge="System Specs"
        title="About"
        highlightTitle="AcadSync"
        description="A full-stack, component-driven academic suite engineered for performance, precision, and responsive elegance."
        align="center"
      />

      {/* Tech Stack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {/* Frontend Card */}
        <Card hover={true} className="p-6 space-y-4">
          <div className="h-12 w-12 rounded-xl bg-brand-550/15 border border-brand-550/30 flex items-center justify-center text-brand-400">
            <FaCodeBranch className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Frontend UI</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Built with <strong>React 19</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS v3</strong>. Features customizable glassmorphic components, dark mode preferences, and responsive design breakpoints.
          </p>
        </Card>

        {/* Backend Card */}
        <Card hover={true} className="p-6 space-y-4">
          <div className="h-12 w-12 rounded-xl bg-brand-600/15 border border-brand-600/30 flex items-center justify-center text-brand-400">
            <FaServer className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Backend Layer</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Constructed with <strong>Node.js</strong> and <strong>Express</strong>, providing RESTful route handlers, CORS middleware, central error handling, and environment secret configurations.
          </p>
        </Card>

        {/* Database Card */}
        <Card hover={true} className="p-6 space-y-4">
          <div className="h-12 w-12 rounded-xl bg-accent-teal/15 border border-accent-teal/30 flex items-center justify-center text-accent-teal">
            <FaDatabase className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Database Store</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Powered by <strong>MongoDB</strong> with <strong>Mongoose ODM</strong> for structured document models, schema validation, and reliable persistent storage.
          </p>
        </Card>
      </div>

      {/* Engineering Standards Card */}
      <Card hover={false} className="p-8 space-y-6 my-10">
        <CardHeader className="p-0 border-none">
          <CardTitle icon={FaGraduationCap} className="text-2xl">
            Production Blueprint Standards
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>
            AcadSync is designed following clean architecture principles and monorepo structure separating client and server layers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <FaCheck className="text-accent-emerald shrink-0 h-4 w-4 mt-0.5" />
              <div>
                <strong className="text-white block text-xs font-semibold">Modular Reusable Components</strong>
                <span className="text-xs text-slate-400">Atomic UI primitives for Buttons, Cards, Modals, Inputs, and Selects.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <FaCheck className="text-accent-emerald shrink-0 h-4 w-4 mt-0.5" />
              <div>
                <strong className="text-white block text-xs font-semibold">Responsive & Animated</strong>
                <span className="text-xs text-slate-400">Smooth micro-interactions, mobile drawers, and tailwind breakpoints.</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}

export default About;
