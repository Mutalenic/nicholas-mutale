import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  isDarkMode: boolean; // Added alias for compatibility
  toggleTheme: () => void;
  toggleDarkMode: () => void; // Keeping original method for backward compatibility
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check if user has a theme preference saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      // Only switch to light if explicitly saved as light
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark mode otherwise
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Create an alias for the toggle function to match expected naming
  const toggleTheme = toggleDarkMode;

  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      isDarkMode: darkMode, // Add isDarkMode as an alias pointing to darkMode
      toggleDarkMode, 
      toggleTheme // Add toggleTheme as an alias for toggleDarkMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};