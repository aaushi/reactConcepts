import React from 'react'
import { createContext } from "react";
import CompA from "./CompA";
const FirstName = createContext();
const LastName = createContext();

const ExampleUseContextParent = () => {
  return (
    <div>
      <FirstName.Provider value={"Aaushi"}>
        <LastName.Provider value={"Gupta"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default ExampleUseContextParent
export { FirstName, LastName };