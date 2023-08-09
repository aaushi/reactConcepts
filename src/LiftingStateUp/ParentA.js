import React, { useState } from 'react'
import ChildOfA from './ChildOfA';

const ParentA = () => {
  const [message, setMessage] = useState("");
  function getData(data) {
    setMessage(data);
  }

  return (
    <div>
      <ChildOfA messageToChild={message} getDataFromChild={getData}></ChildOfA>
      <p>message from child:{message}</p>
    </div>
  );
};

export default ParentA