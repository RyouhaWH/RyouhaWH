import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import {RiCake3Line} from "react-icons/ri"

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const modNavBorder = () => {
    const header = document.getElementById("header");
    if (window.scrollY >= 85) {
      header.classList.add("bg-header");
      header.classList.remove("bg-header-off");
    } else {
      header.classList.add("bg-header-off");
      header.classList.remove("bg-header");
    }
    // window.scrollY >= 50
    //   ? header.classList.add("bg-header")
    //   : header.classList.remove("bg-header");
  };

  window.addEventListener("scroll", modNavBorder);

  return (
    <header className="header" id="header">
      <nav className="navbar">
        <a className="navbar__logo" href="/">
          <RiCake3Line fontSize={27}/>
          <h2 className="">Dulce Flor</h2>
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#popular">Popular</a>
          </li>
          <li>
            <a href="#recently">Recently</a>
          </li>
          <li>
            <a href="#newsletter">Newsletter</a>
          </li>
        </ul>

        <div>
          <a href="#menu">
            <button className="custom__button">Ver Carta</button>
          </a>
        </div>

        <div className="navbar__responsive">
          <GiHamburgerMenu onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="navbar__responsive-overlay slide-bottom">
              <MdRestaurantMenu
                className="close_icon"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />

              <ul className="navbar__responsive-overlay_links">
                <li className="navbar__link">
                  <a href="#home">Home</a>
                </li>
                <li className="navbar__link">
                  <a href="#aboutus">About Us</a>
                </li>
                <li className="navbar__link">
                  <a href="#popular">Popular</a>
                </li>
                <li className="navbar__link">
                  <a href="#recently">Recently</a>
                </li>
                <li className="navbar__link">
                  <a href="#newsletter">Newsletter</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
