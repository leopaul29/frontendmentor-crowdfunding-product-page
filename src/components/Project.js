import "../styles/Project.css";
import Card from "./Card";
import { project } from "./TextData";

export default function Project({ cardsState, fct }) {
  const { title, aboutP1, aboutP2 } = project;

  return (
    <div className="project tile">
      <h2 className="project__title title">{title}</h2>
      <p className="text">{aboutP1}</p>
      <p className="text">{aboutP2}</p>
      <div className="project__cards">
        {cardsState.map((card, i) =>
          i === 0 ? (
            ""
          ) : (
            <Card
              key={card.id}
              card={card}
              fct={fct}
            />
          )
        )}
      </div>
    </div>
  );
}
