import React from 'react'
import imageSrc from '../assets/digital-2.jpg';
import Card from '../components/Card'
import subscribe from '../assets/subscribe.png'
import forward from '../assets/Forward Button.png'
import elearning from '../assets/E-Learning.png'
import getcash from '../assets/Get Cash.png'
import teamwork from '../assets/Teamwork.png'
import tuition from '../assets/Tuition.png'
import { Link } from 'react-router-dom';
import Itemscard from '../components/Itemscard';

const Home = () => {
  const aboutRef = React.useRef();
  return (
    <div class="p-20">
      <div className="flex flex-col items-center justify-center mb-24 h-screen-90 hero-section ">
        <h1 className='flex items-center justify-center text-6xl font-extrabold text-center text-black-900'>Unleash Your <br /> Entrepreneurial
        {/* <img src="" alt="" /> */}
         <br /> Potential</h1>
         <p className="m-5 text-323232">Learn, Connect, Unleash Your Entrepreneurial Brilliance.</p>
         <div style={{ display: 'flex',height: '50px', borderRadius: '25PX', fontSize: '18px', fontWeight: '600',  color: 'white', width: '150px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#458EFF'}}>
          <Link to='/signup' >Join Us</Link>
         </div>
      </div>
      <div id='about' ref={aboutRef} className="flex items-center justify-center mb-24">
        <div style={{backgroundColor: '#F9F9F9', padding: '30px',
         borderRadius: '18px', width: '75%', height: "300px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 className='text-2xl text-center text-black-600'>We empower aspiring entrepreneurs <br />
          through learning resources, networking <br />
          opportunities, and mentorship</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-24">
        <h2 className='mb-16 text-4xl text-center text-black-900'>What's in it for you?</h2>
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div className="flex">
          <div style={{borderRadius: '9px', marginBottom: '20px',marginRight: "10px", marginLeft: '10px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          <img style={{ height: '45px', marginBottom: '10px'}} src={teamwork} alt="" />  
          <h3 className='text-center'>Find Mentors/Advisors</h3>
          </div>
          <div style={{borderRadius: '9px', marginBottom: '20px', marginRight: "10px", marginLeft: '10px',width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)'  }}>
          <img style={{ height: '45px', marginBottom: '10px'}} src={elearning} alt="" />  
          <h3 className='text-center'>Find Co-founders/team members</h3>
          </div>
          <div style={{borderRadius: '9px', marginBottom: '20px', marginRight: "10px", marginLeft: '10px',width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)'}}>
          <img style={{ height: '45px', marginBottom: '10px'}} src={tuition} alt="" />  
          <h3 className='text-center'>Great Learning Resources</h3>
          </div>
          </div>
          <div className="flex">
          <div style={{borderRadius: '9px', marginBottom: '20px', marginRight: "10px", marginLeft: '10px',width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)', transition:'transform 0.3s ease'}}>
          <img  style={{ height: '45px', marginBottom: '10px'}}src={tuition} alt="" />  
          <h3 className='text-center'>Access to exclusive events</h3>
          </div>
          <div style={{borderRadius: '9px', marginBottom: '20px', marginRight: "10px", marginLeft: '10px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          <img style={{ height: '45px', marginBottom: '10px'}} src={getcash} alt="" />
          <h3 className='text-center'>Sell/Buy Equipments</h3>
          </div>
          </div>
          
          
        </div>

      </div>
      <div className="mb-24 flex items-center flex-col">
        <h2 className="mb-16 text-4xl text-center text-black-900">Trending Courses</h2>
        <div className="flex items-center justify-center  mb-6">
          <Card />

          <Card />

          <Card />
        </div>
        <div className='flex w-1/6 justify-center items-center rounded-full pt-4 pb-4 bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Show More
        </div>
      </div>
      <div className="mb-24 flex items-center flex-col">
        <h2 className="mb-16 text-4xl text-center text-black-900">Trending Items</h2>
        <div className="flex items-center justify-center">
          <Card />

          <Itemscard/>

          <Itemscard />
        </div>
        <div className='flex w-1/6 justify-center items-center rounded-full pt-4 pb-4 bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Show More
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div style={{width: "500px", height: '300px', backgroundColor: "#f9f9f9", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '40px', borderRadius: "19px" }}>
          <img style={{height: '170px'}} src={subscribe} alt="subscribe" />
          <p className='mb-6 text-3xl font-bold'>Subscribe to our newsletter</p>
          <div className="flex justify-between w-3/4 bg-white rounded-full">
            <input style={{background: 'none', height: '50px'}} type="email" name="" id="" />
            <img style={{height: '50px'}} src={forward} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home