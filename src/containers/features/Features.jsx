import React from "react";
import {Feature} from "../../components/index";
import "./features.css";

const textsAndTitles = [
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
];

const Features = () => {
  return (
    <div className="features section__padding ">
      <div className="features__overlay"></div>
      <div className="features__text">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="features__content">
        {textsAndTitles.map((item) => {
          return <Feature title={item.title} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Features;
