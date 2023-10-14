import React from "react";
import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../scss/layout/navbar/_navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__img">
        <Link to={"/"}>
          <img src={BurgerLogo} alt="burger_logo" />
        </Link>
      </div>
      <div className="navbar__links">
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
