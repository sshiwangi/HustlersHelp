import React from 'react'
import popup from './popup.css'

function Popupcmp() {
  return (
    <div className='popup-section'>
        <div className="popup-heading">
            What would you like to do?
        </div>
        <div className="buy-sell-section">
            <div className="sell-btn">
              <a href="/Sell" target="_blank" rel="noopener noreferrer">
                 Sell
                 </a>
              </div>
              
            <div className="buy-btn">Buy</div>
        </div>
    </div>
  )
}

export default Popupcmp;