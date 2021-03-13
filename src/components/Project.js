import Card from "./Card";

export default function Project() {
  const cards = [
    {
      key: "1",
      title: "Bamboo Stand",
      pledgeCost: "25",
      textAbout:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      daysLeft: "101",
      buttonText: "Select Reward",
    },
    {
      key: "2",
      title: "Black Edition Stand",
      pledgeCost: "75",
      textAbout:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      daysLeft: "64",
      buttonText: "Select Reward",
    },
    {
      key: "3",
      title: "Mahogany Special Edition",
      pledgeCost: "200",
      textAbout:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      daysLeft: "0",
      buttonText: "Out of Stock",
    },
  ];

  const project = {
    title: "About this project",
    aboutP1:
      "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
    aboutP2:
      "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
  };

  return (
    <div className="project">
      <div className="project__title">{project.title}</div>
      <div className="project__about">
        <p>{project.aboutP1}</p>
        <p>{project.aboutP2}</p>
      </div>
      <div className="project__cards">
        {cards.map((card) => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
}
