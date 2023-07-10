import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails(item) {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="rounded-full w-60 h-60" src="https://picsum.photos/500/600" alt="" />
      </div>
      <div className="text-center mt-2">
        <div className="font-bold text-xl">Event Name</div>
      </div>
      <div className="shadow-md rounded-lg p-4 mt-4 mx-auto w-2/5">
        <div className="font-bold text-lg">Description</div>
        <div className="text-gray-500">
          Merako Sab aata hai!
        </div>
     </div>
    </div>
  );
}

export default EventDetails;