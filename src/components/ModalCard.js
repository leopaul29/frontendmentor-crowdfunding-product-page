import { useEffect, useState } from "react";

function ModalCard({ card, state }) {
  // props
  const {
    id,
    title,
    pledgeCost,
    textAbout,
    countLeft,
    isSelected,
    isDisabled,
  } = card;
  const {
    increaseTotalBacked,
    setSelectedIndexCard,
    setCountLeft,
    setSelected,
    setDisabled,
    btntoggleCheckModal,
  } = state.fct;
  // state
  const [price, setPrice] = useState(0);
  const [canContinue, setCanContinue] = useState(true);
  // effect
  useEffect(() => {
    setCanContinue(true);
    if (Number(price) < Number(pledgeCost)) setCanContinue(false);
  }, [price, pledgeCost]);
  useEffect(() => {
    setPrice(pledgeCost);
  }, [pledgeCost]);
  useEffect(() => {
    if (countLeft === 0) {
      setDisabled(id, true);
      setSelected(id, false);
    }
  }, [id, countLeft, setDisabled, setSelected]);
  // fonctions
  const selectModalCard = () => {
    if (!isDisabled) {
      setSelectedIndexCard(id);
    }
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const payModalCard = () => {
    console.info("price", price);
    increaseTotalBacked(price);
    if (countLeft) {
      setCountLeft(id, countLeft - 1);
      if (countLeft === 0) {
        setDisabled(id, true);
      }
    }

    btntoggleCheckModal();
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
              {countLeft && (
                <div className="card__countLeft">
                  <p className="number">{countLeft}</p>
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
                <div onClick={payModalCard} className="btn btn-primary">
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
