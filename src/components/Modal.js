import ModalCard from "./ModalCard";
import "../styles/Modal.css";
import { useEffect } from "react";
import { modal, cards } from "./TextData";

function Modal({
  selectedIndexCard,
  setSelectedIndexCard,
  btntoggleModal,
  btntoggleCheckModal,
}) {
  useEffect(() => {
    //console.log("modal.cards", modal.cards);
    cards.map((card) => {
      if (card.id === selectedIndexCard) {
        console.log("selectedIndexCard true1", card);
        card.isSelected = true;
      }
      return card;
    });
  }, [selectedIndexCard]);

  return (
    <div className="modal project tile">
      <span className="modal__close" onClick={btntoggleModal}>
        <img src="./images/icon-close-modal.svg" alt="close-modal" />
      </span>
      <h2 className="modal__title title">{modal.title}</h2>
      <p className="text">{modal.about}</p>

      <div className="project__cards">
        {cards.map((card) => (
          <ModalCard
            key={card.id}
            {...card}
            btntoggleCheckModal={btntoggleCheckModal}
            setSelectedIndexCard={setSelectedIndexCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Modal;
