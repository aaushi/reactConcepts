import React, { useEffect, useState } from "react";
import PropsChildA from "./PropsChildA";
import PropsChildB from "./PropsChildB";
import PropsChildC from "./PropsChildC";
import PropChildUser from "./PropChildUser";

const PropsParent = () => {
  const [message, setMessage] = useState();
  const [messageFromChild, setMessageFromChild] = useState();
  const [messageFromChildC, setMessageFromChildC] = useState();
  const [user,setUser]=useState({name:"",id:""})
  const handleClick = () => {
    setMessage("Hello my Child");
  };

  useEffect(()=>{
    setUser({name:"aaushi",id:"1234"})
  },[])

  return (
    <div>
      <button onClick={() => handleClick()}>Send Message To Child</button>
      <PropsChildA messageToChild={message}></PropsChildA>
      <hr />
      <PropsChildB
        messageFromChild={messageFromChild}
        setMessageFromChild={setMessageFromChild}
      ></PropsChildB>

      <h2>Child B says:{messageFromChild}</h2>
      <hr />

      <PropsChildC
        messageFromChildC={messageFromChildC}
        setMessageFromChildC={setMessageFromChildC}
      ></PropsChildC>
      <h2>Child C says: {messageFromChildC}</h2>
    <hr/>
      <PropChildUser {...user}></PropChildUser>
    </div>
  );
};

export default PropsParent;
