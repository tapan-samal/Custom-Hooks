import React from "react";
import useCounter from "../utils/useCounter";

const Addition = () => {
  const [count, incrementCount, decrementCount] = useCounter(2);
  return (
    <>
    <h1>1. useCounter</h1>
      <h2>Counter A:</h2>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
};

export default Addition;
