import { useState } from "react";
import "../styles/Nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__navbar">
        <div className="nav__left">
          <a href="/#" className="nav__logo">
            crowdfund
          </a>
        </div>
        <div className="nav__right">
          <span
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav__menuBurgerIcon"
          >
            <img src="./images/icon-hamburger.svg" alt="menu-burger" />
          </span>
          <ul className="nav__menu">
            <a href="/#" className="menu__item">
              About
            </a>
            <a href="/#" className="menu__item">
              Discover
            </a>
            <a href="/#" className="menu__item">
              Get Started
            </a>
          </ul>
          <ul
            className={
              "nav__menuBurger " +
              (menuOpen ? "nav__menuBurger--show" : "nav__menuBurger--hide")
            }
          >
            <a href="/#" className="menu__itemBurger">
              About
            </a>
            <a href="/#" className="menu__itemBurger">
              Discover
            </a>
            <a href="/#" className="menu__itemBurger">
              Get Started
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
