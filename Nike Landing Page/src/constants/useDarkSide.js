import { useState, useEffect } from "react";
export default function useDarkSide() {
  const [theme, setTheme] = useState(() => localStorage.theme || "light");
  const colorTheme = theme === "dark" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme === "dark" ? "light" : "dark");
    root.classList.add(colorTheme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
