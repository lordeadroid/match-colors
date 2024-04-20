import { useEffect, useState } from "react";

const CountDown = () => {
  const countDownVals = ["Ready", "Set", "Go"];
  const [isGameStarted, setGameStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 2 && isGameStarted === false) {
        setCount(0);
        setGameStarted(true);
        return;
      }
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count, isGameStarted]);

  return (
    <div className="counter">
      {isGameStarted ? `Time: ${count}` : countDownVals[count]}
    </div>
  );
};

export default CountDown;
