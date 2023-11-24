import React from "react";
import "./article.css";

const Article = ({image, date, title}) => {
  console.log(image);
  console.log(date);
  console.log(title);
  return (
    <div className="article">
      <div className="article__image">
        <img src={image} alt="" />
      </div>
      <div className="article__text">
        <span>{date}</span>
        <h4>{title}</h4>
        <a href="#">Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
