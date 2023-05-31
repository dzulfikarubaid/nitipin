import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import jwt_decode from 'jwt-decode'

const PostView = () => {
  const [search, setSearch] = useState('')
  const cookies = new Cookies();
  const token = cookies.get('jwt')
  const user = jwt_decode(token)
    const [posts, setPosts] = useState([])
    const [status, setStatus] = useState('')
    const [inputData, setInputData] = useState({
      respons: '', sender :'',nitiper:'',
    })
    useEffect(() => {
      axios.get('https://nitipin.vercel.app/api/post/')
      .then((res) => {
        setPosts(res.data)
        
      })
    }, [])
    const TitleTag = (prop) => {
      return (
        <h1 className=' font-bold'>{prop.children}</h1>
      )
    }
    const Apply = (e,nitiper, id_post) => {
      e.preventDefault()
      axios.post('https://nitipin.vercel.app/api/apply/', {
        respons: id_post,
        sender: user.name,
        nitiper: nitiper,
      })
      .then((res) => {
        setStatus('Pengajuan telah disampaikan ke nitiper')
      })
      .catch(err => {
      //  setStatus('Error Bro')
      })

    }
  return (
    <div className='flex items-center gap-6 mt-20 flex-col min-h-screen'>
        <input id='search' onFocus={(e) => {
        window.scrollTo({top: 660, behavior: 'smooth'});
      }} className='bg-gray-200 px-2 py-1 rounded' type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search'/>
      {status}
      <div className='flex flex-wrap justify-center items-center gap-6 mt-3'>
      {posts
      .sort(
        (a, b) => b.id_post - a.id_post
      )
      .filter((post) => {
        return Object.keys(post).some((key) => {
          return post[key].toString().toLowerCase().includes(search.toLowerCase())
        })
      })
      .map((post) => (
        <div className='w-[350px] flex bg-gray-100 rounded-xl  justify-center gap-3 p-6 flex-col' key={post.id_post}>
            <p>{post.nama}</p>
            <TitleTag>Nama Item</TitleTag>
            <p>{post.nama_item}</p>
            <TitleTag>Alamat Nitiper</TitleTag>
            <p>{post.alamat_nitiper}</p>
            <TitleTag>Alamat Pembelian</TitleTag>
            <p>{post.alamat_pembelian}</p>
            <TitleTag>Perkiraan Harga Item</TitleTag>
            <p>{post.perkiraan_harga_item}</p>
            <TitleTag>Biaya Titip</TitleTag>
            <p>{post.biaya_titip}</p>
            
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'type='submit' onClick={(e) => Apply(e, post.nitiper, post.id_post)} >Apply</button>
            </div>
      ))}

      </div>
      
    </div>
  )
}

export default PostView