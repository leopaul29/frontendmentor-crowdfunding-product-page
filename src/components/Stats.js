import "../styles/Stats.css";

export default function Stats() {
  return (
    <div className="stats tile tile-padding">
      <div className="stats__row">
        <div className="stats__totalBacked">
          <p className="number">$89,914</p>
          <p className="text">of $100,000 backed</p>
        </div>
        <hr className="stats__separator" />
        <div className="stats__totalBackers">
          <p className="number"> 5,007</p>
          <p className="text">total backers</p>
        </div>
        <hr className="stats__separator" />
        <div className="stats__daysLeft">
          <p className="number">56</p>
          <p className="text">days left</p>{" "}
        </div>
      </div>
      <div className="progress progress-grey">
        <div className="progress progress-primary"></div>
      </div>
    </div>
  );
}
