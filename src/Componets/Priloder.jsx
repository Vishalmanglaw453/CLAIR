import React from 'react'
import logo from "../assets/images/svg/nav-logo.svg"
const Priloder = () => {
  return (
    <>
    <div className="loading">
        <img src={logo} alt="logo" />
      <div className="spinner mt-4"></div>
    
    </div>
    </>
  )
}

export default Priloder