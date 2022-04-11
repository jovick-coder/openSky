import React from "react";
import LoginFormComponent from "../../components/LoginForm/LoginFormComponent";
import Nav from "../../components/NavBar/Nav";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Nav currentPage="login" />
      <div className="form-card">
        <LoginFormComponent />
      </div>
    </div>
  );
};

export default LoginPage;
