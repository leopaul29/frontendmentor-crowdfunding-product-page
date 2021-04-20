import { useEffect, useState } from "react";
import "../styles/Nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerStyle, setBurgerStyle] = useState({ display: "none" });
  useEffect(() => {
    menuOpen
      ? setBurgerStyle({ display: "block" })
      : setBurgerStyle({ display: "none" });
  }, [menuOpen]);

  return (
    <nav className="nav">
      <div className="nav__navbar">
        <div className="nav__right">
          <div className="nav__logo">crowdfund</div>
        </div>
        <div className="nav__left">
          <span
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav__menuBurgerIcon"
          >
            <img src="./images/icon-hamburger.svg" alt="menu-burger" />
          </span>
          <ul className="nav__menu">
            <li className="menu__item">About</li>
            <li className="menu__item">Discover</li>
            <li className="menu__item">Get Started</li>
          </ul>
          <ul className="nav__menuBurger" style={burgerStyle}>
            <li className="menu__itemBurger">About</li>
            <li className="menu__itemBurger">Discover</li>
            <li className="menu__itemBurger">Get Started</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
