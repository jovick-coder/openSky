import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Nav from "../../components/NavBar/Nav";
import "./HomePage.css";

const Home = () => {
  return (
    <div className="HomePage">
      <Nav currentPage="home" />

      <HeroSection />

      <div className="container mt-4">
        <h1 className="text-center">OpenSky Network provides you with</h1>
        <div className="row top-cards">
          <div className="col-md-3">
            <div className="card">
              <b>Aircraft Database</b>
              Find and track aircraft with our comprehensive database. You can
              also add and update information!
              <button className="btn btn-primary btn-sm">Enter {">>"}</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <b>Unfiltered live API</b>
              Our live API comes with Java and Python bindings, but it can be
              used with any language that supports JSON-based REST APIs.
              <button className="btn btn-primary btn-sm">
                Read More {">>"}
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <b>Air Traffic Statistics</b>See up-to-date statistics on air
              traffic and our network on our Network Facts page.
              <button className="btn btn-primary btn-sm">
                See Statistics {">>"}
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <b>Air Traffic Statistics</b>See up-to-date statistics on air
              traffic and our network on our Network Facts page.
              <button className="btn btn-primary btn-sm">
                See Statistics {">>"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
