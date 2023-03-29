import React from "react";
import HowDoWeDeliver from "../components/common/HowDoWeDeliver";
import MiniContactUs from "../components/common/MiniContactUs";
import GetTouchFrom from "../components/ContactComponent/GetTouchFrom";
import HomeHeroSecetion from "../components/HomeHeroSecetion";
import LowerHero from "../components/LowerHeroSection";
import WhatDoWeOffer from "../components/WhatDoWeOffer";

const Home = () => {
  return (
    <>
      <HomeHeroSecetion
        title={
          <>
            <span className="text-secondary">EM</span>
            <span className="text-primary">Consulting</span>
          </>
        }
        titleTwo={"Is Your Trusted Partner For Quality Management Journey"}
      />

      <LowerHero />
      <WhatDoWeOffer />
      <HowDoWeDeliver />
      <GetTouchFrom />
      <MiniContactUs />
      
    </>
  );
};

export default Home;
