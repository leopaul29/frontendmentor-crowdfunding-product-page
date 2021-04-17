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
  const [cardsState, setCardsState] = useState(cards);
  // fonctions
  const increaseTotalBacked = (moneyToAdd) => {
    let sumBacked = Number(state.totalBacked) + Number(moneyToAdd);
    if (sumBacked <= 0) sumBacked = 0;
    if (sumBacked >= state.totalToBack) {
      sumBacked = state.totalToBack;
      backProjectEnd();
    }

    setState({ ...state, totalBacked: (state.totalBacked = sumBacked) });
  };

  const backProjectEnd = () => {
    // change all card to disabled and 0 countLeft
    cardsState.map((card) => {
      card.isDisabled = true;
      card.countLeft = 0;
      return card;
    });
    setCardsState(cardsState);

    // cannot back project anymore
    state.canBackProject = false;
    setState(state);
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
    setState({ ...state, selectedIndexCard: (state.selectedIndexCard = id) });
    cardsState.map((card) => {
      if (card.id === id && !card.isDisabled) {
        card.isSelected = true;
      } else {
        card.isSelected = false;
      }
      return card;
    });
    setCardsState(cardsState);
  };
  const setDisabled = (id, isDisabled) => {
    cardsState[id].isDisabled = isDisabled;
    setCardsState(cardsState);
  };
  const setCountLeft = (id, countLeft) => {
    cardsState[id].countLeft = countLeft;
    setCardsState(cardsState);
  };
  const setSelected = (id, isSelected) => {
    cardsState[id].isSelected = isSelected;
    setCardsState(cardsState);
  };

  const [state, setState] = useState({
    canBackProject: true,
    totalBacked: 89914,
    totalToBack: 100000,
    totalBackers: 5007,
    daysLeft: 56,
    selectedIndexCard: 0,
    fct: {
      increaseTotalBacked: increaseTotalBacked,
      setSelectedIndexCard: setSelectedIndexCard,
      setDisabled: setDisabled,
      setCountLeft: setCountLeft,
      setSelected: setSelected,
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
        <Project cardsState={cardsState} fct={state.fct} />
      </main>

      <div
        id="modal"
        className={"overlay " + (toggleModal ? "modal-block" : "modal-none")}
      >
        <div className="overlay__content">
          <Modal cardsState={cardsState} state={state} />
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
