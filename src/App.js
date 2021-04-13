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
  const increaseTotalBacked = () => {
    let countToAdd = 1000;
    let sumBacked = state.totalBacked + countToAdd;
    if (sumBacked <= 0) sumBacked = 0;
    if (sumBacked >= state.totalToBack) sumBacked = state.totalToBack;

    setState({ ...state, totalBacked: (state.totalBacked = sumBacked) });
  };

  const [toggleModal, setToggleModal] = useState(false);
  const btntoggleModal = (id) => {
    if (id == null) id = 0;
    setSelectedIndexCard(id);
    setToggleModal(!toggleModal);
  };
  const [toggleCheckModal, setToggleCheckModal] = useState(false);
  const btntoggleCheckModal = () => {
    setToggleCheckModal(!toggleCheckModal);
  };
  const closeAllModal = () => {
    setToggleCheckModal(false);
    setToggleModal(false);
  };

  const setSelectedIndexCard = (id) => {
    setState({ ...state, selectedIndexCard: (state.selectedIndexCard = id) });
    if (cards[id].isDisabled) return;
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
