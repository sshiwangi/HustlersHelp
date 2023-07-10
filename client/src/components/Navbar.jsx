import React, { useState } from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {

  const { user } = useContext(AuthContext);
  console.log(user);
  return (

    <div className="p-10">

      <div className="bg-white w-full flex justify-between items-center px-6 py-3 rounded shadow border-[#D3CDCD] border">
        <div className="flex items-center justify-center h-full">
          <RiGraduationCapFill className="text-3xl text-[#458EFF]" />
          <div className="mx-2 text-2xl font-bold ">Hustlers <span className="text-[#458EFF]">Help</span></div>
        </div>
        <div className="flex items-center justify-center gap-6 text-xl font-semibold basis-1/2 ">
          <Link to="/">Home</Link >
          <Link to="/mentors">Mentors</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/events">Events</Link >
          <Link to="/courses">Courses</Link >
          <Link to="/products">Products</Link>
          <Link to="/sell">Sell</Link>
        </div>
        {user?.isLoggedIn ? (
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
          </div>) : (
          <Link to='signin' className="text-white p-3 font-bold rounded text-xl bg-[#458EFF]">
            Sign In
          </Link>
        )}
      </div>

    </div>
  );
};

export default Navbar;
