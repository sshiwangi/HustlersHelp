import React from 'react';
import { useParams } from 'react-router-dom';

function MentorDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="rounded-full w-60 h-60" src="https://picsum.photos/500/600" alt="" />
      </div>
      <div className="text-center mt-1">
        <div className="font-bold text-xl">Ankit Majee</div>
        <div className="text-gray-500">Founder and CEO @LOREMIPSUM</div>
        <div>100+ Years of Experience</div>
      </div>
      <div className="shadow-md rounded-lg p-4 mt-4 mx-auto w-2/5">
        <div className="font-bold text-lg">Expert in</div>
        <div className="text-gray-500">
          Merako Sab aata hai!
        </div>
      </div>
      <div className='flex justify-center mt-4'><button className=" mb-4 px-4 py-2 bg-blue-500 text-white rounded">contact</button></div>
    </div>
  );
}

export default MentorDetails;