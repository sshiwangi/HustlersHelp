import BACKEND_BASE_URL from "./BASE_URL";
import axios from "axios";

const mentorSignIn = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_BASE_URL}/auth/mentor/signin`, data)
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response) {
            throw error.response.data.message
        }
        throw error.message
    }
}
const studentSignIn = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_BASE_URL}/auth/student/signin`, data)
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response) {
            throw error.response.data.message
        }
        throw error.message
    }
}
const mentorSignUp = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_BASE_URL}/auth/mentor/signup`, data)
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response) {
            throw error.response.data.message
        }
        throw error.message
    }
}
const studentSignUp = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_BASE_URL}/auth/student/signup`, data)
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response) {
            throw error.response.data.message
        }
        throw error.message
    }
}

export { mentorSignIn, studentSignIn, studentSignUp, mentorSignUp }