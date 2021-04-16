import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Stats from "./components/Stats";
import Modal from "./components/Modal";
import CheckModal from "./components/CheckModal";
import { useState } from "react";
import { cards } from "./components/TextData";

export default function App() {
  // states
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleCheckModal, setToggleCheckModal] = useState(false);
  // fonctions
  const increaseTotalBacked = (moneyToAdd) => {
    let sumBacked = state.totalBacked + moneyToAdd;
    if (sumBacked <= 0) sumBacked = 0;
    if (sumBacked >= state.totalToBack) sumBacked = state.totalToBack;

    setState({ ...state, totalBacked: (state.totalBacked = sumBacked) });
  };

  const btntoggleModal = (id) => {
    if (id == null) id = 0;
    setSelectedIndexCard(id);
    setToggleModal(!toggleModal);
  };
  const btntoggleCheckModal = () => {
    // close modal
    setToggleModal(false);
    // open modal validate
    setToggleCheckModal(true);
  };
  const closeAllModal = () => {
    setToggleCheckModal(false);
    setToggleModal(false);
  };

  const setSelectedIndexCard = (id) => {
    console.log("id", id)
    setState({ ...state, selectedIndexCard: (state.selectedIndexCard = id) });
    cards.map((card) => {
      if (card.id === id && !card.isDisabled) {
        card.isSelected = true;
      } else {
        card.isSelected = false;
      }
      return card;
    });
  };

  const [state, setState] = useState({
    totalBacked: 89914,
    totalToBack: 100000,
    totalBackers: 5007,
    daysLeft: 56,
    selectedIndexCard: 0,
    fct: {
      increaseTotalBacked: increaseTotalBacked,
      setSelectedIndexCard: setSelectedIndexCard,
      btntoggleModal: btntoggleModal,
      btntoggleCheckModal: btntoggleCheckModal,
      closeAllModal: closeAllModal,
    },
  });

  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Header {...state} />
        <Stats {...state} />
        <Project btntoggleModal={btntoggleModal} />
      </main>

      <div
        id="modal"
        className={"overlay " + (toggleModal ? "modal-block" : "modal-none")}
      >
        <div className="overlay__content">
          <Modal {...state} />
        </div>
      </div>

      <div
        id="checkModal"
        className={
          "overlay " + (toggleCheckModal ? "modal-block" : "modal-none")
        }
      >
        <div className="overlay__content">
          <CheckModal closeAllModal={closeAllModal} />
        </div>
      </div>
    </div>
  );
}
