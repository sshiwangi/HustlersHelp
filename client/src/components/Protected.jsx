import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Protected({ children }) { // Protected component to check if user is logged in or not
  const { user } = useContext(AuthContext);
  console.log(user);
  if (!user.isLoggedIn) {
    return <Navigate to={'/login'} />
  }
  return children
}

export default Protected