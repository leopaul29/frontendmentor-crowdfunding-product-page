import "../styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <img
        src="/images/image-hero-desktop.jpg"
        alt="hero"
        className="nav__background"
      />
      <div className="nav__navbar">
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
      </div>
    </nav>
  );
}
