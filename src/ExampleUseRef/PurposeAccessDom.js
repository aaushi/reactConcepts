import React, { useRef } from 'react'

const PurposeAccessDom = () => {
    const inputRef=useRef();
    const handleSubmit=()=>{
        console.log(inputRef.current.value)
        inputRef.current.style.backgroundColor="yellow"
    }
  return (
    <>
      <div>use to access DOM directly/example for uncontrolled component</div>
      <input  ref={inputRef}/>
      <button onClick={()=>handleSubmit()}>Submit</button>
    </>
  );
}

export default PurposeAccessDom
