import "../styles/Stats.css";

export default function Stats(props) {
  const { totalBacked, totalBackers, daysLeft } = props;

  return (
    <div className="stats tile tile-padding">
      <div className="stats__row">
        <div className="stats__totalBacked stats__inner">
          <p className="number">${totalBacked}</p>
          <p className="text">of $100,000 backed</p>
        </div>
        <hr className="stats__separator " />
        <div className="stats__totalBackers stats__inner">
          <p className="number">{totalBackers}</p>
          <p className="text">total backers</p>
        </div>
        <hr className="stats__separator" />
        <div className="stats__daysLeft stats__inner">
          <p className="number">{daysLeft}</p>
          <p className="text">days left</p>{" "}
        </div>
      </div>
      <div className="progress progress-grey">
        <div className="progress progress-primary"></div>
      </div>
    </div>
  );
}
