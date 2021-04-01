function ModalCard({
  id,
  title,
  pledgeCost,
  textAbout,
  daysLeft,
  isSelected,
  isDisabled,
  setSelectedIndexCard
}) {
  
  return (
    <div onClick={setSelectedIndexCard}
      className={
        "modalCard card tile tile-padding " +
        (isDisabled ? "tile-disabled" : "")
      }
    >
      <div className="modalCard__left">
        <div className="modalCard__selection">
          <div
            className={
              "modalCard__selection " +
              (isSelected ? "modalCard__selected" : "modalCard__notselected")
            }
          >
            &nbsp;
          </div>
        </div>
      </div>
      <div className="modalCard__right">
        <div className="card__header">
          <div className="modalCard__headerLeft">
            <div className="modalCard__title card__title title">{title}</div>
            {pledgeCost && (
              <div className="card__pledge">Pledge ${pledgeCost} or more</div>
            )}
          </div>
          <div className="modalCard__headerRight">
            {daysLeft && (
              <div className="card__daysLeft">
                <p className="number">{daysLeft}</p>
                <p className="text">left</p>
              </div>
            )}
          </div>
        </div>
        <div className="card__about">{textAbout}</div>
        <div className="card__footer">
          Footer collapsible
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
