import { useState, useEffect } from "react";

const CountDown = (props) => {
  const [count, setCount] = useState(500);

  const toHHMMSS = (secs) => {
    const sec_num = parseInt(secs, 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor(sec_num / 60) % 60;
    const seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  useEffect(() => {
    if (count === 0) {
      props.onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1); // Use functional update to ensure latest state
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [count, props]); // Include props in dependency array to avoid stale closure

  return <div className="count-down-container">{toHHMMSS(count)}</div>;
};

export default CountDown;
