import React from "react";
import MentorCard from "../components/MentorCard";
import axios from "axios";
import { useState, useEffect } from "react";

const MentorList  = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/mentors`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <>
        <div className="p-20">
            <div className="mb-3 text-3xl font-bold">Mentor List</div>
            <div className="mb-5" >Unlock Your Potential With mentorship</div>
            <div className="flex flex-wrap items-center justify-center gap-4">
            {data.map((item) => {
                return <MentorCard item={item} />
            })}
            </div>
        </div>
        </>
    );
};

export default MentorList;