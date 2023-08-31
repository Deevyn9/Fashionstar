import React, { useState } from "react";
import NavLogo from "../../assets/Fashionistar.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={NavLogo} alt="fashionistar Logo" />
      </div>
      <div className="right__nav">
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
