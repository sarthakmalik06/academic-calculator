import { useState, useEffect } from 'react';

/**
 * A custom hook to sync a React state variable automatically with localStorage.
 * Ideal for preserving user input values when navigating between calculator tabs or reloading.
 *
 * @param {string} key - The localStorage key
 * @param {any} initialValue - Default state value if not present in localStorage
 */
function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or fallback
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Keep localStorage in sync when storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
