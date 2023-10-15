import React from "react";
import BurgerBanner from "../assets/banner.png";
import "../scss/pages/contact/_contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div className="left_side">
        <div className="img">
          <img src={BurgerBanner} alt="burger_banner" />
        </div>
      </div>
      <div className="right_side">
        <h1>Contact with Us !</h1>
        <form action="">
          <label htmlFor="">Name Surname</label>
          <input type="text" placeholder="Enter name and surname" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter the email" />
          <label htmlFor="">Message</label>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Enter the message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
