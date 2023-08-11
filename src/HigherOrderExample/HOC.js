import React, { useState } from "react";

const HOC = (WrappedComponent,num) => {
  const Counter = (props) => {
    const [increment, setIncrement] = useState(0);
    const handleIncrement = () => {
      setIncrement(increment + num);
    };
    console.log(props)
    return (
      <div>
        <WrappedComponent
          handleIncrement={handleIncrement}
          increment={increment} {...props}
        ></WrappedComponent>
      </div>
    );
  };
  return Counter;
};

export default HOC;
