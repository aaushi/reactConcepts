import React from 'react'
import useOnline from './useOnline'

const CustomHookExample2 = () => {
    const [userStatus, checkStatus] = useOnline();
  return (
    <>
      <button onClick={() => checkStatus()}>user Status</button>
      <h1>userStatus: {userStatus}</h1>
    </>
  );
}

export default CustomHookExample2