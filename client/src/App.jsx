import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AttendanceCalculator from './pages/AttendanceCalculator';
import CGPACalculator from './pages/CGPACalculator';
import About from './pages/About';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Main layout containing the sticky navigation bar */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="attendance" element={<AttendanceCalculator />} />
            <Route path="cgpa" element={<CGPACalculator />} />
            <Route path="about" element={<About />} />
            
            {/* Fallback route — redirects back to Home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
