import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function MentorDetails() {
  const { id } = useParams();
  const [mentor, setMentor] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/mentors/${id}`)
      .then((res) => {
        setMentor(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);

  
  return (
    <div>
      <div className="flex items-center justify-center">
        <img className="rounded-full w-60 h-60" src="https://picsum.photos/500/600" alt="" />
      </div>
      <div className="mt-1 text-center">
        <div className="text-xl font-bold">{mentor.firstName +' '+mentor.lastName}</div>
        <div className="text-gray-500">Founder and CEO @LOREMIPSUM</div>
        <div>100+ Years of Experience</div>
      </div>
      <div className="w-2/5 p-4 mx-auto mt-4 rounded-lg shadow-md">
        <div className="text-lg font-bold">Expert in</div>
        <div className="text-gray-500">
          Merako Sab aata hai!
        </div>
      </div>
      <div className='flex justify-center mt-4'><button className="px-4 py-2 mb-4 text-white bg-blue-500 rounded ">contact</button></div>
    </div>
  );
}

export default MentorDetails;