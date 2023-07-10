import React from 'react'
import Interestbtn from '../components/Interestbtn'
import mentor from '../assets/girl-mentor.jpg'

function CTTest() {
  return (
    <div className="flex flex-col items-center">
        <div className="flex mb-6">
            <img style={{width: '100px', marginRight: '10px', height: '100px', borderRadius: '50px'}} src={mentor} alt="mentor" />
            <img style={{width: '100px', marginLeft: '10px', height: '100px', borderRadius: '50px'}} src={mentor} alt="mentor" />
        </div>
        <h1><span className='font-bold'>Congratulations!</span> You are compatible.</h1>
        <h2 className='mb-8'>Compatibility percentage: 80%</h2>
        <div style={{boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)', marginBottom: '50px', width: '350px', borderRadius: '19px', height: '150px', padding: '20px'}}>
            <h2>We found these many similar interests <br /> between you two</h2>
            <Interestbtn name = "Business"/>
            <Interestbtn name = "Marketing"/>
            <Interestbtn name = "Sales"/>
        </div>
    </div>
  )
}

export default CTTest