import React from 'react'

const Button = ({handleClick}) => {
  return <button onClick={() => handleClick()}> increment </button>;
}

export default Button