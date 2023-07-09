import { Link } from "react-router-dom";
import React, { useState } from "react";
import { RiGraduationCapFill } from "react-icons/ri";
const Navbar = () => {
 
  return (

    <div className="p-10">

      <div className="bg-white w-full flex justify-between items-center px-6 py-3 rounded shadow border-[#D3CDCD] border">
        <div className="flex items-center justify-center h-full">
          <RiGraduationCapFill className="text-3xl text-[#458EFF]" />
          <div className="text-3xl font-bold mx-2 ">Hustler's <span className="text-[#458EFF]">Help</span></div>
        </div>
        <div className="flex justify-between items-center text-xl font-semibold basis-1/2">
          <Link to="/">Home</Link >
          <Link to="/about">About</Link >
          <Link to="/help">Help</Link >
          <Link to="/events">Events</Link >
          <Link to="/courses">Courses</Link >
          <Link to='#'>Sell/Buy</Link>
        
        </div>
        <div className="text-white p-3 font-bold rounded text-xl bg-[#458EFF]"> 
          SignUp
        </div>
      </div>
    </div>
  );
};

export default Navbar;
