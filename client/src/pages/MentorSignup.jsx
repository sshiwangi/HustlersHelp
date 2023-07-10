import React from 'react'
import {useForm } from 'react-hook-form'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';
function MentorSignup() {

const {user, updateUser} = useContext(AuthContext);

  const { register, handleSubmit,reset} = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    const response = await axios.post('http://localhost:5000/api/auth/mentor/signup', data);
    if(response.status === 201){
      updateUser(response.data);
      alert("Mentor Registered Successfully");
    }
    reset();
  }

  if(user && user.isLoggedIn){
    return <Navigate to="/" />
  }
  
  return (
    <form className="p-5 sm:p-8 md:p-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="pl-40 pr-40 border border-gray-300 container-mentor-signup pt-7 pb-7">
        <div className="mentor-signup">
          <div className="flex items-center justify-center mb-4 text-3xl mentor-signup-details">Your details</div>
          <div className="flex items-center justify-center mb-2 text-xl mentor-signup-subheading">Please provide your details</div>
          <div className="block h-12 mx-auto text-center border border-gray-300 rounded-lg signup-with-google-btn w-60">
            <p class="p-3">Sign up with Google</p></div>
          <div className="w-full sm:w-auto">
            <label htmlFor="firstname" className="mb-1">FirstName</label>
            <input type="text" {...register('firstName')} id="firstname" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="lastname" className="mb-1">LastName</label>
            <input type="text" {...register('lastName')} id="lastname" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="email" className="mb-1">Email</label>
            <input type="email" {...register('email')} id="email" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="email" className="mb-1">Password</label>
            <input type="password" {...register('password')} id="email" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="location" className="mb-1">Location</label>
            <input type="text" {...register('location')} id="location" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="profession" className="mb-1">Profession</label>
            <input type="text" {...register('profession')} id="profession" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="experience" className="mb-1">Experience</label>
            <input type="text" {...register('experience')} id="experience" placeholder="Years of Experience" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="expertise"  className="mb-1">Expertise</label>
            <input type="text" {...register('expertise')} id="expertise" placeholder="Type of domain you are expert in" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="education" className="mb-1">Education</label>
            <input type="text" {...register('education')} id="education" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="industry" className="mb-1">Industry</label>
            <input type="text" {...register('industry')} id="industry" className="w-full px-4 py-2 mt-3 mb-3 border border-gray-300 rounded" />
          </div>
          <button type='submit' className="block w-24 h-12 mx-auto mt-5 text-center border border-gray-300 rounded-lg bg-customBlue signup-with-google-btn">
            <p class="p-3 text-white">Sign up</p>
          </button>
        </div>
      </div>
    </form>
  )
}

export default MentorSignup