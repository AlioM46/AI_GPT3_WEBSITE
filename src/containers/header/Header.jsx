import React from "react";
import faceImage from "../../assets/ai.png";
import img1 from "../../assets/people.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header section__padding  " id="home">
      {/*  */}
      <div className="header__content">
        <div className="header__content__text">
          <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI{" "}
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className="header__content__input">
          <input type="text" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header__content__images">
          <img src={img1} alt="persons" title="Customers" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      {/*  */}
      <div className="header__ai">
        <img src={faceImage} alt="AI Image" title="Ai Image." />
      </div>
    </div>
  );
};

export default Header;
