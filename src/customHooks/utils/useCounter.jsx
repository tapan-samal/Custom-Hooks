import { useState } from "react";

const useCounter = (val = 1) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count <= 20) {
      setCount(count + val);
    }
  };
  const decrementCount = () => {
    if (count >= 0) {
      setCount(count - val);
    }
  };
  return [count, incrementCount, decrementCount];
};

export default useCounter;
