import {SIGN_IN,SIGN_OUT,SIGN_UP} from '../actionTypes.js'

export const signIn = (credentials) => {
    return async (dispatch) => {
        //dummy call
        const { email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        const { user, token, role } = data;

        dispatch({
            type: SIGN_IN,
            payload: {
                user: user,
                token: token,
                role: role,
            },
        });
    }
}

export const signOut = () => {
    return async (dispatch) => {
        dispatch({
            type: SIGN_OUT,
        });
    }
}

export const signUp = (credentials) => {
    return async (dispatch) => {
        //dummy call
        const { firstName, lastName, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });
        const data = await response.json();
        const { user, token, role } = data;

        dispatch({
            type: SIGN_UP,
            payload: {
                user: user,
                token: token,
                role: role,
            },
        });
    }
}