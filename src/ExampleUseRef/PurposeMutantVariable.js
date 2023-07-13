import React,{useEffect, useRef, useState} from 'react'

const PurposeMutantVariable = () => {
const [name,setName]=useState();
const count=useRef(0);
useEffect(()=>{
    count.current=count.current+1;
})
  return (
    <>
      <div>
        It creates a mutable variable which will not re render the components
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <p> count:{count.current}</p>
    </>
  );
}

export default PurposeMutantVariable