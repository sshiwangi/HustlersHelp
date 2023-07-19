import {PropTypes} from 'prop-types'
import { useNavigate } from 'react-router-dom'

function ItemCard({id,name,description,img,price}) {
    const navigate = useNavigate()
    return (
        <div className="shadow-lg card w-96 h-[600px] bg-base-100">
            <figure><img src={img} alt="Shoes" className='object-cover bg-cover w-96 h-72'/></figure>
            <div className="card-body">
                <h2 className="text-2xl card-title">{name}</h2>
                <div className=''>{description.length >=100 ? description.substring(0,100)+ '...':description}</div>
                <div className='flex items-center gap-1 mt-auto text-xl font-bold'>RS {price}</div>
                <div className="mt-3 card-actions">
                    <button onClick={()=>{navigate(`/items/item/${id}`)}} className="w-full rounded-full btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    )
}

ItemCard.propTypes ={
    id:PropTypes.string,
    name:PropTypes.string,
    description:PropTypes.string,
    img:PropTypes.string,
    price:PropTypes.float
}

export default ItemCard