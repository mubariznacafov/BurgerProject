import React from "react";
import Burger from "../assets/burger.jpg";
import "../scss/pages/menu/_menu.scss";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <div className="top_information">
        <h1>Our Burgers</h1>
      </div>
      <div className="cards">
        {Data.map((menuItem, index) => (
          <MenuItem
            image={menuItem.image}
            name={menuItem.name}
            content={menuItem.contect}
            price={menuItem.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
