import { useState } from "react";
import NavLogo from "../../assets/Fashionistar.svg";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setISOpen] = useState(false);

  function handleClick() {
    setISOpen(!isOpen);
  }

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={NavLogo} alt="fashionistar Logo" />
      </div>

      <div className="nav__burger" onClick={() => handleClick()}>
        <div className={isOpen ? "burger__menu close" : "burger__menu"}></div>
      </div>

      <div className={isOpen ? "right__nav open" : "right__nav"}>
        <div className="nav__links">
          <ul>
            <li>About Us</li>
            <li>Categories</li>
            <li>Skills</li>
            <li>Our Models</li>
          </ul>
        </div>
        <div className="nav__button">
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
