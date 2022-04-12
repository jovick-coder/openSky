import React from "react";
import HeroSectionComponent from "../../components/HeroSection/HeroSectionComponent";
import Nav from "../../components/NavBar/Nav";
import "./HomePage.css";
import logo from "../../assets/opensky_logo.png";
import FooterComponent from "../../components/Footer/FooterComponent";

const Home = () => {
  return (
    <div className="HomePage">
      <Nav currentPage="home" />

      <HeroSectionComponent />

      <div className="container mt-4">
        <h1 className="text-center ">OpenSky Network provides you with</h1>
        <div className="row top-cards">
          <div className="col-md-3">
            <div className="card">
              <b>Aircraft Database</b>
              Find and track aircraft with our comprehensive database. You can
              also add and update information!
              <button className="btn btn-primary btn-sm mt-auto">
                Enter {">>"}
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <b>Unfiltered live API</b>
              Our live API comes with Java and Python bindings, but it can be
              used with any language that supports JSON-based REST APIs.
              <button className="btn btn-primary btn-sm mt-auto">
                Read More {">>"}
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <b>Air Traffic Statistics</b>See up-to-date statistics on air
              traffic and our network on our Network Facts page.
              <button className="btn btn-primary btn-sm mt-auto">
                See Statistics {">>"}
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <b>Air Traffic Statistics</b>See up-to-date statistics on air
              traffic and our network on our Network Facts page.
              <button className="btn btn-primary btn-sm mt-auto">
                See Statistics {">>"}
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="about-section col-md-9">
            <div className="card p-4">
              <h3>About the OpenSky Network</h3>
              The OpenSky Network is a non-profit community-based receiver
              network which has been continuously collecting air traffic
              surveillance data since 2013. Unlike other networks, OpenSky keeps
              the complete unfiltered raw data and makes it accessible to
              academic and institutional researchers. With over 25 trillion
              ADS-B, Mode S, TCAS and FLARM messages collected from more than
              3500 sensors around the world, the OpenSky Network exhibits the
              largest air traffic surveillance dataset of its kind. The mission
              of our non-profit association is to support open global air
              traffic research by universities and other not-for-profit
              institutions.
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3">
              <h3>Special Links</h3>
              <ul>
                <li>
                  OpenSky official website{" "}
                  <a href="https://opensky-network.org/">Open</a>{" "}
                </li>
                <li>
                  About openSky{" "}
                  <a href="https://opensky-network.org/about/about-us">Open</a>{" "}
                </li>
                <li>
                  {" "}
                  visit open network blogs{" "}
                  <a href="https://opensky-network.org/community/blog/">
                    Open
                  </a>{" "}
                </li>
                <li>
                  OpenSky API docs{" "}
                  <a href="https://openskynetwork.github.io/opensky-api/">
                    Open
                  </a>
                </li>
                <li>
                  openSky twitter{" "}
                  <a href="https://twitter.com/OpenSkyNetwork">open</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card m-3 p-3">
          <img src={logo} alt="" />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
