import { useState } from "react";
import FaceModelling from "../../assets/Face Modelling.png";
import Commercial from "../../assets/Commercial Modelling.png";
import Runway from "../../assets/runway modelling.png";
import Editorial from "../../assets/Editorial modelling.png";
import FaceModellingSmall from "../../assets/Face Modelling small.png";
import CommercialSmall from "../../assets/Commercial Modelling small.png";
import EditorialSmall from "../../assets/editorial modelling small.png";
import RunwaySmall from "../../assets/runway modelling small.png";
import "./Hero.css";

const featuredItems = [
  {
    id: 1,
    class: "face",
    img: FaceModelling,
    smallimg: FaceModellingSmall,
  },
  {
    id: 2,
    class: "commercial",
    img: Commercial,
    smallimg: CommercialSmall,
  },
  {
    id: 3,
    class: "runway",
    img: Runway,
    smallimg: RunwaySmall,
  },
  {
    id: 4,
    class: "editorial",
    img: Editorial,
    smallimg: EditorialSmall,
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
          hoveredItem === item.id
            ? `${item.class} flex__image hovered`
            : `${item.class} flex__image`
        }
        key={item.id}
        onClick={() => handleHover(item)}
        // style={}
      ></div>
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
