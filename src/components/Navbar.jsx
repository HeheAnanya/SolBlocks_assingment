import React, { useEffect, useState } from 'react'
import "../css/navbar.css"

const Navbar = () => {
  const [scroll,setScroll] = useState(false)
  useEffect(()=>{
    function onScroll(){
      setScroll(window.scrollY > 50) 
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  return (
    <div className={`navbar ${scroll ? "navbar_scrolled" : ""}`}>
      <div className="text">
        <svg className="icon" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#f97316" />
          <text x="14" y="19" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">G</text>
        </svg>
        <span className="name">
          <span className="orange">G</span>Stake
        </span>
      </div>

      <div className="links">
        <a href="#">Properties</a>
        <a href="#">Digital Assets</a>
        <a href="#">Stake &amp; Earn</a>
      </div>

      <div className="cred">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar