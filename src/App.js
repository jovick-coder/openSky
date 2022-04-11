import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";
import ThemeTogglerComponent from "./components/ThemeToggle/ThemeTogglerComponent";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div data-theme={theme}>
      {/* Render theme toggler */}
      <ThemeTogglerComponent theme={theme} setTheme={setTheme} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
