import React from "react";
import HeroSection from "../common/HeroSection";
const QualityAward = () => {
  return (
    <HeroSection
      label="Our Services"
      subLabel="King Abdelaziz Quality Award"
      buttonText="Order Now"
      bgImage={`${process.env.PUBLIC_URL}/assets/hero-quality-award.jpg`}
    />
  );
};
export default QualityAward;
