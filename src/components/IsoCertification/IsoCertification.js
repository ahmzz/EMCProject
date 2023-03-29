import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import bg from "../../assets/iso_hero_bg.jpeg";
import "./style.css";
import Aos from "aos";

const IsoCertification = () => {
  React.useEffect(()=>{
    Aos.init({
      offset: 260,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 150,
    })
  },[])

  return (
    <div className="section">
      <img src={bg} className="sectionBg" />
      <h2 className="overlayName" data-aos="slide-right">ISO Consultancy</h2>
      <div className="isoBody">
        <div className="left_side">
          <LeftSide />
        </div>
        <div className="right_side">
          <RightSide />
        </div>
      </div>
      
    </div>
  );
};



export default IsoCertification;
