import React from 'react'
import imageSrc from '../assets/digital-2.jpg';
import Card from '../components/Card'
import subscribe from '../assets/subscribe.png'
import forward from '../assets/Forward Button.png'
import elearning from '../assets/E-Learning.png'
import getcash from '../assets/Get Cash.png'
import teamwork from '../assets/Teamwork.png'
import tuition from '../assets/Tuition.png'

const Home = () => {
  return (
    <div class="p-20">
      <div className="h-screen-90 hero-section mb-24 flex flex-col items-center justify-center ">
        <h1 className='text-6xl font-extrabold text-black-900 flex items-center justify-center text-center'>Unleash Your <br /> Entrepreneurial
        {/* <img src="" alt="" /> */}
         <br /> Potential</h1>
         <p className="text-323232 m-5">Learn, Connect, Unleash Your Entrepreneurial Brilliance.</p>
         <div style={{ display: 'flex',height: '50px', borderRadius: '25PX', fontSize: '18px', fontWeight: '600',  color: 'white', width: '150px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#458EFF'}}>
          Join Us
         </div>
      </div>
      <div id='about' className="flex mb-24 items-center justify-center">
        <div style={{backgroundColor: '#F9F9F9', padding: '30px',
         borderRadius: '18px', width: '75%', height: "300px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 className='text-center text-2xl text-black-600'>We empower aspiring entrepreneurs <br />
          through learning resources, networking <br />
          opportunities, and mentorship</h2>
        </div>
      </div>
      <div className="flex mb-24 flex-col items-center justify-center">
        <h2 className='text-center mb-16 text-4xl text-black-900'>What's in it for you?</h2>
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div className="flex">
          <div style={{borderRadius: '9px', marginBottom: '20px',marginRight: "10px", marginLeft: '10px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          <img style={{ height: '45px', marginBottom: '10px'}} src={teamwork} alt="" />  
          <h3 className='text-center'>Find Mentors/Advisors</h3>
          </div>
          <div style={{borderRadius: '9px', marginBottom: '20px', marginRight: "10px", marginLeft: '10px',width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          <img style={{ height: '45px', marginBottom: '10px'}} src={elearning} alt="" />  
          <h3 className='text-center'>Find Co-founders/team members</h3>
          </div>
          <div style={{borderRadius: '9px', marginBottom: '20px', marginRight: "10px", marginLeft: '10px',width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          <img style={{ height: '45px', marginBottom: '10px'}} src={tuition} alt="" />  
          <h3 className='text-center'>Great Learning Resources</h3>
          </div>
          </div>
          <div className="flex">
          <div style={{borderRadius: '9px', marginBottom: '20px', marginRight: "10px", marginLeft: '10px',width: '180px', height: '180px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
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
      <div className="mb-24">
        <h2 className="text-center mb-16 text-4xl text-black-900">Trending Courses</h2>
        <div className="flex items-center justify-center">
          <Card />

          <Card />

          <Card />
        </div>
      </div>
      <div className="mb-24">
        <h2 className="text-center mb-16 text-4xl text-black-900">Trending Items</h2>
        <div className="flex items-center justify-center">
          <Card />

          <Card />

          <Card />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div style={{width: "500px", height: '300px', backgroundColor: "#f9f9f9", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '40px', borderRadius: "19px"}}>
          <img style={{height: '170px'}} src={subscribe} alt="subscribe" />
          <p className='text-3xl font-bold mb-6'>Subscribe to our newsletter</p>
          <div className="flex bg-white w-3/4 rounded-full justify-between">
            <input style={{background: 'none', height: '50px'}} type="email" name="" id="" />
            <img style={{height: '50px'}} src={forward} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home