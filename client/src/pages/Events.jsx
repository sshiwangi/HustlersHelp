import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'

const data = [
  {
    name: 'Event 1',
    description: 'Event 1 description',
    image: 'https://picsum.photos/500/600',
    date: '12/12/2021',
    location: 'Location 1'
  },
  {
    name: 'Event 1',
    description: 'Event 1 description',
    image: 'https://picsum.photos/500/600',
    date: '12/12/2021',
    location: 'Location 1'
  },
  {
    name: 'Event 1',
    description: 'Event 1 description',
    image: 'https://picsum.photos/500/600',
    date: '12/12/2021',
    location: 'Location 1'
  }
]

function Events() {
  return (
    <>
      <div className='p-20'>

        <div className='flex items-center justify-between'>
          <div className='text-lg font-bold'>Upcoming Events</div>
          <div className='flex border items-center rounded-full'><input className='rounded-full w-full h-full focus:outline-none p-3' type="text" /><AiOutlineSearch className='text-lg mx-2' /></div>
        </div>
        <div className='flex w-full gap-3 flex-1'>
          {data.map((event) => {
            return <EventCard event={event} />
          })
          }

        </div>
      </div>
    </>
  )
}

export default Events