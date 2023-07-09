import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div class="Home-page">
      <div className="home-page-container-first">
        {/* <div className="home-page-container-first-section"> */}
      <div className="home-page-container-first-heading">Unleash Your Entrepreneurial Potential</div>
      <div className="home-page-container-first-subheading">Learn,Connect,Unleash Your Entrepreneurial Brilliance!</div>
      <div className="home-page-container-first-btn">Join Us</div>
      {/* </div> */}
      <div className="home-page-container-first-slogan">
        <div className="home-page-container-first-slogan-text">We empower aspiring entrepreneurs through learning resources, networking opportunities, and mentorship.</div>
        </div>
      </div>
      <div className="home-page-container-second">
        <div className="home-page-container-second-heading">What's in it for you?</div>
        <div className="home-page-container-second-features">
          {/* <div className="home-page-container-second-features-items"> */}
            <div className="home-page-container-second-features-item-name">Find Mentors/Advisors</div>
          </div>
          <div className="home-page-container-second-features-items">
            <div className="home-page-container-second-features-item-name">Find Co-founders/team members</div>
          </div>
          <div className="home-page-container-second-features-items">
            <div className="home-page-container-second-features-item-name">Great Learning Resources</div></div>
         <div className="home-page-container-second-features-items">
          <div className="home-page-container-second-features-item-name">Access to exclusive events</div>
         </div>
         <div className="home-page-container-second-features-items">
          <div className="home-page-container-second-features-item-name">Sell/Buy Equipments</div>
         </div>
        {/* </div> */}
      </div>
      <div className="home-page-container-third">
        <div className="home-page-container-heading"> Trending Courses</div>
        <div className="home-page-container-trending-courses">
          <div className="home-page-container-trending-courses-items">
            <div className="course-image"></div>
            {/* <div className="home-page-container-trending-courses-details"> */}
              <div className="trending-course-name">Digital Marketing</div>
              <div className="trending-course-details">In this course, students will gain practical experience by working on reak world projects. </div>
              <div className="trending-courses-ratings">4.8</div>
              <div className="trending-courses-explore-btn">Explore</div>
            {/* </div> */}
          </div>
          <div className="home-page-container-trending-courses-items">
            <div className="course-image"></div>
            <div className="home-page-container-trending-courses-details">
              <div className="trending-course-name">Email Marketing</div>
              <div className="trending-course-details">In this course, students will gain practical experience by working on reak world projects. </div>
               <div className="trending-courses-ratings">4.8</div>
              <div className="trending-courses-explore-btn">Explore</div>
            </div>
          </div>
        </div>
        <div className="view-all-btn">View all</div>
      </div>
       <div className="home-page-container-fourth">
        <div className="home-page-container-heading"> Trending items</div>
        <div className="home-page-container-trending-courses">
          <div className="home-page-container-trending-courses-items">
            <div className="course-image"></div>
            <div className="home-page-container-trending-courses-details">
              <div className="trending-course-name">Iphone 14</div>
              <div className="trending-course-details">Advanced camera system with cinematic mode now in 4K Dolby Vision up to 30 fps. </div>
              <div className="trending-courses-rate">40000</div>
              <div className="trending-courses-explore-btn">Explore</div>
            </div>
          </div>
          <div className="home-page-container-trending-courses-items">
            <div className="course-image"></div>
            <div className="home-page-container-trending-courses-details">
              <div className="trending-course-name">Email Marketing</div>
              <div className="trending-course-details">The office chair keeps you comfy and focused with featureslike manually adjusted tilt option. </div>
               <div className="trending-courses-rate">10000</div>
              <div className="trending-courses-explore-btn">Explore</div>
            </div>
          </div>
        </div>
        <div className="view-all-btn">View all</div>
      </div>
      <div className="home-page-container-fifth">
        <div className="home-page-container-newsletter">
          <div className="newsletter-heading">Subscribe to our newsletter</div>
          <div className="newsletter-input-email"> <input type='email' placeholder='Enter your email here'/></div>
         
        </div>
      </div>
    </div>
  )
}
export default Home
