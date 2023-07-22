import { createSlice } from "@reduxjs/toolkit";
import { signInMentor, signInStudent, signUpMentor, signUpStudent } from '../actions/authAction'

const initialState = {
    firstName: localStorage.getItem('firstname'),
    lastName: localStorage.getItem('lastname'),
    isLoggedIn: localStorage.getItem('isloggedin'),
    role: localStorage.getItem('role'),
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
}


const authSlice = createSlice({
    name: 'Auth',
    initialState: initialState,
    extraReducers: (builder) => {
        // Mentor Sign In
        builder.addCase(signInMentor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(signInMentor.fulfilled, (state, action) => {
            console.log('fullfilesd', action.payload)
            state.loading = false;
            state.error = null;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isLoggedIn = action.payload.isLoggedIn;
        })
        builder.addCase(signInMentor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })

        // Student Sign In
        builder.addCase(signInStudent.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(signInStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isLoggedIn = action.payload.isLoggedIn;
        })
        builder.addCase(signInStudent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })

        // Mentor Sign Up
        builder.addCase(signUpMentor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(signUpMentor.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isLoggedIn = action.payload.isLoggedIn;
        })
        builder.addCase(signUpMentor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })

        // Student Sign Up
        builder.addCase(signUpStudent.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(signUpStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isLoggedIn = action.payload.isLoggedIn;
        })
        builder.addCase(signUpStudent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})


export default authSlice.reducer;