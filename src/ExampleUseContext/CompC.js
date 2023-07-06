import React from "react";
import { FirstName, LastName } from "./ExampleUseContextParent";

const compC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <div>
                    
                    this is {fname} {lname}
                  </div>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default compC;
