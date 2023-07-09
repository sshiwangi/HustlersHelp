import React from 'react'

function MentorSignup() {
  return (
  <div className=" p-5 sm:p-8 md:p-12">
  <div className="container-mentor-signup pl-40 pr-40 pt-7 pb-7 border border-gray-300">
    <div className="mentor-signup">
      <div className="flex justify-center items-center mentor-signup-details text-3xl mb-4">Your details</div>
      <div className="flex justify-center items-center mentor-signup-subheading text-xl mb-2">Please provide your details</div>
      <div className=" mx-auto block signup-with-google-btn text-center w-60 h-12 border border-gray-300 rounded-lg">

         <p class="p-3">Sign up with Google</p></div>
      {/* <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"> */}
        <div className="w-full sm:w-auto">
          <label htmlFor="firstname" className="mb-1">FirstName</label>
          <input type="text" id="firstname" className="w-full py-2 px-4 mt-3 mb-3 border border-gray-300 rounded" />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="lastname" className="mb-1">LastName</label>
          <input type="text" id="lastname" className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
          <div className="w-full sm:w-auto">
          <label htmlFor="email" className="mb-1">Email</label>
          <input type="email" id="email" className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="location" className="mb-1">Location</label>
          <input type="text" id="location" className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="profession" className="mb-1">Profession</label>
          <input type="text" id="profession" className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="experience" className="mb-1">Experience</label>
          <input type="text" id="experience" placeholder="Years of Experience" className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="expertise" className="mb-1">Expertise</label>
          <input type="text" id="expertise" placeholder="Type of domain you are expert in"className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="education" className="mb-1">Education</label>
          <input type="text" id="education" className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="industry" className="mb-1">Industry</label>
          <input type="text" id="industry" className="w-full py-2 px-4  mt-3 mb-3 border border-gray-300 rounded" />
        </div>
          <div className=" bg-customBlue mx-auto block signup-with-google-btn text-center w-24 h-12 mt-5 border border-gray-300 rounded-lg">

         <p class="p-3 text-white">Sign up</p></div>
      {/* </div> */}
    </div>
  </div>
</div>
)}

export default MentorSignup