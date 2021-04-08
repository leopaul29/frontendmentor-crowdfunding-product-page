import { useEffect, useState } from "react";
import "../styles/Stats.css";

export default function Stats(props) {
  //const { totalBacked, totalBackers, daysLeft, increaseTotalBacked } = props;
  const { increaseTotalBacked, totalBacked, totalBackers, daysLeft } = props;

  const [progressStyle, setProgressStyle] = useState({
    width: (totalBacked / 100000) * 100 + "%",
  });
  useEffect(() => {
    setProgressStyle({ width: (totalBacked / 100000) * 100 + "%" });
    if (progressStyle <= 0) setProgressStyle({ width: 0 + "%" });
    if (progressStyle >= 100) setProgressStyle({ width: 100 + "%" });
    console.info("progressStyle", progressStyle);
  }, [totalBacked]);
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
        <div className="progress progress-primary" style={progressStyle}></div>
      </div>
      <button onClick={increaseTotalBacked}>rez</button>
    </div>
  );
}
