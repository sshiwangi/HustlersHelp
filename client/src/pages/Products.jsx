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
function Products() {
  return (<>
  
    <div className='mb-6 text-3xl font-bold text-center'>Featured Items</div>
    <div className='flex gap-6 px-9'>
    {data.map((item) => {
        return <Item item={item} />
    })}
    </div>
    </>
  )
}

export default Products;