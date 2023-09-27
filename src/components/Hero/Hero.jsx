import { useState } from "react";
import FaceModelling from "../../assets/Face Modelling.svg";
import Commercial from "../../assets/Commercial.svg";
import Runway from "../../assets/Runway.svg";
import Editorial from "../../assets/Editorial.svg";

import "./Hero.css";

const featuredItems = [
  {
    id: 1,
    img: FaceModelling,
    text: "Face Modelling",
  },
  {
    id: 2,
    img: Commercial,
    text: "Commercial",
  },
  {
    id: 3,
    img: Runway,
    text: "Runway",
  },
  {
    id: 4,
    img: Editorial,
    text: "Editorial",
  },
];

const Hero = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  function handleHover(item) {
    if (hoveredItem !== item.id) {
      setHoveredItem(item.id);
    }
  }

  function removeHover() {}

  const featured = featuredItems.map((item) => {
    return (
      <div
        className={
          hoveredItem === item.id ? "flex__image hovered" : "flex__image"
        }
        key={item.id}
        onMouseEnter={() => handleHover(item)}
        onMouseLeave={() => removeHover()}
        style={{
          backgroundColor: `${hoveredItem === item.id ? "red" : "transparent"}`,
        }}
      >
        <img src={item.img} alt="" />
      </div>
    );
  });

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
        {featured}
        {/* <div className="flex__image"></div>
        <div className="flex__image"></div>
        <div className="flex__image"></div>
        <div className="flex__image"></div> */}
      </div>
    </div>
  );
};

export default Hero;
