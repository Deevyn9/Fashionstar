import { useState } from "react";
import FaceModelling from "../../assets/Face Modelling.svg";
import Commercial from "../../assets/Commercial.svg";
import Runway from "../../assets/Runway.svg";
import Editorial from "../../assets/Editorial.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero__text">
        <h1>Ready, Set, Pose!</h1>
        <div className="hero__input">
          <input type="text" placeholder="Want to know more?" />
          <button>Text</button>
        </div>
      </div>
      <div className="hero__images">
        <div className="flex__image"></div>
        <div className="flex__image"></div>
        <div className="flex__image"></div>
        <div className="flex__image"></div>
      </div>
    </div>
  );
};

export default Hero;
