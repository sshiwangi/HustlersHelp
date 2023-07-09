import React from 'react'

function Sell() {
  return (
    <div className='sell-section'>
        <div className="section-heading">
            Enter Item Details
        </div>
        <div className="sell-section-content-contianer">
            <div className="sell-section-content">
                <div className="item-container">
                    <div className="item-name">Item Name</div>
                    <input type="text" />
                </div>
                <div className="item-container">
                    <div className="item-name">Item Description</div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="item-container">
                    <div className="item-name">Item Condition</div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="item-container">
                    <div className="item-name">Item Price</div>
                    <div className="item-price-content">
                        <div className="item-currency">Rs</div>
                        <input type="Number" />
                    </div>
                    
                </div>
                <div className="item-container">
                    <div className="item-name">Item location</div>
                    <input type="text" />
                </div>
                <div className="item-container">
                    <div className="item-name">Item State</div>
                    <input type="text" />
                </div>
                <div className="item-container">
                    <div className="item-name">Item City</div>
                    <input type="text" />
                </div>
                <div className="item-container">
                    <div className="item-name">Neighbourhood</div>
                    <input type="text" />
                </div>
                <div className="item-container">
                    <div className="item-name">Add Name</div>
                    <input type="text" />
                </div>
                <div className="item-container">
                    <div className="item-name">Add Phone Number</div>
                    <input type="number" />
                </div>
                <div className="submit">
                    Submit
                </div>
                
                
            </div>
        </div>

    </div>
  )
}

export default Sell