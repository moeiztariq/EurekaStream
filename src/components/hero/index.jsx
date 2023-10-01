import React from "react";
import "./index.css";
import HeroImg from "../../../static/img/pexels-photo-3184421.webp";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="h1-title">
          <h1>Crafting Transformative Technologies for Lasting Impact</h1>
        </div>
        <div className="title-txt">
          <p>
            We empower thriving businesses with our software solutions, 
            propelling your journey from inception to exponential growth.
          </p>
        </div>
      </div>
      <div className="hero-right">
        <div className="overlay"></div>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
