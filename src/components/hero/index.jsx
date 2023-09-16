import React from "react";
import "./index.css";
import HeroImg from "../../../static/img/pexels-photo-3184421.webp";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="h1-title">
          <h1>On target software solutions</h1>
          <h1> that help your business grow!</h1>
        </div>
        <div className="title-txt">
          <p>
            We are a diverse team of highly skilled individuals committed to
            providing innovative software solutions that deliver results for
            your business.
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
