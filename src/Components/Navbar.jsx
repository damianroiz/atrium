import { DownloadIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link } from "wouter";

import "./components.css";

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
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/About">
            <a>About</a>
          </Link>
          <Link href="/Services">
            <a>Services</a>
          </Link>
          <Link href="/Blog">
            <a>Blog</a>
          </Link>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
        <div className="covidBtn">
          <Link href="/Covid19">
            <a className="">Covid-19 Alert</a>
          </Link>
        </div>
        </div>
        <div className={menuClass}></div>
      </nav>
    </div>
  );
};
