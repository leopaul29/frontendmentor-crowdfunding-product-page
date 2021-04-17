import ModalCard from "./ModalCard";
import "../styles/Modal.css";
import { modal } from "./TextData";

function Modal({cardsState, state}) {
  const { closeAllModal } = state.fct;
  return (
    <div className="modal project tile">
      <span className="modal__close" onClick={closeAllModal}>
        <img src="./images/icon-close-modal.svg" alt="close-modal" />
      </span>
      <h2 className="modal__title title">{modal.title}</h2>
      <p className="text">{modal.about}</p>

      <div className="project__cards">
        {cardsState.map((card) => (
          <ModalCard key={card.id} card={card} state={state} />
        ))}
      </div>
    </div>
  );
}

export default Modal;
