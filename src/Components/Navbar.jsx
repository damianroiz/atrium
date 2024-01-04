import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //change burger classes
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuCLicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav className="main-menu">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
        <div className="menu-items">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/About" className="menu-item">
            About
          </Link>
          <Link to="/Services" className="menu-item">
            Services
          </Link>
          <Link to="/Blog" className="menu-item">
            Blog
          </Link>
          <div className="covidBtn">
            <Link to="" className="menu-item">
              Covid-19 Alert
            </Link>
          </div>
        </div>
        <div className={menuClass}></div>
      </nav>
    </div>
  );
};
