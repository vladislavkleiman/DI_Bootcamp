import React, { useEffect } from "react"; // Import useEffect here
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
}

function ThemeContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <div className="App">
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
