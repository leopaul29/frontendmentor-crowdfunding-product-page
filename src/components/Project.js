import { useState } from "react";
import "../styles/Project.css";
import Card from "./Card";
import Modal from "./Modal";

export default function Project(props) {
  const { title, aboutP1, aboutP2, cards } = props;

  const [toggleModal, setToggleModal] = useState(false);

  const btntoggleModal = () => {
    setToggleModal(!toggleModal);
  };
  const off = () => {
    setToggleModal(false);
  };

  return (
    <div className="project tile">
      <h2 className="project__title title">{title}</h2>
      <p className="text">{aboutP1}</p>
      <p className="text">{aboutP2}</p>
      <button onClick={btntoggleModal}>test</button>
      <div
        class={"overlay " + (toggleModal ? "modal-block" : "modal-none")}
        onClick={off}
      >
        <div class="overlay__content">
          <Modal />
        </div>
      </div>

      <div className="project__cards">
        {cards.map((card) => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
}
