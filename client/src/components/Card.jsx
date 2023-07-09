import React from "react";
import imageSrc from '../assets/digital-2.jpg';

function Card() {
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
          src={imageSrc}
          alt="digitalimg"
          style={{ backgroundSize: "cover" }}
        />
      </div>
      <div>
        <h3 className="text-black-bold text-xl">Digital Marketing</h3>
        <h4 className="text-gray text-l">
          In this course, students will gain practical experience by working on
          real-world projects.
        </h4>
        <h4 className="text-black-bold">
          4.8
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
          height: "45px",
          color: "white",
          fontWeight: "500px",
          fontSize: "22px",
        }}
      >
        Explore
      </div>
    </div>
  );
}

export default Card;
