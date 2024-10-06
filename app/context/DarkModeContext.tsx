"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the context
interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the Dark Mode Context with default values
const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Create a provider for the context
interface DarkModeProviderProps {
  children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode preference to local storage (optional)
  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedPreference);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Create a custom hook to use dark mode
export function useDarkMode() {
  return useContext(DarkModeContext);
}
