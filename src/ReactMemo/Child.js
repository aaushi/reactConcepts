import React from 'react'

const Child = (props) => {
    console.log("this is child")
  return (
    <div>Child:{props.name}</div>
  )
}

export default React.memo(Child)