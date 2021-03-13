import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Header/>
      <Stats/>
      <Project/>
    </div>
  );
}
