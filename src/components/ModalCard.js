import { useEffect, useState } from "react";

function ModalCard(props) {
  const {
    id,
    title,
    pledgeCost,
    textAbout,
    daysLeft,
    isSelected,
    isDisabled,
  } = props;
  useEffect(() => {
    setPrice(pledgeCost);
  }, [])
  const { setSelectedIndexCard, btntoggleCheckModal } = props.fct;
  const [price, setPrice] = useState(0);
  const [canContinue, setCanContinue] = useState(true);
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  useEffect(() => {
    setCanContinue(true);
    if (Number(price) < Number(pledgeCost)) setCanContinue(false);
  }, [price])
  const selectModalCard = () => {
    setSelectedIndexCard(id);
  };

  return (
    <div
      onClick={selectModalCard}
      className={
        "modalCard card tile tile-padding " +
        (isDisabled ? "tile-disabled" : "") +
        (isSelected ? "modalCard--selected" : "")
      }
    >
      <div className="modalCard__top">
        <div className="modalCard__left">
          <div className="modalCard__selection">
            <div className={isSelected ? "modalCard__selection--selected" : ""}>
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
          <div className="modalCard__about card__about">{textAbout}</div>
        </div>
      </div>
      {isSelected ? (
        <div className="modalCard__bottom">
          <div className="modalCard__footer">
            <div className="modalCard__footerLeft">Enter your pledge</div>
            <div className="modalCard__footerRight">
              <input
                type="text"
                className="modalCard__pledgeCost "
                value={price}
                onChange={(e) => handleChangePrice(e)}
              />
              {canContinue ? (
                <div onClick={btntoggleCheckModal} className="btn btn-primary">
                  Continue
                </div>
              ) : (
                <div className="btn btn-primary btn-disabled">Continue</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ModalCard;
