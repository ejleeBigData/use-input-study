import { useEffect, useState } from "react";

const useTimer = (initial = 0) => {
  const [seconds, setSeconds] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return seconds;
};

export default useTimer;
