import { useState } from "react";
import "../styles/Header.css";

export default function Header(props) {
  const { btntoggleModal } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);

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
          <div
            className={
              "header__bookmark btn " +
              (isBookmarked ? "btn-bookmarked" : "btn-bookmark")
            }
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <span className="icon-bookmark">
              <img src="/images/icon-bookmark.svg" alt="bookmark" />
            </span>{" "}
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </div>
        </div>
      </div>
    </header>
  );
}
