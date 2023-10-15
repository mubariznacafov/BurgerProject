import React from "react";
import BurgerImage from "../assets/banneryeni.jpg";
import "../scss/pages/about/_about.scss"

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img src={BurgerImage} alt="burger_image" />
      </div>
      <div className="bottom_texts">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis
          repudiandae ut odio dolores at aperiam rem, similique quo eaque est
          nobis provident laudantium, facilis doloribus ratione quia aliquam
          commodi reprehenderit, obcaecati laboriosam libero nisi perferendis?
          Adipisci dignissimos vero vel quaerat cumque, possimus repudiandae
          illo minima ea repellat repellendus laboriosam maiores voluptatum
          veniam provident deleniti eius deserunt dolor eum quisquam odit.
          Maiores, saepe consequatur? Ipsum provident fugit quasi rem
          exercitationem porro iusto totam magnam architecto, iste consequuntur
          itaque quas, vitae alias at a sequi, temporibus ut fuga sapiente odio
          dignissimos. Explicabo totam, dolor molestiae numquam modi architecto
          praesentium! Non porro enim reprehenderit quis atque optio. Enim, sed
          suscipit! Labore, suscipit minus non distinctio expedita placeat
          tempore enim quisquam inventore repellat quod aliquam repudiandae
          voluptatibus officiis, vel quis nihil, fugiat amet nobis. Harum,
          minima laudantium, libero provident accusantium dignissimos optio, est
          quas placeat ad aut facilis. Animi expedita vel nostrum repellendus
          molestias fugit error ex, dolores nisi earum! Ea, veniam alias
          repellendus soluta velit accusamus quas et omnis, repudiandae
          exercitationem deserunt rem! Ducimus vero soluta accusantium odio
          expedita similique repellat beatae recusandae architecto a, eligendi
          numquam unde nisi pariatur, molestiae fuga dolorem. Quos cumque
          quisquam ut nostrum facilis atque similique consequatur!
        </p>
      </div>
    </div>
  );
};

export default About;
