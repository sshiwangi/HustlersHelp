import User from "../models/User.js";
import Mentor from "../models/Mentor.js";

//@get all mentors
const getAllMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find({}).select("-password");
        res.json(mentors);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

//@get mentor by id
const getMentorById = async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.id);
        res.json(mentor);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

//@get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

//@get user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export { getAllMentors, getMentorById, getAllUsers, getUserById }