import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'

const data = [
  {
    name: 'Event 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae rerum accusantium ratione dolor in laborum molestias placeat quia nemo non neque, itaque, officiis eius sunt possimus voluptatem quam vel assumenda nobis inventore exercitationem.',
    image: 'https://picsum.photos/500/600',
    date: '12/12/2021',
    location: 'Location 1'
  },
  {
    name: 'Event 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae rerum accusantium ratione dolor in laborum molestias placeat quia nemo non neque, itaque, officiis eius sunt possimus voluptatem quam vel assumenda nobis inventore exercitationem.',
    image: 'https://picsum.photos/500/600',
    date: '12/12/2021',
    location: 'Location 1'
  },
  {
    name: 'Event 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae rerum accusantium ratione dolor in laborum molestias placeat quia nemo non neque, itaque, officiis eius sunt possimus voluptatem quam vel assumenda nobis inventore exercitationem.',
    image: 'https://picsum.photos/500/600',
    date: '12/12/2021',
    location: 'Location 1'
  },
]

function Events() {
  return (
    <>
      <div className='p-20'>

        <div className='flex items-center justify-center'>
          <div className='text-xl font-bold '>Upcoming Events</div>
        </div>
         <form className='my-6'>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg -50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Put your interests here..." required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

        <div className='flex justify-center flex-1 w-full gap-3'>
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