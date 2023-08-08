import React, { useState } from 'react'

const ChildOfA = ({ message, getData }) => {
  function handleSubmit(e) {
    //e.preventDefault(); used with form. if not given form will get refreshed after submit
    getData(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => handleSubmit(e)}
      ></input>
      <button> Submit</button>
    </div>
  );
};

export default ChildOfA