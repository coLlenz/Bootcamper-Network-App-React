import React, { useState } from "react";
import "./NavBar.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
const logo = require("../../images/thisone.png");
const burgerMenu = require("../../images/burgerMenu.svg");

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navBar">
      <Link to="/dash">
        <img src={logo} className="logo" alt="school of code logo" />
      </Link>
      <img
        src={burgerMenu}
        className="burgerMenu"
        alt="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && <Menu />}
      <hr />
    </div>
  );
}

export default NavBar;
