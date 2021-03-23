import ModalCard from "./ModalCard";
import "../styles/Modal.css"

function Modal() {
  const modal = {
    title: "Back this project",
    about:
      "Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?",
    cards: [
      {
        key: "0",
        title: "Pledge with no reward",
        pledgeCost: "",
        textAbout:
          "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        daysLeft: "",
        isDisabled: false,
      },
      {
        key: "1",
        title: "Bamboo Stand",
        pledgeCost: "25",
        textAbout:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        daysLeft: "101",
        isDisabled: false,
      },
      {
        key: "2",
        title: "Black Edition Stand",
        pledgeCost: "75",
        textAbout:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        daysLeft: "64",
        isDisabled: false,
      },
      {
        key: "3",
        title: "Mahogany Special Edition",
        pledgeCost: "200",
        textAbout:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        daysLeft: "0",
        buttonText: "Out of Stock",
        isDisabled: true,
      },
    ],
  };

  return (
    <div>
      <div className="modal project tile">
        <span className="modal__close">
          <img src="./images/icon-close-modal.svg" alt="close-modal"/>
        </span>
        <h2 className="modal__title title">{modal.title}</h2>
        <p className="text">{modal.about}</p>

        <div className="project__cards">
          {modal.cards.map((card) => (
            <ModalCard key={card.key} {...card} />
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
