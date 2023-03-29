import React from "react";
import { HERO_LOWER_SECTIONS } from "../../pages/services/data";
import CustomVisionCard from "../common/CustomVisionCard";

const LowerHero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-start mt-[75px]">
      {HERO_LOWER_SECTIONS.map((item, index) => (
        <div data-aos="fade-right" style={{marginTop:"2rem"}}>
          <CustomVisionCard {...item} isOdd={index === 1} />
        </div>
      ))}
    </div>
  );
};

export default LowerHero;
