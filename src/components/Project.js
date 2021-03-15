import "../styles/Project.css";
import Card from "./Card";

export default function Project(props) {
  const { title, aboutP1, aboutP2, cards } = props;
  return (
    <div className="project">
      <div className="project__title">{title}</div>
      <div className="project__about">
        <p>{aboutP1}</p>
        <p>{aboutP2}</p>
      </div>
      <div className="project__cards">
        {cards.map((card) => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
}
