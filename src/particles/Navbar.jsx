import React, {useState, useEffect} from 'react'
import 'react-dropdown/style.css';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
const Navbar = () => {
    const [notifs, setNotif] = useState([])
    const [isAuth, setAuth] = useState(false)
    const [notification, setNotification] = useState('')
    const cookies = new Cookies();
    useEffect(() => {
        const jwt = cookies.get('jwt');
        if (jwt) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);
    const Logout = () => {
        cookies.remove('jwt')
        window.location.reload()
    }
    
    const Exit = ()=>{
        setNotification('')
      }
    
    const getNotif = () => {
        const token = cookies.get('jwt')
        const user = jwt_decode(token)
        axios.get(`https://nitipin.vercel.app/api/apply-list/${user.id}/`)
        .then((res) => {
          setNotif(res.data)
          
        })
        .catch(err => {
            setNotif('')
        })
      }
    const Notification = () => { 
        return (
          <div className='flex text-justify gap-6 top-[75px] rounded-xl shadow-inner flex-col absolute w-[400px] p-6 bg-gray-200'>
            <div className='flex flex-row justify-between'>
            <h1 className='text-blue-500 font-bold'>Notification</h1>
            <button onClick={Exit} className='text-xl absolute top-2 right-6'>x</button>
            </div>
            {
            notifs.length > 0 ?
            (
                Object.values(notifs).map((notif) => (
                    <li key={notif.id_interaction}><a href="">{notif.sender} menawarkan jasa titip kepada anda</a></li>
                ))
                
            
            )
            :
            (
                <p>{notifs.length} new notification</p>
                
            )
            }
          </div>
        )
      }
      const handleNotification = () => {
        getNotif()
        setNotification(
            <Notification />
        )
    }
  return (
    <>
         <div className='flex flex-col lg:justify-between items-center lg:flex-row md:justify-between md:flex-row w-full fixed py-2 px-10 top-0 bg-white'>
            {
                isAuth ? (
                    <>
                    <div className="left flex flex-row gap-8 text-center justify-center items-center">
                    <li><a href="/" className='text-xl font-bold text-center text-blue-500'>nitip.in</a></li>
                </div>
                <div className="right flex flex-row gap-6 text-center justify-center items-center">
                    <li><a href="/dashboard">
                    Dashboard</a></li>
                    <button onClick={handleNotification}>Notification</button>
                    {notification}
                    <li><a href="/profile">Profile</a></li>
                    <button onClick={Logout} className='bg-blue-500 text-white py-2 px-4 rounded-full' >Log Out</button>
                    <div className='border-l-2 pl-6 py-2'>
                    <li><a href="">EN</a></li>
                    <li><a href="">ID</a></li>
                    </div>
                </div>
                    </>
                    
                    
                ) : (
                    <>
                    <div className="left flex flex-row gap-8 text-center justify-center items-center">
                    <li><a href="/" className='text-xl font-bold text-center text-blue-500'>nitip.in</a></li>
                    <li><a href="/about">Why nitip.in</a></li>
                </div>
                <div className="right flex flex-row gap-6 text-center justify-center items-center">
                    <li><a href="/login" >Login</a></li>
                    <li><a href="/signup" className='bg-blue-500 text-white py-2 px-4 rounded-full'>Sign Up</a></li>
                    <div className='border-l-2 pl-6 py-2'>
                    <li><a href="">EN</a></li>
                    <li><a href="">ID</a></li>
                    </div>
                </div>
                    </>
                    
                )
            }
           
        
    </div>
    </>
  )
}

export default Navbar

