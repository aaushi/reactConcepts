import React, { useEffect, useState } from 'react'

const Sprouts = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            if(count===10)
                setCount(0);
            else
                setCount(count+1)

        },1000);
        return ()=>clearTimeout(timer);

    })
  return (
    <div>count:{count}</div>
  )
}

export default Sprouts