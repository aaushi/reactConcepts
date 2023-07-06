import React, { useMemo, useState } from 'react'

const ExampleUseMemo = () => {
    const [counterOne,setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]=useState(0);
    const increamentCounterOne=()=>{
        setCounterOne(counterOne+1);
    }
    const increamentCounterTwo=()=>{
        setCounterTwo(counterTwo+1);
    }
    
    const isEven=useMemo(()=>{ let i=0;
        while(i!=2000000000)i++
        return counterOne%2===0;},[counterOne])

  return (
    <div>
        <button onClick={()=>increamentCounterOne()}>Count one-    
        {counterOne}</button>
        <span>{isEven?'Even':'Odd'}</span>
        <br/>
        
        <button onClick={()=>increamentCounterTwo()}>Count two-{counterTwo}</button>
    </div>
  )
}

export default ExampleUseMemo