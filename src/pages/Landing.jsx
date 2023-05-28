import React from 'react'
import {FaBeer, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Slider from '../particles/Slider'

const Landing = () => {
  const Landingcard = (props) => {
    const{children, bgcolor, textcolor, link} = props
    return(
      <a className={`bg-${bgcolor} shadow-xl rounded-xl text-${textcolor} py-2 px-4 h-auto w-[400px]`} href={link}>{children}</a>
    )
  }
  return (
    <div className='items-center flex flex-col'>
    <div className='flex flex-row justify-center gap-[100px] px-16 mt-[40px]'>
        <div className="left w-[600px] gap-5 flex flex-col">
            <h1 className='font-extrabold text-[60px]'>There is nothing better than getting a <span className='text-blue-500 font-serif'>job</span>.</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas obcaecati eos accusamus corporis tenetur quis facere harum esse cum molestias, doloribus aperiam.
            </p>
            <a className='bg-blue-500 text-white py-2 px-4 rounded-full w-fit' href="/register">Get Started</a>
           
        </div>
        <div className="right">
        <img className='object-contain w-[400px] h-[400px]' src="lg-img.jpg" alt="" />
        </div>
    </div>
    <div className='flex flex-col gap-10 p-16 mt-[120px] text-white h-[600px] bg-blue-500 w-[1100px] shadow-2xl rounded-3xl'>
        <div className="text-right gap-5 flex flex-col w-1/2">
            <h1 className='font-extrabold text-[40px]'>The Mechanism For Getting a Project.</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas obcaecati eos accusamus corporis tenetur quis facere harum esse cum molestias, doloribus aperiam.
            </p>
        </div>
        <div className='flex flex-row gap-5 h-full w-full'>
          <Landingcard bgcolor="white" textcolor="black" link="/register">Get Started</Landingcard>
          <Landingcard bgcolor="white" textcolor="black" link="/register">Get Started</Landingcard>
          <Landingcard bgcolor="white" textcolor="black" link="/register">Get Started</Landingcard>
        </div>
    </div>
    <div className='flex flex-col gap-10 p-16 mt-[120px] text-blue-500 h-[600px] bg-white border-2 w-[1100px] rounded-3xl'>
      <div className="text-left gap-5 flex flex-row w-full">
        <div className='w-1/2'>

        </div>
        <div className='w-1/2'>
        <h1 className='font-extrabold text-[40px]'>The Mechanism For Getting a Freelancer.</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas obcaecati eos accusamus corporis tenetur quis facere harum esse cum molestias, doloribus aperiam.
        </p>
        </div>
        
      </div>
      <div className='flex flex-row gap-5 h-full w-full'>
        <Landingcard bgcolor="blue-500" textcolor="white" link="/register">Get Started</Landingcard>
        <Landingcard bgcolor="blue-500" textcolor="white" link="/register">Get Started</Landingcard>
        <Landingcard bgcolor="blue-500" textcolor="white" link="/register">Get Started</Landingcard>
      </div>

    </div>
    <div className='flex flex-col gap-10 p-16 mt-[120px] text-black h-[400px] bg-slate-200 w-[1100px] rounded-t-3xl'>
      <div className='flex flex-row-reverse gap-20'>
      <div className='flex flex-col gap-5'>
          <li><a href="">Terms of Service</a></li>
          <li><a href="">Privacy Policy</a></li>
        </div>
        <div className='flex flex-col gap-5'>
          <li><a href="">Find Project</a></li>
          <li><a href="">Find Freelancer</a></li>
          <li><a href="">Why Undefined.</a></li>
          <li><a href="">Contact Us</a></li>
          <div className='flex flex-row gap-5 mt-5'>
          <p>Follow Us</p>
          <FaInstagram style={{fontSize: '30px'}}></FaInstagram>
          <FaLinkedin style={{fontSize: '30px'}}></FaLinkedin>
          </div>
        </div>
      </div>
      
      <div className='border-t-2 border-black pt-5'>
      <p>© 2023 Undefined. All rights reserved</p>
      </div>
    </div>
    </div>
    
  )
}

export default Landing