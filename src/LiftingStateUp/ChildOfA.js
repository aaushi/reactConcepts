import React, { useState } from 'react'

const ChildOfA = ({ messageToChild, getDataFromChild }) => {
  function handleSubmit(e) {
    //e.preventDefault(); used with form. if not given form will get refreshed after submit
    getDataFromChild(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={messageToChild}
        onChange={(e) => handleSubmit(e)}
      ></input>
      
    </div>
  );
};

export default ChildOfA