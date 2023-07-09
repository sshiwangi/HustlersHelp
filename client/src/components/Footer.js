import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-child" />
        <div className="logo1">
          <img
            className="graduation-cap-icon"
            alt=""
            src="/graduation-cap1@2x.png"
          />
          <Link to="/" className="hustlershelp">
            <span>Hustlers</span>
            <span className="help">Help</span>
          </Link>
        </div>
        <p className="experience-the-power">
          Experience the power of learning, connecting, and thriving as an
          entrepreneur with us. Together, we can turn your dreams into reality.
        </p>
        <Link to="/company" className="company">
          <b>Company</b>
        </Link>
        <Link to="/socials" className="socials">
          <b>Socials</b>
        </Link>
        <Link to="/privacy" className="privacy">
          <b>Privacy</b>
        </Link>
        <Link to="/instagram" className="instagram">
          <b>Instagram</b>
        </Link>
        <Link to="/faq" className="faq">
          <b>FAQ</b>
        </Link>
        <Link to="/facebook" className="facebook">
          <b>Facebook</b>
        </Link>
        <Link to="/help" className="help2">
          <b>Help</b>
        </Link>
        <Link to="/youtube" className="youtube">
          <b>YouTube</b>
        </Link>
        <p className="copyright-2023">
          Copyright © 2023 All rights reserved with HustlersHelp
        </p>
        <div className="footer-item" />
      </div>
    </>
  );
};

export default Footer;
