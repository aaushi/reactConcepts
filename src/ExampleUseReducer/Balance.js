import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state,action)=>{
    switch (action) {
      case "Increment":
        return state+1;
      case "Decrement":
        return state-1;
      default:
        return state;
    }
}

const Balance = () => {
    const [balanceCount,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <p>balanceCount:{balanceCount}</p>
      <button onClick={() => dispatch("Increment")}>Balance Increase</button>
      <button onClick={() => dispatch("Decrement")}>Balance Decrease</button>
    </div>
  );
}

export default Balance