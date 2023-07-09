import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";
import Popupcmp from "./popup/Popupcmp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openPopup() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="nav-section">
      <div className="nav">
        <div className="navbar" />
        <div className="nav-items">
          <Link to="/find-help" className="find-help">
            Find Help
          </Link>
          <Link to="/about" className="about">
            About
          </Link>
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/events" className="events">
            Events
          </Link>
          <Link to="/learn" className="learn">
            Learn
          </Link>
          <Link onClick={openPopup} to="/sell-buy" className="sellbuy">
            Sell/Buy
          </Link>
          {isOpen && <Popupcmp />}
        </div>
        <div className="authentication">
          <div className="sign-up-button">
            <div className="sign-up-button-child" />
            <button className="sign-in">
              <Link to="/sign-in">Sign in</Link>
            </button>
    return (
        <div className="nav-section">
        <div className="nav">
          <div className="navbar" />
          <div className="nav-items">
            <Link to="/find-help" className="find-help">Find Help</Link>
            <Link to="/about" className="about">About</Link>
            <Link to="/" className="home-link">Home</Link>
            <Link to="/events" className="events">Events</Link>
            <Link to="/learn" className="learn">Learn</Link>
            <Link to="/sell-buy" className="sellbuy">Sell/Buy</Link>
          </div>
          <div className="authentication">
            <div className="sign-up-button">
              <div className="sign-up-button-child" />
              <button className="sign-in">
                <Link to="/sign-in">Sign in</Link>
              </button>
            </div>
          </div>
          <div className="logo">
            <img
              className="graduation-cap-icon"
              alt=""
              src="/graduation-cap@2x.png"
            />
            <b className="hustlershelp">
              <span>Hustlers</span>
              <span className="help">Help</span>
            </b>
          </div>
        </div>
        <div className="logo">
          <img
            className="graduation-cap-icon"
            alt=""
            src="/graduation-cap@2x.png"
          />
          <b className="hustlershelp">
            <span>Hustlers</span>
            <span className="help">Help</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
