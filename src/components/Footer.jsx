import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "../scss/layout/footer/_footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedias">
        <Link>
          <AiFillFacebook />
        </Link>
        <Link>{<AiFillInstagram />}</Link>
        <Link>{<AiFillTwitterCircle />}</Link>
      </div>
      <div className="rights">
        <p>All Right Reserved | BurgerYiyelim</p>
      </div>
    </div>
  );
};

export default Footer;
