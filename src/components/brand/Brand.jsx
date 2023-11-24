import React from "react";
import logo4 from "../../assets/atlassian.png";
import logo1 from "../../assets/dropbox.png";
import logo5 from "../../assets/google.png";
import logo2 from "../../assets/shopify.png";
import logo3 from "../../assets/slack.png";
import "./brand.css";

const Brand = () => {
  return (
    <div className="section__padding brand">
      <div>
        <img src={logo1} alt="Our Partners" title="Our Partners" />
      </div>
      <div>
        <img src={logo2} alt="Our Partners" title="Our Partners" />
      </div>
      <div>
        <img src={logo3} alt="Our Partners" title="Our Partners" />
      </div>
      <div>
        <img src={logo4} alt="Our Partners" title="Our Partners" />
      </div>
      <div>
        <img src={logo5} alt="Our Partners" title="Our Partners" />
      </div>
    </div>
  );
};

export default Brand;
