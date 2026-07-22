import React from 'react';

/**
 * Reusable Page Container wrapper providing consistent padding, grid lines, ambient light, and entrance animations.
 */
function PageContainer({ children, className = '', maxWidth = 'max-w-7xl' }) {
  return (
    <div className={`w-full ${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 animate-fadeIn ${className}`}>
      {children}
    </div>
  );
}

export default PageContainer;
