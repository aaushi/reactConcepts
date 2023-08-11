import React, { useState } from 'react'
import useLogin from './UseLogin';

const CustomHookExample = () => {
    const [user,setUser]=useState();
    useLogin(()=>{console.log('hi')},[user])
  return (
    <div>CustomHookExample</div>
  )
}

export default CustomHookExample