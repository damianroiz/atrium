import React, { useState } from "react";
import { Link } from 'wouter';
// import "./components.css";

export const Navbar =() => {
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
          <Link href="/" className="menu-item">
            Home
          </Link>
          <Link href="/About"className="menu-item">
            About
          </Link>
          <Link href="/Services" className="menu-item">
            Services
          </Link>
          <Link href="/Blog" className="menu-item">
             Blog
          </Link>
          <Link href="/Contact" className="menu-item">
            Contact
          </Link>
        <div className="covidBtn">
          <Link href="/Covid19" className="menu-item">
            Covid-19 Alert
          </Link>
        </div>
        </div>
        <div className={menuClass}></div>
      </nav>
    </div>
  );
};
