import React, { useEffect, useState } from "react";

const ExampleUseEffectMain = () => {
  const [count, setCount] = useState(0);
  console.log("outside useeffect");
  useEffect(() => {
    console.log("in useeffect");
  }, [count]); //[] only once after render//componentdidmount()
  //[count] runs after every render.//componentdidupdate()
  //
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      {console.log("in render")}
      {console.log("======")}
      <button onClick={() => handleClick()}>Count:{count}</button>
    </>
  );
};

export default ExampleUseEffectMain;
