import { useEffect, useState } from "react";

const CountUp = ({ end = 0, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); 
    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {Number.isInteger(end)
        ? Math.floor(count)
        : count.toFixed(1)}
    </span>
  );
};

export default CountUp;
