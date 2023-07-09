import React from "react";
import MentorCard from "../components/MentorCard";

const MentorList  = () => {

    const data= [{
        name: "Mentor 1",
        description: "Mentor 1 description",
        image: "https://picsum.photos/200/300",
        skills: ["skill1", "skill2", "skill3"]
    }
    ]

    return (
        <>
        <div className="p-20">
            <div className="font-bold text-3xl mb-3">Mentor List</div>
            <div className="mb-5" >Unlock Your Potential With mentorship</div>
            <div className="flex gap-4 ">
            {[1,2,3,4].map((item) => {
                return <MentorCard item={item} />
            })}
            </div>
        </div>
        </>
    );
};

export default MentorList;