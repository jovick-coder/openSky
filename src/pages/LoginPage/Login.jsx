import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Nav from "../../components/NavBar/Nav";

const Login = () => {
  return (
    <>
      <Nav currentPage="login" />
      <div className="form-card w-50 m-auto mt-5">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
