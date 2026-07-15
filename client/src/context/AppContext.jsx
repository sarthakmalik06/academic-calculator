import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Context object
const AppContext = createContext();

/**
 * AppProvider component to wrap the React application tree.
 * Provides global state like Theme (Dark/Light mode) and potential user configs.
 */
export const AppProvider = ({ children }) => {
  // Check local storage or system preference for dark mode theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  // Apply dark mode class to document HTML element on theme change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme helper function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to use the AppContext easily across components
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
