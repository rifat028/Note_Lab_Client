import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import AllPackages from "../Components/HomeComponents/AllPackages";
import Benefits from "../Components/HomeComponents/Benefits";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AllPackages></AllPackages>
      <Benefits></Benefits>
    </div>
  );
};

export default Home;
