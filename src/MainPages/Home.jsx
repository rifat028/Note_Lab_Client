import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import AllPackages from "../Components/HomeComponents/AllPackages";
import Benefits from "../Components/HomeComponents/Benefits";
import Limitation from "../Components/HomeComponents/Limitations";
import Stats from "../Components/HomeComponents/Stats";
import AboutUs from "../Components/HomeComponents/AboutUs";
import OurMission from "../Components/HomeComponents/OurMission";
import OurVision from "../Components/HomeComponents/OurVision";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AllPackages></AllPackages>
      <OurMission></OurMission>
      <OurVision></OurVision>
      <Benefits></Benefits>
      <Limitation></Limitation>
      <Stats></Stats>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
