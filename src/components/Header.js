import "../styles/Header.css";

export default function Header(props) {
  const { title, subtitle, mainButton, bookmarkButton } = props;

  return (
    <header className="header tile tile-padding">
      <div className="header__logo">
        <img src="./images/logo-mastercraft.svg" alt="logo-mastercraft" />
      </div>
      <div className="header__content">
        <h1 className="header__title">{title}</h1>
        <h3 className="header__subtitle">{subtitle}</h3>
        <div className="header__actions">
          <div className="header__cta btn btn-primary">Back this project</div>
          <div className="header__bookmark btn btn-secondary">Bookmark</div>
        </div>
      </div>
    </header>
  );
}
