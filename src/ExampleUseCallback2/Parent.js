import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [addition,setAddition]=useState(0);
    const [count,setCount]=useState(0);
    const sendData=useCallback(()=>{
         
          console.log("hi");
    },[count])
    
  return (
    <div>
      <Child sendData={sendData} count={count}></Child>
      <h1>{addition}</h1>
      <button onClick={() => setAddition(addition + 1)}>Add</button>
2
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

export default Parent