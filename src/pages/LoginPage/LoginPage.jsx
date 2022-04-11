import React from "react";
import LoginFormComponent from "../../components/LoginForm/LoginFormComponent";
import Nav from "../../components/NavBar/Nav";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      {/* render nav setting the current page to login  */}
      <Nav currentPage="login" />
      <div className="form-card">
        {/* render login form */}
        <LoginFormComponent />
      </div>
    </div>
  );
};

export default LoginPage;
