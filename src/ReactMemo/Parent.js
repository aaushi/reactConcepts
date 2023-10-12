import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    console.log("this is parent");
    const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        {count}
        <Child name={"ABCD"}></Child>
    </div>
  )
}

export default Parent