import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../constants/useDarkSide";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "dark");

  useEffect(() => {
    setDarkSide(colorTheme === "dark");
  }, [colorTheme]);

  const toggleDarkMode = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="bg-slate-300 p-1 rounded-full">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </div>
  );
};

export default Switcher;
