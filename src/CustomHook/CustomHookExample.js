import React, { useState } from "react";
import useCounter from "./Counter";


const CustomHookExample = () => {
  const [count,handleIncrement,handleDecrement]=useCounter(10);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CustomHookExample;
