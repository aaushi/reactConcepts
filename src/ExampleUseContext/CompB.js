import React, { useContext } from 'react'
import CompC from './CompC'
import { FirstName,LastName } from './ExampleUseContextParent'

  

const CompB = () => {
  const fname=useContext(FirstName);
  const lname=useContext(LastName);
  return (
    <div>this is from compB {fname}{lname}</div>
     )
}

export default CompB