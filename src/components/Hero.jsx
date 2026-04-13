import React from 'react'
import "../css/hero.css"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='overlay'/>
        <div className='content'>
            <h1>
             Discover <span className="text--orange">high-growth</span>
            <br />
            property investments
          </h1>
          <p className="hero__sub">
            Join the CEG Equity Token batch. Start building your portfolio with
            <br />
            fractional ownership of global assets.
          </p>
          <button className="btn">
            Start Earning Now &rarr;
          </button>
        </div>
    </div>
  )
}

export default Hero