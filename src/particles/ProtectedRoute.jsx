import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import Cookies from 'universal-cookie'  
const ProtectedRoute = (props) => {
    const cookies = new Cookies();
    const jwt = cookies.get('jwt')
    // console.log(Auth)
    if (!jwt) {
        return(<Navigate to='/login'></Navigate>)
    }
    return props.children
  }

export default ProtectedRoute