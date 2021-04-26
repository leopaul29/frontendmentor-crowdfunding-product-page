import { useEffect, useState } from "react";
import "../styles/ModalCard.css";

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
        " card tile tile-padding " +
        (isDisabled ? "tile-disabled" : "") +
        (isSelected ? "modalCard--selected" : "")
      }
    >
      <div className="modalCard">
        <div className="modalCard__selectionCol">
          <input type="radio" name="reward" checked={isSelected} />
        </div>
        <div className="modalCard__header">
          <div className="modalCard__title card__title title">{title}</div>
          {pledgeCost && (
            <div className="modalCard__pledge card__pledge">
              Pledge ${pledgeCost} or more
            </div>
          )}
        </div>

        {countLeft && (
          <div className="modalCard__countLeft card__countLeft">
            <p className="number">{countLeft}</p>
            <p className="text">left</p>
          </div>
        )}
        <div className="modalCard__about card__about">{textAbout}</div>
      </div>
      {/* bottom part */}
      {isSelected ? (
        <div className="modalCard__footer">
          <div className="modalCard__footerText">Enter your pledge</div>

          <input
            type="text"
            className="modalCard__footerInput "
            value={isSelected ? price : ""}
            onChange={(e) => handleChangePrice(e)}
          />
          {canContinue ? (
            <button
              onClick={payModalCard}
              className="modalCard__footerBtn btn btn-primary"
            >
              Continue
            </button>
          ) : (
            <div className="modalCard__footerBtn btn btn-primary btn-disabled">
              Continue
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ModalCard;
