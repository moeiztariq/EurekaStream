import React from "react";
import "./index.css";
import CustomSC from "../../../static/img/custom.webp";
import { CardsData } from "../../helpers/helpers";
const Services = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <span>Our Services</span>
        <h2>High-impact technology services</h2>
        <p>
          5+ Years of experience in software services, delivering amazing
          projects.
        </p>
      </div>
      <div className="serv-cards">
        {CardsData.map((item, index) => (
          <div className="card-area" key={index}>
            <img src={CustomSC} alt="" />
            <h3 className="title">{item.name}</h3>
            <p className="card-prg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
