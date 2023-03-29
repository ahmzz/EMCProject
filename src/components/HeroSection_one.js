import React from "react";
import myBackgroundImage from "../assets/Servive-1.jpg";
import HeroSection from "./HeroSectionComponent";

const HeroSection_one = () => {
  return (
    <div>
      <HeroSection
        image={myBackgroundImage}
        title="SO Certification"
        pera="We make standards easy to understand simple to apply."
        buttonPera={"Order Now"}
      />
    </div>
  );
};

export default HeroSection_one;
