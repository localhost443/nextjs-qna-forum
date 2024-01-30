"use client"
interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    const handleThemeChange = () => {
      if (mode === "light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
      if(mode === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    };
    handleThemeChange();
  }, [mode]);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if(theme === "light" || theme === "dark") setMode(theme)
  }, []);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme, ThemeContext };
