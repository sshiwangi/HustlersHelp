import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function Events() {
  return (
    <>
    <div className='p-20'>

    <div className='flex items-center justify-between'>
      <div className='text-lg font-bold'>Upcoming Events</div>
      <div className='flex border items-center rounded-full'><input className='rounded-full w-full h-full focus:outline-none p-3' type="text" /><AiOutlineSearch className='text-lg mx-2'/></div>
    </div>
    <div>
      
    </div>
    </div>
    </>
  )
}

export default Events