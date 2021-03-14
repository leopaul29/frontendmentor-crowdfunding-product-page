export default function Header(props) {
  const { title, subtitle, mainButton, bookmarkButton } = props;

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__title">{title}</div>
      <div className="header__subtitle">{subtitle}</div>
      <div className="header__cta button">Back this project</div>
      <div className="header__bookmark">Bookmark</div>
    </header>
  );
}
