import React from 'react'
import {useParams} from 'react-router-dom'

function MentorDetails() {
  const {id} = useParams()
  console.log(id);
  return (
    <div>
      <img src="https://picsum.photos/500/600" alt="" />
      <div>Name</div>
      <div>Founder </div>
      <div>3+</div>
      <div>
        <div>
          expert in
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt expedita velit repudiandae fuga non aspernatur veritatis ratione porro nam.
        </div>
      </div>
      <div>
        contact
      </div>
    </div>
  )
}

export default MentorDetails