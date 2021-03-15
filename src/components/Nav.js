import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__right">
        <div className="nav__logo">crowdfund</div>
      </div>
      <div className="nav__left">
        <ul className="nav__menu">
          <li className="menu__item">About</li>
          <li className="menu__item">Discover</li>
          <li className="menu__item">Get Started</li>
        </ul>
      </div>
    </nav>
  );
}
