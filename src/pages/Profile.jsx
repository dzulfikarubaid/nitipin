import React, {useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import jwt_decode from 'jwt-decode'

const Profile = () => {
  const cookie = new Cookies()
  const token = cookie.get('jwt')
  const user = jwt_decode(token)
  const [status, setStatus] = useState([])
  const data = {name:user.name}
  const [inputData, setInputData]=useState(data)
  const handleData = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
      axios.put(`https://nitipin.vercel.app/api/profile/${user.id}/`, inputData)
    .then((res) => {
      console.log(res.data)
      if (inputData.name === user.name){
        setStatus('Update Succesfull')
      }
      else{
        if (res.data.jwt){
          cookie.set('jwt', res.data.jwt)
          setStatus('Update Succesfull')
        }
        else{
          setStatus('Please click once again!')
        }

      } 
    })
    .catch(err => {
      setStatus('Please click once again!')
    })
    
      
  }


  function Input(props){
    const{type, name, placeholder, value, defaultValue, onChange, children} = props
    return (
      <>
      <label htmlFor={name}>{children}</label>
      <input type={type} name={name} placeholder={placeholder} className='bg-gray-200 px-2 py-1 rounded-xl' value={value} defaultValue={defaultValue} onChange={onChange}/>
      </>
    )
  }

  return (
    <div className='mt-40 flex justify-center items-center'>
      <form className='flex flex-col w-[500px] gap-4 p-4'>
      <label htmlFor="name">Name</label>
      <input
        className='bg-gray-200 px-2 py-1 rounded-xl'
        type="text"
        name="name"
        value={inputData.name}
        onChange={handleData}/>
        
        
        <button className='bg-blue-500 px-2 py-2 rounded-xl text-white hover:bg-blue-700' onClick={handleSubmit} type="submit">Update</button>
        <p>{status}</p>
      </form>

    </div>
  )
}

export default Profile