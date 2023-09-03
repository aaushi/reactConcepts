import React from 'react'
import { createContext } from "react";
import CompA from "./CompA";
const FirstName = createContext('Aaushi');
const LastName = createContext('Gupta');

const ExampleUseContextParent = () => {
  return (
    <div>
      
          <CompA />
      
    </div>
  );
}

export default ExampleUseContextParent
export { FirstName, LastName };