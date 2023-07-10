import React from 'react'
import { useNavigate } from 'react-router-dom'
function Item({item}) {
    const navigate = useNavigate()
  return (
 <div className='rounded-xl shadow-lg w-80 mx-auto sm:w-96'>
  <img src={item.image} className='w-full h-72 rounded-t-xl object-cover' alt='' />
  <div className='flex flex-col justify-center p-6 gap-2 flex-1'>
    <div className='font-bold text-xl text-center'>{item.name}</div>
    <div className='text-center'>{item.description}</div>
    <div className='text-lg text-center'>Rs {item.price}</div>
  </div>
  <div className='p-6'>
    <div
      onClick={() => {
        navigate(`/products/${item.id}`);
      }}
      className='bg-[#458EFF] mx-auto p-3 rounded-full text-center text-white w-3/4 sm:w-full'
    >
      Explore
    </div>
  </div>
</div>


  )
}

export default Item