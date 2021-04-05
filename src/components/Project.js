import { useState } from "react";
import "../styles/Project.css";
import Card from "./Card";
import CheckModal from "./CheckModal";
import Modal from "./Modal";
import { project, cards } from "./Data";

export default function Project() {
  const { title, aboutP1, aboutP2 } = project;

  const [toggleModal, setToggleModal] = useState(false);
  const [selectedIndexCard, setSelectedIndexCard] = useState(0);

  const btntoggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="project tile">
      <h2 className="project__title title">{title}</h2>
      <p className="text">{aboutP1}</p>
      <p className="text">{aboutP2}</p>
      
      <div
        className={"overlay " + (toggleModal ? "modal-block" : "modal-none")}
      >
        <div className="overlay__content">
          <Modal
            selectedIndexCard={selectedIndexCard}
            setSelectedIndexCard={setSelectedIndexCard}
            btntoggleModal={btntoggleModal}
          />
        </div>
      </div>

      <div className="project__cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            btntoggleModal={btntoggleModal}
            setSelectedIndexCard={setSelectedIndexCard}
          />
        ))}
      </div>
    </div>
  );
}
