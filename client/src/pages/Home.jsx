import React from 'react'
import imageSrc from '../assets/digital-2.jpg';
import Card from '../components/Card'

const Home = () => {
  return (
    <div class="p-20">
      <div className="hero-section mb-12 flex flex-col items-center justify-center ">
        <h1 className='text-6xl font-extrabold text-black-900 flex items-center justify-center text-center'>Unleash Your <br /> Entrepreneurial
        {/* <img src="" alt="" /> */}
         <br /> Potential</h1>
         <p className="text-323232 m-5">Learn, Connect, Unleash Your Entrepreneurial Brilliance.</p>
         <div style={{ display: 'flex',height: '50px', borderRadius: '25PX', fontSize: '18px', fontWeight: '600',  color: 'white', width: '150px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#458EFF'}}>
          Join Us
         </div>
      </div>
      <div className="flex items-center justify-center">
        <div style={{backgroundColor: '#F9F9F9', padding: '30px',
         borderRadius: '16px', width: '75%', justifyContent: 'center', alignItems: 'center' }}>
          <h2 className='text-center text-2xl text-black-600'>We empower aspiring entrepreneurs <br />
          through learning resources, networking <br />
          opportunities, and mentorship</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className='text-center text-2xl text-black-800'>What's in it for you?</h2>
        {/* <img src="" alt="" /> */}
        <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '10px', rowGap: '20px'}}>
          <div style={{borderRadius: '9px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          {/* <img src="" alt="" />   */}
          <h3 className='text-center'>Find Mentors/Advisors</h3>
          </div>
          <div style={{borderRadius: '9px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          {/* <img src="" alt="" />   */}
          <h3 className='text-center'>Find Co-founders/team members</h3>
          </div>
          <div style={{borderRadius: '9px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          {/* <img src="" alt="" />   */}
          <h3 className='text-center'>Great Learning Resources</h3>
          </div>
          <div style={{borderRadius: '9px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          {/* <img src="" alt="" />   */}
          <h3 className='text-center'>Access to exclusive events</h3>
          </div>
          <div style={{borderRadius: '9px', width: '180px', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 9px 5px rgba(151, 144, 144, 0.25)' }}>
          {/* <img src="" alt="" />   */}
          <h3 className='text-center'>Sell/Buy Equipments</h3>
          </div>
        </div>

      </div>
      <div className="trending-cources-section">
        <h2 className="text-center text-2xl text-black-800">Trending Courses</h2>
        <div className="flex items-center justify-center">
          <Card />

          <Card />

          <Card />
        </div>
      </div>
      <div className="trending-items-section">
        <h2 className="text-center text-2xl text-black-800">Trending Items</h2>
        <div className="flex items-center justify-center">
          <Card />

          <Card />

          <Card />
        </div>
      </div>
    </div>
  )
}
export default Home