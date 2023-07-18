import Carousel from "../components/Carousel"
import FeatureCards from "../components/FeatureCards"
import Hero from "../components/Hero"
import CourseCard from "../components/CourseCard"
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
      {/* TODO: Code Here */}
      {/* Trending Items Section End */}

      {/* Newsletter Card Here */}
    </div>
  )
}

export default Home