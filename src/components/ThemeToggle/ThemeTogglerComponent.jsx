import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./ThemeTogglerComponent.css";

function ThemeTogglerComponent({ theme, setTheme }) {
  const switchMode = () => {
    // check current theme and change to the opposite
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
        {/* render icon base on the current theme state */}
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </>
  );
}

export default ThemeTogglerComponent;
