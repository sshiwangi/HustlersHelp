import React from 'react'
import imgmentor from '../assets/Manager-Supervisor.png'
import imgentreprenership from '../assets/Get-Job-Promotion-4.png'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const navigate = useNavigate()
  return (
<div className="p-5 sm:p-10 md:p-20">
  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
    <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-100 border-gray-300 rounded-md sm:w-1/2 border-9">
      <img src={imgmentor} alt="Mentor Image"/>
      <button onClick={()=>{navigate('/signup/mentor')}} className="h-10 px-2 py-2 text-white rounded-md bg-customBlue w-60">Sign up as a Mentor</button>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-100 border-gray-300 rounded-md sm:w-1/2 border-9">
    <img src={imgentreprenership} alt="Entreprenership Image"/>
      <button onClick={()=>{navigate('/signup/entrepreneur')}} className="h-10 px-2 py-2 text-white rounded-md bg-customBlue w-60">Sign up as an Entrepreneur</button>
    </div>
  </div>
</div>


  )
}

export default Signup