import { createAsyncThunk } from "@reduxjs/toolkit";
import { mentorSignIn, mentorSignUp, studentSignIn, studentSignUp } from "../../api/authAPI";


const signInMentor = createAsyncThunk(
    'auth/mentor/signIn',
    async (payload) => {
        return await mentorSignIn(payload)
    }
)

const signUpMentor = createAsyncThunk(
    'auth/mentor/signUp',
    async (payload) => {
        return await mentorSignUp(payload)
    }
)

const signInStudent = createAsyncThunk(
    'auth/student/signIn',
    async (payload) => {
        return await studentSignIn(payload)
    }
)

const signUpStudent = createAsyncThunk(
    'auth/student/signUp',
    async (payload) => {
        return await studentSignUp(payload)
    }
)

export { signInMentor, signInStudent, signUpMentor, signUpStudent }