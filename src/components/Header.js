import { useState } from "react";
import "../styles/Header.css";

export default function Header(props) {
  const { btntoggleModal } = props;

  return (
    <header className="header tile tile-padding">
      <div className="header__logo">
        <img src="./images/logo-mastercraft.svg" alt="logo-mastercraft" />
      </div>
      <div className="header__content">
        <h1 className="header__title">Mastercraft Bamboo Monitor Riser</h1>
        <h3 className="header__subtitle">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </h3>
        <div className="header__actions">
          <div className="header__cta btn btn-primary" onClick={btntoggleModal}>
            Back this project
          </div>
          <BookmarkBtn />
        </div>
      </div>
    </header>
  );
}

function BookmarkBtn() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div
      className={
        "header__bookmark btn " +
        (isBookmarked ? "btn-bookmarked" : "btn-bookmark")
      }
      onClick={() => setIsBookmarked(!isBookmarked)}
    >
      <span className="icon-bookmark">
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill="#147b74" cx="28" cy="28" r="28" />
            <path fill="#FFF" d="M23 19v18l5-5.058L33 37V19z" />
          </g>
        </svg>
      </span>{" "}
      {isBookmarked ? "Bookmarked" : "Bookmark"}
    </div>
  );
}
