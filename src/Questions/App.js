import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <h1> This page consists of react questions.</h1>
      <li>
        <Link to="dropdowns">Dropdown Example</Link>
      </li>
      <li>
        <Link to="PaymentValidation">PaymentValidation Example</Link>
      </li>
      <li>
        <Link to="UseEffectWithTimer">UseEffectWithTimer Example</Link>
      </li>
      <li>
        <Link to="LoginForm">Login Form Example</Link>
      </li>
      <li>
        <Link to="PlayPauseReset">Play Pause Reset Example</Link>
      </li>

      <Outlet />
    </>
  );
}

export default App