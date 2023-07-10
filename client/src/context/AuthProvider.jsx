import { createContext, useState } from "react";

const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const getInitialState = () => {// getting User Info from localstorage if not found returns default user state
        const user = localStorage.getItem('user')
        return JSON.parse(user) || {
            user_id: "",
            isLoggedIn: false,
            token: "",
            firstName:"",
            lastName:"",
            role:"",
        }
    }
    const [user, setUser] = useState(getInitialState())
    const updateUser = ({ user_id, isLoggedIn, token,firstName,lastName,role }) => { // update user info from other component (Login)
        localStorage.setItem('user', JSON.stringify({ ...user, user_id, isLoggedIn, token ,firstName,lastName,role}))
        setUser((prev) => ({ ...prev, user_id, isLoggedIn, token,firstName,lastName,role }))
    }
    
    const removeUser = () => { // remove user info from other component (Logout)
        localStorage.removeItem('user');
        setUser({})
    }

    return (
        <AuthContext.Provider value={{ user, updateUser, removeUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider }