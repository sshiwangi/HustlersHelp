import React from 'react'
import CourseCard from '../components/CourseCard'
import { AiOutlineSearch } from 'react-icons/ai'

const data = [
    {
        name: 'Item 1',
        description: 'Item 1 description',
        image: 'https://picsum.photos/500/600',
        rating: 4.5,
    }]

function Courses() {
  return (
    <>
      <div className='p-20'>

        <div className='flex items-center justify-between'>
          <div className='text-lg font-bold'>Courses</div>
          <div className='flex border items-center rounded-full'><input className='rounded-full w-full h-full focus:outline-none p-3' type="text" /><AiOutlineSearch className='text-lg mx-2' /></div>
        </div>
        <div className='flex w-full gap-3 flex-1'>
          {data.map((course) => {
            return <CourseCard course={course} />
          })
          }

        </div>
      </div>
    </>
  )
}

export default Courses