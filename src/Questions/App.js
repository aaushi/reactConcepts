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
        <Link to="splore">sploreQ Example</Link>
      </li>
      <li>
        <Link to="Sprouts">SproutsQ Example</Link>
      </li>
      <li>
        <Link to="LoginForm">Login Form Example</Link>
      </li>
      <Outlet />
    </>
  );
}

export default App