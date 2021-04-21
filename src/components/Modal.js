import ModalCard from "./ModalCard";
import "../styles/Modal.css";
import { modal } from "./TextData";

function Modal({ cardsState, state }) {
  const { closeAllModal } = state.fct;
  return (
    <div className="modal project tile">
      <div className="modal__header">
        <h2 className="modal__title title">{modal.title}</h2>
        <span className="modal__close" onClick={closeAllModal}>
          <img src="./images/icon-close-modal.svg" alt="close-modal" />
        </span>
      </div>
      <p className="text">{modal.about}</p>

      <form className="project__cards">
        {cardsState.map((card) => (
          <ModalCard key={card.id} card={card} state={state} />
        ))}
      </form>
    </div>
  );
}

export default Modal;
