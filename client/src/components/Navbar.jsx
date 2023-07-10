import React, { useState } from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import Home from "../pages/Home"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //for dropdown feature of help
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavHover = () => {
    setIsDropdownOpen(true);
  };

  const handleNavLeave = () => {
    setIsDropdownOpen(false);
  };
  //function for popup of sell and buy feature
  function openPopup() {
    setIsOpen((prev) => !prev);
  }
  
  return (

    <div className="p-10">

      <div className="bg-white w-full flex justify-between items-center px-6 py-3 rounded shadow border-[#D3CDCD] border">
        <div className="flex items-center justify-center h-full">
          <RiGraduationCapFill className="text-3xl text-[#458EFF]" />
          <div className="mx-2 text-3xl font-bold ">Hustler's <span className="text-[#458EFF]">Help</span></div>
        </div>
        <div className="flex items-center justify-between text-xl font-semibold basis-1/2">
          <Link to="/">Home</Link >
          <Link to="#about">About</Link >
          <Link onMouseEnter={handleNavHover} onMouseLeave={handleNavLeave} to="/help">
            Help 
          {isDropdownOpen && (
            <div style={{width:'150px', height:'100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px', borderRadius: '15px', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)'}}>
              <Link to="/mentors">Find Mentors</Link>
              Find Teams
            </div>)}
          </Link >
          <Link to="/events">Events</Link >
          <Link to="/courses">Courses</Link >
          <Link onClick={openPopup} to='sellbuy'>Sell/Buy
          {isOpen && <Popup/>}
          </Link>

        </div>
        <Link to='signin' className="text-white p-3 font-bold rounded text-xl bg-[#458EFF]"> 
          Sign in
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
