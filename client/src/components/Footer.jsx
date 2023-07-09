import React from 'react';
import { Link } from 'react-router-dom';
import { RiGraduationCapFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      {/* <div className='bg-[#323232] w-full'>
      <div className='flex'>
        <div>
        <span>Hustlers</span>
          <span className="text-dodgerblue">Help</span>
          <br />
          <b>Experience the power of learning, connecting, and thriving as an
        entrepreneur with us. Together, we can turn your dreams into reality.</b>
        </div>
        <div>
        <b>Company</b>
        <b>Socials</b>
        <b>Privacy</b>
        <b>Instagram</b>
        <b>FAQ</b>
        <b>Facebook</b>
        <b>Help</b>
        <b>YouTube</b>
        </div>
      </div>
      <p>Copyright © 2023 All rights reserved with HustlersHelp</p>
      <div>
        copyright
      </div>
     </div> */}

      <div className='bg-[#323232] w-full text-white p-6'>
        <div className='flex justify-between py-6'>
          <div >
            <div className='flex mb-2'>
              <RiGraduationCapFill className="text-3xl mr-2 text-[#458EFF]" />
              <div className='text-3xl font-bold mr-2 '>Hustler's <span className='text-[#458EFF] text-3xl'>Help</span></div>
            </div>
            <div className='text-gray-300 w-2/3'>
              Experience the power of learning, connecting, and thriving as an entrepreneur with us. Together, we can turn your dreams into reality.
            </div>
          </div>
          <div className='flex '>
            <div className='flex flex-col gap-2'>
              <div className='text-white'>Company</div>
              <div className='text-gray-300'>Privacy</div>
              <div className='text-gray-300'>FAQ</div>
              <div className='text-gray-300'>Help</div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-white'>Socials</div>
            <div className='text-gray-300'>Instagram</div>
            <div className='text-gray-300'>Facebook</div>
            <div className='text-gray-300'>YouTube</div>
          </div>
        </div>
          <hr />
        <p className='text-gray-300 text-sm py-4'>
          Copyright © 2023 All rights reserved with HustlersHelp
        </p>
      </div>
    </>
  );
};

export default Footer;
