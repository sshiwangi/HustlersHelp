import React from "react";
import MentorCard from "../components/MentorCard";

const MentorList  = () => {

    const data= [{
        id: 1,
        name: "Mentor 1",
        description: "Mentor 1 description",
        image: "https://picsum.photos/200/300",
        skills: ["skill1", "skill2", "skill3"]
    }
    ,{
        id: 2,
        name: "Mentor 2",
        description: "Mentor 2 description",
        image: "https://picsum.photos/200/300",
        skills: ["skill1", "skill2", "skill3"]
    },
    {
        id: 3,
        name: "Mentor 3",
        description: "Mentor 3 description",
        image: "https://picsum.photos/200/300",
        skills: ["skill1", "skill2", "skill3"]
    }
    ]

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