import React from "react";

const PropsChildC = ({ messageFromChildC, setMessageFromChildC }) => {
  return (
    <div>
      <button
        onClick={() => setMessageFromChildC("hello Mumma, I want balloons")}
      >
        What Child C wants?
      </button>
    </div>
  );
};

export default PropsChildC;
