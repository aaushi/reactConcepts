import React from 'react'
import useLocalStorage from './useLocalStorage'

const Usage = () => {

    let [count, setCount] = useLocalStorage("count", 0);
    
  return (
    <div>
      <h2>useLocalStorage</h2>
      <h4>Count - {count}</h4>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>
    </div>
  );
}

export default Usage