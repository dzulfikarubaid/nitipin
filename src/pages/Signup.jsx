import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const Signup = () => {
  // const cookies = new Cookies();
  // if (cookies.get('jwt')) {
  //   window.location.href = '/project'
  // }
  const data= {email:"", password:"", name:"", c_password:""}
  const [inputData, setInputData] =useState(data)
  const [error, setError] = useState([])
  const cookie = new Cookies();
  const handleData = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value})
  }
  const SignupSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/register/', inputData, {
      headers: {
        'X-CSRFToken': cookie.get('csrftoken')
      }
    })
    .then((res) => {
      window.location.href = '/project'
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
        <label htmlFor="name">Name</label>
        <input
        className='bg-gray-200 px-2'
        name='name'
        value={inputData.name}
        onChange={handleData}/>
        <label htmlFor="email">Email</label>
        <input 
        className='bg-gray-200 px-2'
        required
        type="email" 
        name="email" 
        value={inputData.email } 
        onChange={handleData}/>
        <label htmlFor="password">Password</label>
        <input 
        className='bg-gray-200 px-2' 
        required
        type="password" 
        name="password" 
        value={inputData.password} 
        onChange={handleData}/>
        <label htmlFor="c_password">Confirm Password</label>
        <input 
        className='bg-gray-200 px-2' 
        required
        type="password" 
        name="c_password" 
        value={inputData.c_password} 
        onChange={handleData}/>
        <button onClick={SignupSubmit} type="submit">Signup</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default Signup