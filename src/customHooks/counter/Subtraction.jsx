import React from "react";
import useCounter from "../utils/useCounter";

const Subtraction = (val) => {
  const [count, incrementCount, decrementCount] = useCounter(5);
  return (
    <>
      <h2>Counter B:</h2>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
};

export default Subtraction;
