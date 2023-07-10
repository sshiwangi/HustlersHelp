import User from '../models/User.js';
import Mentor from '../models/Mentor.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};



// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    const { firstName, lastName, email, college, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({
            firstName,
            lastName,
            email,
            college,
            password,
        });
        res.status(201).json({
            user_id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: "enterpreneur",
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

// @desc    Register a new mentor
// @route   POST /api/auth/register
// @access  Public
const registerMentor = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {

        const existingMentor = await Mentor.findOne({ email });
        if (existingMentor) {
            return res.status(400).json({ message: 'Mentor already exists' });
        }
        const mentor = await Mentor.create({
            firstName,
            lastName,
            email,
            password,
        });
        res.status(201).json({
            _id: mentor._id,
            firstName: mentor.firstName,
            lastName: mentor.lastName,
            email: mentor.email,
            token: generateToken(mentor._id),
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                user_id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                isLoggedIn: true,
                role: "enterpreneur",
                token: generateToken(user._id),
            });
        }
        else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

// @desc    Login mentor
// @route   POST /api/auth/login
// @access  Public
const loginMentor = async (req, res) => {
    const { email, password } = req.body;
    try {
        const mentor = await Mentor.findOne({ email });
        if (mentor && (await mentor.matchPassword(password))) {
            res.status(200).json({
                user_id: mentor._id,
                firstName: mentor.firstName,
                lastName: mentor.lastName,
                isLoggedIn: true,
                role: "mentor",
                token: generateToken(mentor._id),
            });
        }
        else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}



export { registerUser, registerMentor, loginUser, loginMentor };