import React from "react";
import "./index.css";

import ReactLogo from "../../../static/img/react.png";
import AWS from "../../../static/img/aws.png";
import GraphQl from "../../../static/img/graphQl.svg";
import Python from "../../../static/img/Python.png";
import Django from "../../../static/img/django.png";
// import NodeJs from "../../../static/img/Nodejs.svg";
import NextJs from "../../../static/img/nextjs.svg";
import BlockChain from "../../../static/img/blockchain.png";
import NodeJs from "../../../static/img/nodejs2.svg";

const Technologies = () => {
  return (
    <div className="tech-container">
      <div className="tech-pd">
        <div className="tech-title">
          <span className="stack">Tech stack</span>
          <h2>Technologies We Love Working</h2>
        </div>
        <div className="ts-1">
          <img src={ReactLogo} alt="" />
          <GraphQl className="gr-svg" />
          <img src={Python} alt="" />
          <img src={AWS} alt="" className="aws-img" />
        </div>
        <div className="ts-2">
          <img src={Django} alt="" />
          <NodeJs className="gr-svg" />
          <NextJs className="gr-svg" />
          <img src={BlockChain} alt="" className="aws-img" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
