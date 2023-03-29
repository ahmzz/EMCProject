import React from "react";
import './style.css'
import image from '../../assets/hourglass.png'
import Aos from "aos";
const ComingSoon = () => {

  React.useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
  },[])
  return (
    <div className="body">
    <h1 className='sectionHeading' data-aos='fade-down'>ERP Program Provider</h1>
      <div className="wrapper">
        {/* <img src={image} /> */}
        
        <div className="hourglass"></div>
        <h1 style={{color:"#7E22CE"}}>Coming Soon<span className="dot" style={{color:"#f59e0b"}}>.</span></h1>
        
      </div>
    </div>
  );
};

export default ComingSoon;
