import React from 'react'
import popup from './popup.css'
import { Link } from "react-router-dom";

function Popup() {
  return (
    <div className='popup-section'>
        <div className="popup-heading">
            What would you like to do?
        </div>
        <div className="buy-sell-section">
            <div className="sell-btn">
              <Link to="/sell">Sell</Link>
              </div>

            <div className="buy-btn">
            <Link to="/products">Buy</Link>
            
              </div>
        </div>
    </div>
  )
}

export default Popup;