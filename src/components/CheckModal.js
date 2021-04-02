import "../styles/CheckModal.css";

export default function CheckModal() {
  return (
    <div className="checkModal tile">
      <div className="checkModal__icon">
        <img src="./images/icon-check.svg" alt="icon-check" />
      </div>
      <div className="modalCard__title card__title title">
        Thanks for your support!
      </div>
      <div className="card__about checkModal__about">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </div>
      <div className="btn btn-primary">Got it!</div>
    </div>
  );
}
