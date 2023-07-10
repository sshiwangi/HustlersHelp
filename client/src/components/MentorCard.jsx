import React from 'react'
import { Link, Route } from "react-router-dom";

function MentorCard({item}) {
    return (
        <>
            <div className='flex rounded-lg border shadow flex-col p-4 items-center justify-center gap-2'>
                <img src="https://picsum.photos/500/600" className='w-24 h-24 rounded-[50%]' alt="" />
                <div className='font-bold text'>Name</div>
                <div>Industry</div>
                <div>Expertise</div>
                <Link to={`/mentors/${item}`} className='bg-[#458EFF] w-full rounded-full p-3 text-lg text-white'>View Profile</Link>
            </div>
        </>
    )
}

export default MentorCard