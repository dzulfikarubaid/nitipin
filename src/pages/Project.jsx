import React, { useState, useEffect } from 'react'
// import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'
import Cookies from 'universal-cookie'
import axios from 'axios'
import PostView from '../particles/PostView'


const Project = () => {
  const cookies = new Cookies();
  const token = cookies.get('jwt')
  const user = jwt_decode(token)
  var name = user.id
  const data = {nama_item:"", alamat_nitiper:"", alamat_pembelian:"", perkiraan_harga_item:"", biaya_titip:"", nitiper:name}
  const [inputData, setInputData] = useState(data)
  const [error, setError] = useState([])
  const handleData = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value})
  }
  const postSubmit = (e) => {
    e.preventDefault()
    axios.post('https://nitipin.vercel.app/api/addpost/', inputData)
    .then((res) => {
      window.location.reload()
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
    <div className='mt-40 flex justify-center items-center flex-col '>
      {/* <h1>Project</h1> */}
      <p>hi, {user.name}</p>
      <form className='rounded-xl flex flex-col w-1/3 gap-4 p-4 shadow-xl self-center'>
        <label htmlFor="nama_item">Nama Item</label>
        <input
        className='bg-gray-200 px-2'
        type="text"
        name="nama_item"
        value={inputData.nama_item}
        onChange={handleData}/>
        <label htmlFor="alamat_nitiper">Alamat Nitiper</label>
        <input 
        className='bg-gray-200 px-2' 
        type="text" 
        name="alamat_nitiper" 
        value={inputData.alamat_nitiper} 
        onChange={handleData}/>
        <label htmlFor="alamat_pembelian">Alamat Pembelian</label>
        <input 
        className='bg-gray-200 px-2' 
        type="text" 
        name="alamat_pembelian" 
        value={inputData.alamat_pembelian} 
        onChange={handleData}/>
        <label htmlFor="perkiraan_harga_item">Perkiraan Harga Item</label>
        <input 
        className='bg-gray-200 px-2' 
        type="text" 
        name="perkiraan_harga_item" 
        value={inputData.perkiraan_harga_item} 
        onChange={handleData}/>
        <label htmlFor="biaya_titip">Biaya Titip</label>
        <input 
        className='bg-gray-200 px-2' 
        type="text" 
        name="biaya_titip" 
        value={inputData.biaya_titip} 
        placeholder='1000'
        onChange={handleData}/>
        <button type="submit" onClick={postSubmit}>Submit</button>
        <p>{error}</p>
      </form>
      <PostView></PostView>
    </div>
  )
}

export default Project