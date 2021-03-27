import { useState } from "react";
import "../styles/Project.css";
import Card from "./Card";
import CheckModal from "./CheckModal";
import Modal from "./Modal";

export default function Project(props) {
  const { title, aboutP1, aboutP2, cards } = props;

  const [toggleModal, setToggleModal] = useState(false);
  const [toggleCheckModal, setToggleCheckModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);

  const btntoggleModal = () => {
    setToggleModal(!toggleModal);
  };
  const btntoggleCheckModal = () => {
    setToggleCheckModal(!toggleCheckModal);
  };

  return (
    <div className="project tile">
      <h2 className="project__title title">{title}</h2>
      <p className="text">{aboutP1}</p>
      <p className="text">{aboutP2}</p>
      <button onClick={btntoggleModal}>modal</button>
      <button onClick={btntoggleCheckModal}>check-modal</button>
      <div
        className={"overlay " + (toggleModal ? "modal-block" : "modal-none")}
      >
        <div className="overlay__content">
          <Modal selectedCard={selectedCard} btntoggleModal={btntoggleModal} />
        </div>
      </div>

      <div
        className={
          "overlay " + (toggleCheckModal ? "modal-block" : "modal-none")
        }
      >
        <div className="overlay__content">
          <CheckModal />
        </div>
      </div>

      <div className="project__cards">
        {cards.map((card) => (
          <Card key={card.id} {...card} btntoggleModal={btntoggleModal} />
        ))}
      </div>
    </div>
  );
}
