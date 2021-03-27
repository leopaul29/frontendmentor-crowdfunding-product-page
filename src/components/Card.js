import "../styles/Card.css";

export default function Card({
  id,
  title,
  pledgeCost,
  textAbout,
  daysLeft,
  buttonText,
  isDisabled,
  btntoggleModal,
}) {
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
          <p className="number">{daysLeft}</p>
          <p className="text">left</p>
        </div>
        {isDisabled ? (
          <div className="card__button button btn btn-primary btn-disabled">
            {buttonText}
          </div>
        ) : (
          <div
            className="card__button button btn btn-primary "
            onClick={btntoggleModal}
          >
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
}
