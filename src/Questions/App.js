import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <h1> This page consists of react questions.</h1>
    <Outlet />
      
    </>
  );
}

export default App