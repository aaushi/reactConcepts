import React, { memo } from 'react'

const Child = ({sendData,count}) => {
    console.log("in child")
    
  return (
    <div>child</div>
  )
}

export default memo(Child)