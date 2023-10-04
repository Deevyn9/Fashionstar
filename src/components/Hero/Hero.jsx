import { useState } from "react";
import FaceModelling from "../../assets/Face Modelling.svg";
import Commercial from "../../assets/Commercial.svg";
import Runway from "../../assets/Runway.svg";
import Editorial from "../../assets/Editorial.svg";
import FaceModellingSmall from "../../assets/face small.png";
import CommercialSmall from "../../assets/commercial small.png";
import EditorialSmall from "../../assets/editorial small.png";
import RunwaySmall from "../../assets/runway small.png";
import "./Hero.css";

const featuredItems = [
  {
    id: 1,
    img: FaceModelling,
    smallimg: FaceModellingSmall,
    text: "Face Modelling",
  },
  {
    id: 2,
    img: Commercial,
    smallimg: CommercialSmall,
    text: "Commercial",
  },
  {
    id: 3,
    img: Runway,
    smallimg: RunwaySmall,
    text: "Runway",
  },
  {
    id: 4,
    img: Editorial,
    smallimg: EditorialSmall,
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

  const featured = featuredItems.map((item) => {
    return (
      <div
        className={
          hoveredItem === item.id ? "flex__image hovered" : "flex__image"
        }
        key={item.id}
        onClick={() => handleHover(item)}
        // style={}
      >
        <img src={hoveredItem === item.id ? item.img : item.smallimg} alt="" />
        <p>{item.text}</p>
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
      <div className="hero__images">{featured}</div>
    </div>
  );
};

export default Hero;
