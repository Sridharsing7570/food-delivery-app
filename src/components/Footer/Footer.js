import React from "react";
import "./Footer.css";
import { assets } from "../../assest/Assest";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod laudantium inventore repellat rerum, minima alias. Quidem eaque recusandae molestiae error eum. Reprehenderit quod veritatis quos eos ut cupiditate sed.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 868749857</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
