import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Stats from "./components/Stats";
import Modal from "./components/Modal";
import CheckModal from "./components/CheckModal";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    totalBacked: 89914,
    totalBackers: 5007,
    daysLeft: 56,
  });

  const increaseTotalBacked = () => {
    setState({ ...state, totalBacked: (state.totalBacked += 1000) });
  };

  const [selectedIndexCard, setSelectedIndexCard] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);
  const btntoggleModal = (id) => {
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

  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Header />
        <Stats increaseTotalBacked={increaseTotalBacked} {...state} />
        <Project btntoggleModal={btntoggleModal} />
      </main>

      <div
        id="modal"
        className={"overlay " + (toggleModal ? "modal-block" : "modal-none")}
      >
        <div className="overlay__content">
          <Modal
            selectedIndexCard={selectedIndexCard}
            setSelectedIndexCard={setSelectedIndexCard}
            btntoggleModal={btntoggleModal}
            btntoggleCheckModal={btntoggleCheckModal}
          />
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
