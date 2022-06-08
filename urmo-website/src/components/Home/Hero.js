import React from 'react'
import HeroImage from "../../assets/images/12thGenSmile.jpg";
import '../../assets/css/Home/Hero.css';

export default function Hero() {
  return (
    <div className='hero-container'>
        <img src={HeroImage} alt="Hero Image"/>

    </div>
  )
}
