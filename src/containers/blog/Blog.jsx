import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import {blog1, blog2, blog3, blog4, blog5} from "./imports";

const BlogsObject = [
  {
    img: blog1,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: new Date().getTime() - 100000,
  },
  {
    img: blog2,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is??",
    date: new Date().getTime() - 1230000,
  },
  {
    img: blog3,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: new Date().getTime() - 14400,
  },
  {
    img: blog4,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: new Date().getTime() - 1522000,
  },
  {
    img: blog5,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: new Date().getTime() - 2000,
  },
];

const dateFormat = (date) => {
  const currentDate = new Date();
  const oldDate = new Date(date);
  const differenceDate = Math.floor(
    (currentDate.getTime() - oldDate.getTime()) / 1000
  );

  if (differenceDate <= 60) {
    return `${differenceDate} Second${differenceDate > 1 ? "s" : ""} ago`;
  } else if (differenceDate / 60 < 60) {
    return `${Math.floor(differenceDate / 60)} Minute${
      differenceDate > 60 ? "s" : ""
    } ago`;
  } else if (differenceDate / 60 / 60 < 24) {
    return `${Math.floor(differenceDate / 60 / 60)} Hour${
      differenceDate > 60 * 60 ? "s" : ""
    } ago`;
  } else if (differenceDate / 60 / 60 / 24 < 7) {
    return `${Math.floor(differenceDate / 60 / 60 / 24)} Day${
      differenceDate > 60 * 60 * 24 ? "s" : ""
    } ago`;
  }
};

const Blog = () => {
  return (
    <div className="blog section__padding ">
      <h1 className="gradient__text">
        A lot is happening, We are blogging about it.
      </h1>
      {/*  */}
      <div className="blog__content">
        <div className="groupA">
          <Article
            title={BlogsObject[0].title}
            image={BlogsObject[0].img}
            date={dateFormat(BlogsObject[0].date)}
          />
        </div>
        <div className="groupB">
          <Article
            title={BlogsObject[1].title}
            image={BlogsObject[1].img}
            date={dateFormat(BlogsObject[1].date)}
          />{" "}
          <Article
            title={BlogsObject[2].title}
            image={BlogsObject[2].img}
            date={dateFormat(BlogsObject[2].date)}
          />{" "}
          <Article
            title={BlogsObject[3].title}
            image={BlogsObject[3].img}
            date={dateFormat(BlogsObject[3].date)}
          />{" "}
          <Article
            title={BlogsObject[4].title}
            image={BlogsObject[4].img}
            date={dateFormat(BlogsObject[4].date)}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
