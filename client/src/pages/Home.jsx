import Carousel from "../components/Carousel"
import FeatureCards from "../components/FeatureCards"
import Hero from "../components/Hero"
import CourseCard from "../components/CourseCard"
import ItemCard from "../components/ItemCard"
import Newsletter from "../components/Newsletter"
import brushStroke from '../assets/brushStroke.svg'
import { useNavigate } from "react-router-dom"

const courseData = [
  {
    id: 'shdjbhj',
    img: 'http://placehold.it/100x300',
    name: 'Digital Marketting',
    description: 'In this dsnd  sduigbsd sdugs courghjgh fhf dhft dfhtfg tdfh se, sdgsgk sdg dfhdfh dfhgdf dgfdh lsdhglds ksdg students will gain practical experience by working on real-world projects.',
    rating: 4.8,
  },
  {
    id: 'srgdff',
    img: 'http://placehold.it/400x300',
    name: 'Email Marketting',
    description: 'In this course, students will gain practical experience by working on real-world projects.',
    rating: 4.8,
  },
  {
    id: 'shdjdhgjbhj',
    img: 'http://placehold.it/400x300',
    name: 'Digital Marketting',
    description: 'In this course, students will gain practical experience by working on real-world projects.',
    rating: 4.8,
  },
  {
    id: 'shdjdhdghgjbhj',
    img: 'http://placehold.it/400x300',
    name: 'Digital Marketting',
    description: 'In this course, students will gain practical experience by working on real-world projects.',
    rating: 4.8,
  }
]

const itemData = [
  {
    id:'dfdfdrg',
    name: 'iPhone 14',
    img: 'http://placehold.it/100x300',
    description: 'Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps.',
    price: 40_000
  },
  {
    id:'dfdfdrg',
    name: 'iPhone 14',
    img: 'http://placehold.it/100x300',
    description: 'Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps.',
    price: 40_000
  },
  {
    id:'dfdfdrg',
    name: 'iPhone 14',
    img: 'http://placehold.it/100x300',
    description: 'Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps.',
    price: 40_000
  },
  {
    id:'dfdfdrg',
    name: 'iPhone 14',
    img: 'http://placehold.it/100x300',
    description: 'Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps.',
    price: 40_000
  },
  {
    id:'dfdfdrg',
    name: 'iPhone 14',
    img: 'http://placehold.it/100x300',
    description: 'Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps.',
    price: 40_000
  },
  {
    id:'dfdfdrg',
    name: 'iPhone 14',
    img: 'http://placehold.it/100x300',
    description: 'Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps.',
    price: 40_000
  },
  {
    id:'dfdfdrg',
    name: 'iPhone 14',
    img: 'http://placehold.it/100x300',
    description: 'Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps.',
    price: 40_000
  },
  

]


function Home() {
  const navigate = useNavigate()
  return (
    <div className="lg:mx-16">
      <Hero />
      <FeatureCards />
      
      {/* Trending Courses Section Start*/}
      <div className="flex flex-col my-12">
        <div className="relative self-center mb-12 text-4xl font-bold text-center">Trending Courses <img src={brushStroke} className='absolute w-full h-full -z-10 -bottom-4' alt="" /></div>
        <Carousel elements={courseData.map(CourseCard)} />
        <button onClick={()=>{navigate('/courses')}} className="self-center btn btn-primary btn-outline">View All</button>
      </div>
      {/* Trending Courses Section End */}

      {/* Trending Items Section Start */}
      <div className="flex flex-col my-12">
        <div className="relative self-center mb-12 text-4xl font-bold text-center">Trending Items <img src={brushStroke} className='absolute w-full h-full -z-10 -bottom-4' alt="" /></div>
        <Carousel elements={itemData.map(ItemCard)} />
        <button onClick={()=>{navigate('/items')}} className="self-center btn btn-primary btn-outline">View All</button>
      </div>
      {/* Trending Items Section End */}

      <Newsletter/>
    </div>
  )
}

export default Home