import React, { Children } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../component/LoadingSpinner'

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return(
            <LoadingSpinner/>
        )
    }
    if(user){
        return children
    }
  return (
    <Navigate to={'/signup'} state={{from: location}} replace></Navigate>

)
}

export default PrivateRouter