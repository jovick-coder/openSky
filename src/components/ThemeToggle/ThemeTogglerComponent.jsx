import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./ThemeTogglerComponent.css";

function ThemeTogglerComponent({ theme, setTheme }) {
  const switchMode = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };
  return (
    <>
      <button
        className="toggle-theme "
        onClick={() => {
          switchMode();
        }}
      >
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </>
  );
}

export default ThemeTogglerComponent;
