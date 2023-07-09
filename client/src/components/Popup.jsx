import React from 'react'
import popup from './popup.css'

function Popup() {
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

            <div className="buy-btn">
            <a href="/products" target="_blank" rel="noopener noreferrer">
                 Buy
            </a>
            
              </div>
        </div>
    </div>
  )
}

export default Popup;