import React from "react";

const MenuItem = ({ image, name, content, price }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt="burger_photo" />
      </div>
      <div className="card__informations">
        <h1>{name}</h1>
        <p>{content}</p>
        <h4>{price} TL</h4>
      </div>
    </div>
  );
};

export default MenuItem;
