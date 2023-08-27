import React, { useEffect, useState } from 'react'

const useOnline = () => {
  const [userStatus, setUserStatus] = useState("false");
  const checkStatus=()=>{
    if (userStatus==="true") 
        setUserStatus("false");
    else
        setUserStatus("true");
  }
  
  return [userStatus, checkStatus];
};

export default useOnline