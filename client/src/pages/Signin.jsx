import React from 'react'


function Signin() {
  return (
<div className="p-5 sm:p-10 md:p-20">
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <div className="w-full sm:w-1/2 h-64 bg-gray-100 flex flex-col justify-center items-center rounded-md border-9 border-gray-300">
      <img src="./assets/Manager-Supervisor.png" alt="Mentor" className="h-32 w-32 mb-4"></img>
      <button className="bg-customBlue text-white px-2 py-2 rounded-md w-60 h-12">Sign up as a Mentor</button>
    </div>
    <div className="w-full sm:w-1/2 h-64 bg-gray-100 flex flex-col justify-center items-center rounded-md border-9 border-gray-300">
      <img src="../Get-Job-Promotion-4.png" alt="Entrepreneur" className="h-32 w-32 mb-4"></img>
      <button className="bg-customBlue text-white px-2 py-2 rounded-md w-60 h-12">Sign up as an Entrepreneur</button>
    </div>
  </div>
</div>


  )
}

export default Signin