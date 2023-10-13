import { useState } from "react";
import "./Hero.css";

const featuredItems = [
  {
    id: 1,
    class: "face",
  },
  {
    id: 2,
    class: "commercial",
  },
  {
    id: 3,
    class: "runway",
  },
  {
    id: 4,
    class: "editorial",
  },
];

const Hero = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [buttonHover, setButtonHover] = useState(true)

  function handleHover(item) {
    if (hoveredItem !== item.id) {
      setHoveredItem(item.id);
    }
  }

  function hoveredButton () {
    setButtonHover(true);
  }

  function removeButtonHover () {
    setButtonHover(false)
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
          <button onMouseEnter={() => hoveredButton()} onMouseLeave={() => removeButtonHover()}>
            <div className={buttonHover ? "yellow full" : "yellow"}></div>
            <p>Text</p>
          </button>
        </div>
      </div>
      <div className="hero__images">{featured}</div>
    </div>
  );
};

export default Hero;
