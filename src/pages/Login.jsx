import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const Login = () => {
  const data= {email:"", password:""}
  const [inputData, setInputData] =useState(data)
  const [error, setError] = useState([])
  const cookie = new Cookies();
  const handleData = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value})
  }
  const LoginSubmit = (e) => {
    e.preventDefault()
    
    axios.post('https://nitipin.vercel.app/api/login/', inputData, {
      headers: {
        'X-CSRFToken': cookie.get('csrftoken')
      }
    })
    .then((res) => {
      const jwt = res.data.jwt
      const cookies = new Cookies();
      cookies.set('jwt', jwt)
      window.location.href = '/project'
      setError('Login Succesfull')
    })
    .catch(err => {
      if (err.response && err.response.data) {
        // Menangani error dari API
        const errorValues = Object.values(err.response.data);
        const firstError = errorValues[0];
        setError(firstError);
      } else {
        setError('Error occurred');
      }
    })
    }
    
  return (
    <div className='mt-40 flex justify-center items-center'>
      <form className='flex flex-col w-1/3 gap-4 p-4 shadow-xl self-center'>
        <label htmlFor="email">Email</label>
        <input 
        className='bg-gray-200 px-2 rounded-xl'
        required
        type="email" 
        name="email" 
        value={inputData.email } 
        onChange={handleData}/>
        <label htmlFor="password">Password</label>
        <input 
        className='bg-gray-200 px-2 rounded-xl' 
        required
        type="password" 
        name="password" 
        value={inputData.password} 
        onChange={handleData}/>
        <button className='bg-blue-500 px-2 rounded-xl text-white' onClick={LoginSubmit} type="submit">Login</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default Login