import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Stats from "./components/Stats";

export default function App() {
  const content = {
    header: {
      title: "Mastercraft Bamboo Monitor Riser",
      subtitle:
        "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
    },
    stats: {
      totalBacked: 89.914,
      totalBackers: 5.007,
      daysLeft: 56,
    },
    project: {
      title: "About this project",
      aboutP1:
        "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
      aboutP2:
        "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
      cards: [
        {
          key: "1",
          title: "Bamboo Stand",
          pledgeCost: "25",
          textAbout:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
          daysLeft: "101",
          buttonText: "Select Reward",
          isDisabled: false,
        },
        {
          key: "2",
          title: "Black Edition Stand",
          pledgeCost: "75",
          textAbout:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          daysLeft: "64",
          buttonText: "Select Reward",
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
    },
  };
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Header {...content.header} />
        <Stats {...content.stats} />
        <Project {...content.project} />
      </main>
    </div>
  );
}
