import React from "react";
import { Link } from "react-router-dom";
import desktopHeroImage from "../../assets/images/airplan1.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="HeroSection">
        <div className="overlay"></div>
        <div className=" img-div">
          <img src={desktopHeroImage} alt="airplane" className="bg-image" />
          <div className="text-div">
            {" "}
            <h1 className="ms-4">Get live Flight update </h1>
            <div className="button-div">
              <Link to="/login">
                <button>Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
