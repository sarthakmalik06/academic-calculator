import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background radial glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-brand-550/10 blur-[130px] rounded-full pointer-events-none z-0" />
      
      {/* Responsive Navigation Header */}
      <Navbar />

      {/* Main Outlet Body Content */}
      <main className="flex-grow relative z-10 w-full">
        <Outlet />
      </main>

      {/* Reusable SaaS Footer Component */}
      <Footer />
    </div>
  );
}

export default MainLayout;
