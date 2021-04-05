import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Stats from "./components/Stats";
import { useState } from "react";
import { header, stats, project, cards } from "./components/Data";

export default function App() {
  const [totalBacked, setTotalBacked] = useState(89.914);

  const increaseTotalBacked = () => {
    setTotalBacked(totalBacked + 1);
  };
  
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Header />
        <Stats increaseTotalBacked {...stats} />
        <Project />
      </main>
    </div>
  );
}
