import ModalCard from "./ModalCard";
import "../styles/Modal.css";
import { useEffect } from "react";

function Modal({ selectedIndexCard, setSelectedIndexCard, btntoggleModal }) {
  const modal = {
    title: "Back this project",
    about:
      "Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?",
    cards: [
      {
        id: "0",
        title: "Pledge with no reward",
        pledgeCost: "",
        textAbout:
          "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        daysLeft: "",
        isDisabled: false,
        isSelected: false,
      },
      {
        id: "1",
        title: "Bamboo Stand",
        pledgeCost: "25",
        textAbout:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        daysLeft: "101",
        isDisabled: false,
        isSelected: false,
      },
      {
        id: "2",
        title: "Black Edition Stand",
        pledgeCost: "75",
        textAbout:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        daysLeft: "64",
        isDisabled: false,
        isSelected: false,
      },
      {
        id: "3",
        title: "Mahogany Special Edition",
        pledgeCost: "200",
        textAbout:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        daysLeft: "0",
        buttonText: "Out of Stock",
        isDisabled: true,
        isSelected: false,
      },
    ],
  };

  useEffect(() => {
    console.log("modal.cards", modal.cards);
    modal.cards.map((card) => {
      if (card.id === selectedIndexCard) {
        return (card.isSelected = true);
      } else return false;
    });
  }, [selectedIndexCard]);

  return (
    <div>
      <div className="modal project tile">
        <span className="modal__close" onClick={btntoggleModal}>
          <img src="./images/icon-close-modal.svg" alt="close-modal" />
        </span>
        <h2 className="modal__title title">{modal.title}</h2>
        <p className="text">{modal.about}</p>

        <div className="project__cards">
          {modal.cards.map((card) => (
            <ModalCard
              key={card.id}
              {...card}
              setSelectedIndexCard={setSelectedIndexCard}
            />
          ))}
        </div>
        {/* 
Enter your pledge
$pledgeCost
Continue */}
      </div>
    </div>
  );
}

export default Modal;
