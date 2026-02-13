import { useEffect, useRef, useState } from "react";

const CountUp = ({
  end = 0,
  duration = 1200,
  prefix = "",
  suffix = "",
  isCurrency = false,
}) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);

      const currentValue = progressPercent * end;

      setCount(currentValue);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  // ✅ Indian currency formatter
  const formatIndianCurrency = (num) => {
    if (num >= 10000000) {
      return `${(num / 10000000)
        .toFixed(2)
        .replace(/\.00$/, "")} Cr`;
    }

    if (num >= 100000) {
      return `${(num / 100000)
        .toFixed(2)
        .replace(/\.00$/, "")} L`;
    }

    return Math.floor(num).toLocaleString("en-IN");
  };

  const formattedValue = isCurrency
    ? formatIndianCurrency(count)
    : Number.isInteger(end)
    ? Math.floor(count)
    : count.toFixed(1);

  return (
    <span>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

export default CountUp;
