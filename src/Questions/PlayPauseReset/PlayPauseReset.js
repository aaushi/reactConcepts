import React, { useEffect, useState } from "react";

let timer;
const PlayPauseReset = () => {
  const [count, setCount] = useState(60);
  const [counterRunning,setCounterRunning]=useState(false)

  useEffect(() => {
    if (count <= 60 && count > 0 && counterRunning===true) {
      timer = setTimeout(handlePlay, 1000);
    }
  }, [count]);

  const handlePlay = () => {
    setCount(count - 1);
    setCounterRunning(true)
  };
  const handlePause = () => {
    clearTimeout(timer);
    setCounterRunning(false);
  };
  const handleReset = () => {
    setCount(60);
    setCounterRunning(false);
    clearTimeout(timer);
  };
  return (
    <>
      <div>{count}</div>
      <button disabled={counterRunning} onClick={() => handlePlay()}> Play</button>
      <button onClick={() => handlePause()}> pause</button>
      <button onClick={() => handleReset()}> reset</button>
    </>
  );
};

export default PlayPauseReset;
