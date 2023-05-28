import React from 'react'
import Cookies from 'universal-cookie';
import {Navigate, Outlet} from 'react-router-dom'
const Logged = (props) => {
    const cookies = new Cookies();
    const jwt = cookies.get('jwt')
    // console.log(Auth)
    if (jwt) {
        return(<Navigate to='/project'></Navigate>)
    }
    return props.children
}

export default Logged