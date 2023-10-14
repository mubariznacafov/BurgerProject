import React from "react";
import burgerBanner from "../assets/banneryeni.jpg";
import "../scss/pages/home/_burger.scss";

const Home = () => {
  return (
    <div className="home_page">
      <div className="banner">
        <div className="img">
          <img src={burgerBanner} alt="homeBanner" />
        </div>
        <button>Order Now !</button>
      </div>
    </div>
  );
};

export default Home;
