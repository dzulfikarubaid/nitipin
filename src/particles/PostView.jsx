import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostView = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/api/post/')
      .then((res) => {
        setPosts(res.data)
        
      })
    }, [])
    const TitleTag = (prop) => {
      return (
        <h1 className=' font-bold'>{prop.children}</h1>
      )
    }
  return (
    <div className='flex justify-center items-center gap-6 mt-20 flex-wrap'>
      {posts.map((post) => (
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
            
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Apply</button>
            </div>
      ))}
    </div>
  )
}

export default PostView