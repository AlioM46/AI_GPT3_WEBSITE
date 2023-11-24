import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer section__padding ">
      <div className="footer__text">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="footer__grid">
        {/*  */}
        <div>
          <h1>GPT-3</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {/*  */}
        <div>
          <p>Links</p>
          <span>Overons</span>
          <span>Social Media</span>
          <span>Counters</span>
          <span>Contact</span>
        </div>
        <div>
          <p>Company</p>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Contact</span>
        </div>
        <div>
          <p>Get in touch</p>
          <span>Crechterwoord K12 182 DK Alknjkcb</span>
          <span>085-132567</span>
          <span>info@payme.net</span>
          <span>Contact</span>
        </div>
      </div>
      <p>
        © {new Date().getFullYear()} ❤️ GPT-3. All rights reserved. ( By Ali ❤️
        )
      </p>
    </div>
  );
};

export default Footer;
