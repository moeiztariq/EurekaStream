import React from "react";
import "./index.css";
import CustomSC from "../../../static/img/custom.webp";
import { CardsData } from "../../helpers/helpers";
import { Link } from "react-scroll";
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
          <Link to={item.to} className="card-area" smooth={true}>
            <div key={index}>
              {console.log(item, "OOOO")}
              <img src={item.icon} alt="" />
              <h3 className="title">{item.name}</h3>
              <p className="card-prg">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
