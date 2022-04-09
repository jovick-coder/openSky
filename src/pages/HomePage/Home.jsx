import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Nav from "../../components/NavBar/Nav";

const Home = () => {
  return (
    <>
      <Nav currentPage="home" />

      <HeroSection />
    </>
  );
};

export default Home;
