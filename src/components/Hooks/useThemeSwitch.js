import {useEffect, useState} from "react";

// Dark is the default. A visitor's explicit choice is stored in localStorage
// and applied before hydration by the inline script in _document.js.
export function useThemeSwitch() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem("theme");
    } catch {
      // Storage can be unavailable (private mode); fall back to the default.
    }
    if (stored === "light") setMode("light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    try {
      window.localStorage.setItem("theme", mode);
    } catch {
      // Ignore storage failures; the theme still applies for this session.
    }
  }, [mode]);

  return [mode, setMode];
}
