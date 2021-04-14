import ModalCard from "./ModalCard";
import "../styles/Modal.css";
import { modal, cards } from "./TextData";

function Modal(props) {
  const { closeAllModal } = props.fct;
  return (
    <div className="modal project tile">
      <span className="modal__close" onClick={closeAllModal}>
        <img src="./images/icon-close-modal.svg" alt="close-modal" />
      </span>
      <h2 className="modal__title title">{modal.title}</h2>
      <p className="text">{modal.about}</p>

      <div className="project__cards">
        {cards.map((card) => (
          <ModalCard key={card.id} {...card} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Modal;
