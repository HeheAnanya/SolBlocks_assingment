import React from 'react'
import frame from "../assets/jigsaw.png"
import piece  from "../assets/Frame_1.png"
import arrow from "../assets/arrow.png"
import "../css/jigsaw.css"



const Jigsaw = () => {
  return (
    <section className="jigsaw-section">
      <div className="jigsaw">
        <div className="jigsaw_pics">
          <img src={piece} alt="jigsaw_piece" className="pieceImg" />
          <img src={frame} alt="jigsaw_puzzle" className="puzzleImg" />
          <img src={arrow} alt="arrow" className="arrowImg" />
        </div>

        <div className="jigsaw_info">
          <h2 className="jigsaw_title">
            Access premium property ownership{" "}
            <span className="orange_text">for $150</span>
          </h2>

          <div className="card">
            <div className="card__icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" fill="#f97316" />
                <text x="14" y="19" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">G</text>
              </svg>
            </div>
            <div className="card__body">
              <div className="label">All Time Returns</div>
              <div className="value">
                AED 165,000
                <span className="badge">+111%</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Jigsaw