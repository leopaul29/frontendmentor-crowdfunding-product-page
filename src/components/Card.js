export default function Card({
  title,
  pledgeCost,
  textAbout,
  daysLeft,
  buttonText,
}) {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__pledge">Pledge ${pledgeCost} or more</div>
      <div className="card__about">{textAbout}</div>
      <div className="card__daysLeft">{daysLeft} left</div>
      <div className="card__button button">{buttonText}</div>
    </div>
  );
}
