import React from 'react'
import itemimageSrc from '../assets/chair.png';

const Itemscard = () => {
  return (
    <div
      style={{
        marginBottom: "20px",
        marginRight: "20px",
        boxShadow: "2px 2px 9px 5px rgba(151, 144, 144, 0.25)",
        backgroundRadius: "23px",
        width: "250px",
        height: "370px",
        padding: "15px",
      }}
    >
      <div style={{ width: "220px", height: "170px" }}>
        <img
          src={itemimageSrc}
          alt="digitalimg"
          style={{ backgroundSize: "cover" }}
        />
      </div>
      <div>
        <h3 className="text-black-bold text-xl mt-2 ml-2">Study chair</h3>
        <h4 className="text-gray text-s m-2">
        This study chair keeps you comfy and focused with features like manually adjustable tilt tension.
        </h4>
        <h4 className="text-black-bold ml-2 mb-1">
          Rs 10000
          {/* <img src="" alt="" /> star icon */}
        </h4>
      </div>
      <div
        style={{
          backgroundColor: "#458EFF",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          color: "white",
          fontWeight: "500px",
          fontSize: "18px",
          
        }}
      >
        Explore
      </div>
    </div>
  )
}

export default Itemscard