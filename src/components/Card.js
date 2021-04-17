import "../styles/Card.css";
import { project } from "./TextData";

export default function Card({ card, fct }) {
  const { id, title, pledgeCost, textAbout, countLeft, isDisabled } = card;
  const { btntoggleModal } = fct;
  const { btnTextActive, btnTextDisabled } = project;
  const openModal = () => {
    btntoggleModal(id);
  };
  return (
    <div
      className={
        "card tile tile-padding " + (isDisabled ? "tile-disabled" : "")
      }
    >
      <div className="card__header">
        <div className="card__title title">{title}</div>
        <div className="card__pledge">Pledge ${pledgeCost} or more</div>
      </div>
      <div className="card__about">{textAbout}</div>
      <div className="card__footer">
        <div className="card__daysLeft">
          <p className="number">{countLeft}</p>
          <p className="text">left</p>
        </div>
        {isDisabled ? (
          <div className="card__button button btn btn-primary btn-disabled">
            {btnTextDisabled}
          </div>
        ) : (
          <div
            className="card__button button btn btn-primary "
            onClick={openModal}
          >
            {btnTextActive}
          </div>
        )}
      </div>
    </div>
  );
}
