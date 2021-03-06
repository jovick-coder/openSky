import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Navbar, NavDropdown } from "react-bootstrap";
// import logo from "../../assets/opensky_logo.png";
import "./Nav.css";
import {
  BsFillCloudHaze2Fill,
  BsFillHouseFill,
  BsFillDoorClosedFill,
} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Nav = ({ currentPage }) => {
  return (
    <>
      {/* Nav */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container flex">
          <Link to={"/"} className="navbar-brand ">
            <BsFillCloudHaze2Fill />
            OpenSky
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  // if current page is home page give it a class of active
                  className={
                    currentPage === "home" ? "nav-link active " : "nav-link "
                  }
                  to="/"
                >
                  <BsFillHouseFill /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  // if current login is home page give it a class of active

                  className={
                    currentPage === "login" ? "nav-link active " : "nav-link "
                  }
                  to="/login"
                >
                  <BsFillDoorClosedFill />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

export const DashboardNav = ({ currentPage }) => {
  const navigate = useNavigate();

  const handelLogout = () => {
    window.confirm("Logout?") && navigate("/");
  };

  return (
    <>
      <nav className="DashboardNav">
        <div className="container">
          <div className="d-inline-flex w-100 my-2 justify-content-between">
            <div className="logo ">
              <Link to={"/dashboard"} className="navbar-brand ">
                <BsFillCloudHaze2Fill />
                OpenSky
              </Link>
            </div>
            <ul className="">
              <li>
                <Link
                  className={
                    currentPage === "Dashboard"
                      ? "nav-link active"
                      : "nav-link "
                  }
                  to="/dashboard"
                >
                  <AiFillDashboard />
                </Link>
              </li>
              <li>
                <MdLogout onClick={() => handelLogout()} />
              </li>
            </ul>
          </div>
        </div>{" "}
      </nav>
    </>
  );
};
