import React from 'react'
import Item from '../components/Item'
const data = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Item 1 description',
        image: 'https://picsum.photos/500/600',
        price: 100,
        seller: 'Seller 1'
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Item 1 description  this jnsfnosfg dsfijoshkfjnsdknfksd sodifjosdhfsdjf osdhusdjnsdnfkbsdfbkjdfbksdbf ksudhfosdfjsdk ksudhfsfdjks sudfksdfksdbfsfkugs skdufkdsbfk',
        image: 'https://picsum.photos/500/600',
        price: 100,
    }
]
function FeaturedItems() {
  return (<>
  
    <div className='text-center font-bold text-3xl mb-6'>Featured Items</div>
    <div className='flex gap-6 px-9'>
    {data.map((item) => {
        return <Item item={item} />
    })}
    </div>
    </>
  )
}

export default FeaturedItems