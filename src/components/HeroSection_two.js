import React from 'react'
import HeroSection from './HeroSectionComponent'
import myBackgroundImage from '../assets/Servive-2-BG.jpg';

const HeroSection_two = () => {
  return (
    <div>
        <HeroSection image={myBackgroundImage} title="Management Consulting"  buttonPera={"Order Now"} />
        
    </div>
  )
}

export default HeroSection_two