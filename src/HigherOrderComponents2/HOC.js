import React, { useState } from 'react'

const HOC = (WrappedComponent) => {
    const Counter=()=>{
        const [count,setCount]=useState(0);
        
        const handleIncrement = () => {
          setCount(count + 1);
        };
        return (
          <WrappedComponent
            handleIncrement={handleIncrement}
            count={count}
          ></WrappedComponent>
        );

    }
  return Counter;
  
}

export default HOC