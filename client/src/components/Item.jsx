import React from 'react'
import { useNavigate } from 'react-router-dom'
function Item({item}) {
    const navigate = useNavigate()
  return (
    <div className='rounded-xl shadow w-80 flex flex-col'>
        <img src={item.image} className='w-80 h-72 rounded-t-xl'  alt="" />
        <div className='flex flex-col p-6 gap-2 flex-1'>
            <div className='font-bold text-xl'>{item.name}</div>
            <div>{item.description}</div>
            <div className='text-lg'>Rs {item.price}</div>
        </div>
        <div className='p-6 w-full'>

        <div onClick={()=>{navigate(`/products/${item.id}`)}} className='bg-[#458EFF] self-center p-3 w-full rounded-full text-center text-white'>Explore</div>
        </div>
    </div>
  )
}

export default Item