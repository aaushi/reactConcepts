import React, { useReducer } from "react";

const initialState = {count:0};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {count:state.count + 1};
    case "Decrement":
      return {count:state.count - 1};
    default:
       throw new Error();
  }
};

const Balance2 = () => {
  const [balanceCount, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>balanceCount.:{balanceCount.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>
        Balance Increase
      </button>
      <button onClick={() => dispatch({ type: "Decrement" })}>
        Balance Decrease
      </button>
    </div>
  );
};

export default Balance2;
