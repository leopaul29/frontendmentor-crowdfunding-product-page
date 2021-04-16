import { useEffect, useState } from "react";

function ModalCard(props) {
  // props
  const {
    id,
    title,
    pledgeCost,
    textAbout,
    countLeft,
    isSelected,
    isDisabled,
  } = props;
  const {
    increaseTotalBacked,
    setSelectedIndexCard,
    btntoggleCheckModal,
  } = props.fct;
  // state
  const [price, setPrice] = useState(0);
  const [canContinue, setCanContinue] = useState(true);
  const [cardNumber, setCardNumber] = useState(countLeft);
  const [disableCard, setDisableCard] = useState(isDisabled);
  const [selectedCard, setSelectedCard] = useState(isSelected);
  // effect
  useEffect(() => {
    setCanContinue(true);
    if (Number(price) < Number(pledgeCost)) setCanContinue(false);
  }, [price, pledgeCost]);
  useEffect(() => {
    setPrice(pledgeCost);
  }, [pledgeCost]);
  useEffect(() => {
    if (cardNumber === 0) {
      setDisableCard(true);
      setSelectedCard(false);
    }
  }, [cardNumber]);
  // fonctions
  const selectModalCard = () => {
    if (!disableCard) {
      setSelectedIndexCard(id);
    }
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const payModalCard = () => {
    increaseTotalBacked(price);
    if (cardNumber) {
      setCardNumber(cardNumber - 1);
      if (cardNumber === 0) {
        setDisableCard(true);
      }
    }

    btntoggleCheckModal();
  };

  return (
    <div
      onClick={selectModalCard}
      className={
        "modalCard card tile tile-padding " +
        (disableCard ? "tile-disabled" : "") +
        (selectedCard ? "modalCard--selected" : "")
      }
    >
      <div className="modalCard__top">
        <div className="modalCard__left">
          <div className="modalCard__selection">
            <div
              className={selectedCard ? "modalCard__selection--selected" : ""}
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
              {cardNumber && (
                <div className="card__countLeft">
                  <p className="number">{cardNumber}</p>
                  <p className="text">left</p>
                </div>
              )}
            </div>
          </div>
          <div className="modalCard__about card__about">{textAbout}</div>
        </div>
      </div>
      {selectedCard ? (
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
