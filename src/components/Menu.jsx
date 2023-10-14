import React from "react";
import Burger from "../assets/burger.jpg";
import "../scss/pages/menu/_menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="top_information">
        <h1>Our Burgers</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card__img">
            <img src={Burger} alt="burger_photo" />
          </div>
          <div className="card__informations">
            <h1>Efso Burger</h1>
            <p>150gr Kasap Burger.Patates Turşu</p>
            <h4>250 TL</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img src={Burger} alt="burger_photo" />
          </div>
          <div className="card__informations">
            <h1>Efso Burger</h1>
            <p>150gr Kasap Burger.Patates Turşu</p>
            <h4>250 TL</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img src={Burger} alt="burger_photo" />
          </div>
          <div className="card__informations">
            <h1>Efso Burger</h1>
            <p>150gr Kasap Burger.Patates Turşu</p>
            <h4>250 TL</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img src={Burger} alt="burger_photo" />
          </div>
          <div className="card__informations">
            <h1>Efso Burger</h1>
            <p>150gr Kasap Burger.Patates Turşu</p>
            <h4>250 TL</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img src={Burger} alt="burger_photo" />
          </div>
          <div className="card__informations">
            <h1>Efso Burger</h1>
            <p>150gr Kasap Burger.Patates Turşu</p>
            <h4>250 TL</h4>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img src={Burger} alt="burger_photo" />
          </div>
          <div className="card__informations">
            <h1>Efso Burger</h1>
            <p>150gr Kasap Burger.Patates Turşu</p>
            <h4>250 TL</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
