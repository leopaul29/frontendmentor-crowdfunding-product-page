import "../styles/Project.css";
import Card from "./Card";

export default function Project(props) {
  const { title, aboutP1, aboutP2, cards } = props;
  return (
    <div className="project tile">
      <h2 className="project__title title">{title}</h2>
      <p className="text">{aboutP1}</p>
      <p className="text">{aboutP2}</p>
      <div className="project__cards">
        {cards.map((card) => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
}
