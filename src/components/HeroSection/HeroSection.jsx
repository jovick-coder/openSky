import React from "react";
import desktopHeroImage from "../../assets/images/airplan4.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="HeroSection">
        <div className=" img-div">
          <img src={desktopHeroImage} alt="airplane" className="bg-image" />
          <div className="text-div">
            {" "}
            <h1 className="ms-4">Get Flight update </h1>
            <div className="button-div">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
