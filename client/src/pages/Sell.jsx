import React from 'react'
import { Link } from 'react-router-dom'

function Sell() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="text-center text-3xl mb-6">
            Enter Item Details
        </div>
        <div className="pt-5 pl-10 pr-10 pb-10 shadow-lg" >
            <div className="sell-section-content">
                <div className="mb-4">
                    <div className="mb-2">Item Name</div>
                    <input style={{border: '1px solid black'}} type="text" />
                </div>
                <div className="mb-4">
                    <div className="mb-2">Item Description</div>
                    <textarea style={{border: '1px solid black'}}name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="mb-4">
                    <div className="mb-2">Item Condition</div>
                    <textarea style={{border: '1px solid black'}} name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="mb-4">
                    <div className="mb-2">Item Price</div>
                    <div className="item-price-content">
                        <div className="item-currency">Rs</div>
                        <input style={{border: '1px solid black'}} type="Number" />
                    </div>
                    
                </div>
                <div className="mb-4">
                    <div className="mb-2">Item location</div>
                    <input style={{border: '1px solid black'}}type="text" />
                </div>
                <div className="mb-4">
                    <div className="mb-2">Item State</div>
                    <input style={{border: '1px solid black'}} type="text" />
                </div>
                <div className="mb-4">
                    <div className="mb-2">Item City</div>
                    <input style={{border: '1px solid black'}}type="text" />
                </div>
                <div className="mb-4">
                    <div className="mb-2">Neighbourhood</div>
                    <input style={{border: '1px solid black'}} type="text" />
                </div>
                <div className="mb-4">
                    <div className="mb-2">Add Name</div>
                    <input style={{border: '1px solid black'}}type="text" />
                </div>
                <div className="mb-4">
                    <div className="mb-2">Add Phone Number</div>
                    <input style={{border: '1px solid black'}} type="number" />
                </div>
                <Link to="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </Link>
                
                
            </div>
        </div>

    </div>
  )
}

export default Sell