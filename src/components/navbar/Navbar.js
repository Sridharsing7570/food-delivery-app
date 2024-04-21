import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assest/Assest";
import { Link } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
     <Link to="/"> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile App")}
          className={menu === "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="navbar-button">
          sign in
        </button>
      </div>
    </div>
  );
};
