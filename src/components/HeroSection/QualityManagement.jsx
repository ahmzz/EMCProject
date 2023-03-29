import React from "react";
import HeroSection from "../common/HeroSection";
const QualityManagement = () => {
  return (
    <HeroSection
      label="Our Services"
      subLabel="European Foundation for Quality Management"
      buttonText="Order Now"
      bgImage={`${process.env.PUBLIC_URL}/assets/hero-quality-management.jpg`}
    />
  );
};
export default QualityManagement;
