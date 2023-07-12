import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom";

const UseRefHomePage = () => {
    console.log('userefmain')
  return (
    <>
      <div>UseRefHomePage</div>
      <ul>
        <li>
          <Link to="PurposeMutantVariable">Purpose MutantVariable</Link>
        </li>
        <li>
          <Link to="PurposeAccessDom">Purpose AccessDom</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default UseRefHomePage