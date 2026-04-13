// import React from 'react'
// import "../css/navbar.css"

// const Navbar = () => {
//   return (

//     <div className='navbar'>
//         <span className="logo__text">
//              <p><span className="logo">G</span>Stake</p> 
//         </span>
//         <div className='links'>
//         <a href='#'>Properties</a>
//         <a href='#'>Digital Assets</a>
//         <a href='#'>Stake & Earn</a>
//         </div>
//         <div className='cred'>
//             <button className='login'>Login</button>
//             <button className='signup'>Sign Up</button>
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React from 'react'
import "../css/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo__text">
        <svg className="logo__icon" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#f97316" />
          <text x="14" y="19" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">G</text>
        </svg>
        <span className="logo__name">
          <span className="logo__orange">G</span>Stake
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