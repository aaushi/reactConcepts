import React, { useState } from "react";
import HOC from "./HOC";

const ComponentB = ({ handleIncrement, increment }) => {
  return (
    <div>
      <button onMouseOver={() => handleIncrement()}>
        I increment on mouseHover : {increment}
      </button>
    </div>
  );
};

export default HOC(ComponentB,10);
