import React from "react";
import "./index.css";
import BackgroundImg from "../../../../static/img/green-back.jpg";
import CustomBackGround from "../../../../static/img/custom3.png";
import CustomMobilefrom from "../../../../static/img/customMobile.png";
import Ecom from "../../../../static/img/ecom1.png";
import EcomMobile from "../../../../static/img/ecomMobile.png";
import EcomLaptop from "../../../../static/img/ecomLaptop1.png";
import Mobile1 from "../../../../static/img/mobile1.png";
import Mobile2 from "../../../../static/img/mobile2.png";
import Mobile3 from "../../../../static/img/mobile3.png";
import Mobile4 from "../../../../static/img/mobile4.png";

import UIUX from "../../../../static/img/uiux1.png";
import uiuxLeft from "../../../../static/img/uiux-left.png";
import uiuxright from "../../../../static/img/uiux-right.png";

import Link from "@docusaurus/Link";
const Projects = () => {
  return (
    <div className="project-container">
      <div className="left-box">
        <div className="box-title">Web App Development</div>
        <p className="large-text">
          From web applications to mobile applications EurekaStream offers a
          wide array of custom software development solutions to its customers.
        </p>
      </div>
      <div className="right-box" id="custom">
        <Link to={"https://www.urbanform.us/"}>
          <img src={BackgroundImg} alt="" className="back-img" />
          <img src={CustomBackGround} alt="" className="overylay-img" />
          <img src={CustomMobilefrom} alt="" className="mob-img" />
        </Link>
      </div>

      <div className="right-box" id="ecom">
        <img src={BackgroundImg} alt="" className="back-img" />
        <Link to={"https://www.sharove.com/"}>
          <img src={Ecom} alt="" className="overylay-img" />
          <img src={EcomMobile} alt="" className="mob-img" />
          <img src={EcomLaptop} alt="" className="lap-img" />
        </Link>
      </div>
      <div className="left-box">
        <div className="box-title">E-Commerce Service</div>
        <p className="large-text">
          From platform customization to migrations, we offer a wide variety of
          e-commerce solutions. Unlock the full potential of your online store
          with our ecommerce services.
        </p>
      </div>
      <div className="left-box">
        <div className="box-title">Mobile Development</div>
        <p className="large-text">
          We specialize in crafting stunning and intuitive UI/UX designs,
          enhancing user experiences through seamless collaboration, and
          executing streamlined projects that deliver exceptional results for
          iOS and Android development.
        </p>
      </div>
      <div className="right-box" id="mobile">
        <img src={BackgroundImg} alt="" className="back-img" />
        <div className="mob-flex">
          <Link
            className="mobile-img"
            to={
              "https://apps.apple.com/us/app/live-wallpaper-4k-wallpapers/id1606352352"
            }
          >
            <img src={Mobile1} alt="" />
          </Link>
          <Link
            className="mobile-img"
            to={
              "https://apps.apple.com/us/app/collage-maker-photo-combiner/id1610287695"
            }
          >
            <img src={Mobile2} alt="" />
          </Link>
          <Link
            className="mobile-img"
            to={
              "https://play.google.com/store/apps/details?id=com.absas.app&pli=1"
            }
          >
            <img src={Mobile3} alt="" />
          </Link>
          <Link
            className="mobile-img"
            to={
              "https://play.google.com/store/apps/details?id=com.drudotstech.queenstatus"
            }
          >
            <img src={Mobile4} alt="" />
          </Link>
        </div>
      </div>
      <div className="right-box" id="uiux">
        <img src={BackgroundImg} alt="" className="back-img" />
        <Link to={"https://www.sharove.com/"}>
          <img src={UIUX} alt="" className="overylay-uiux" />
          <img src={uiuxLeft} alt="" className="mob-left" />
          <img src={uiuxright} alt="" className="mob-right" />
        </Link>
      </div>
      <div className="left-box">
        <div className="box-title">UI/UX Design</div>
        <p className="large-text">
          We are specialized in creating beautiful and smooth UI/UX designs that
          provide better user experience by incorporating effective
          collaboration, streamlined projects which strive for better results.
        </p>
      </div>
    </div>
  );
};

export default Projects;
