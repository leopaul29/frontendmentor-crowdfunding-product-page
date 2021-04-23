import { useEffect, useState } from "react";
import "../styles/Stats.css";

export default function Stats(props) {
  const {
    totalBacked,
    totalToBack,
    totalBackers,
    daysLeft,
  } = props;

  const [progressPercent, setProgressPercent] = useState(
    (totalBacked / totalToBack) * 100
  );
  useEffect(() => {
    setProgressPercent((totalBacked / totalToBack) * 100);
  }, [totalBacked, totalToBack]);

  const [progressStyle, setProgressStyle] = useState({
    width: progressPercent + "%",
  });
  useEffect(() => {
    setProgressStyle({ width: progressPercent + "%" });
  }, [progressPercent]);
  return (
    <div className="stats tile tile-padding">
      <div className="stats__row">
        <div className="stats__totalBacked stats__inner">
          <p className="stats__number number">${totalBacked}</p>
          <p className="text">of $100,000 backed</p>
        </div>
        <hr className="stats__separator " />
        <div className="stats__totalBackers stats__inner">
          <p className="stats__number number">{totalBackers}</p>
          <p className="text">total backers</p>
        </div>
        <hr className="stats__separator" />
        <div className="stats__daysLeft stats__inner">
          <p className="stats__number number">{daysLeft}</p>
          <p className="text">days left</p>{" "}
        </div>
      </div>
      <div className="progress progress-grey">
        <div className="progress progress-primary" style={progressStyle}></div>
      </div>
    </div>
  );
}
