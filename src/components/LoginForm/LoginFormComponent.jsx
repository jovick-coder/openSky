import React, { useState } from "react";
import "./LoginFormComponent.css";

const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handelSubmit = () => {
    // on submit validate the input
    if (email === "") {
      setError({ error: true, message: "email can not be empty" });
      return;
    }
    setError({
      error: false,
      message: "",
    });
    if (password === "") {
      setError({ error: true, message: "password can not be empty" });
      return;
    }
    setError({
      error: false,
      message: "",
    });
    console.log("handelSubmit", email, password);
    window.location.replace("./dashboard");
  };

  return (
    <div className="LoginForm">
      <h1 className="text-center mb-3">Login Form</h1>
      <form>
        {error.error ? (
          <div className="alert alert-danger">{error.message}</div>
        ) : null}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={() => handelSubmit()}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormComponent;
