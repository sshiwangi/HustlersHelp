import {SIGN_IN,SIGN_OUT,SIGN_UP} from '../actionTypes.js'

const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    role: null,
    error: null,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true,
                role: action.payload.role,
                error: null,
                loading: false,
            };
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                token: null,
                isLoggedIn: false,
                role: null,
                error: null,
                loading: false,
            };
        case SIGN_UP:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true,
                role: action.payload.role,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
}