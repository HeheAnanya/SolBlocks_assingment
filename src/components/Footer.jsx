import React from 'react'
import "../css/footer.css"

const Footer = () => {
const batches = [
  { label: "Batch 1", price: "$4,000" },
  { label: "Batch 2", price: "$4,250" },
  { label: "Batch 3", price: "$4,500" },
  { label: "Batch 4", price: "$4,750", active: true },
  { label: "Batch 5", price: "$5,000" },
  { label: "Batch 6", price: "$5,250" },
]
  return (
    <footer className='footer'>

        <div className="header">
          <span className="title">Price Progression (200 Tokens)</span>
          <div className="badges">
            <span className="not_available">SOLD OUT 1-3</span>
            <span className="available">ACTIVE 4</span>
          </div>
        </div>

        <div className="batch">
          {batches.map((b) => (
            <div key={b.label} className={`card ${b.active ? "active" : ""}`}>
              <span className="label">{b.label}</span>
              <span className={`price ${b.active ? "orange_text" : ""}`}>{b.price}</span>
            </div>
          ))}
        </div>
    </footer>
  )
}

export default Footer