import React, {useState, useEffect} from 'react'
import 'react-dropdown/style.css';
import Cookies from 'universal-cookie';

const Navbar = () => {
    const [isAuth, setAuth] = useState(false)
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
  return (
    <React.Fragment>
         <div className='flex flex-col lg:justify-between items-center lg:flex-row md:justify-between md:flex-row w-full fixed py-2 px-10 top-0 bg-white'>
            {
                isAuth ? (
                    <>
                    <div className="left flex flex-row gap-8 text-center justify-center items-center">
                    <li><a href="/" className='text-xl font-bold text-center text-blue-500'>nitip.in</a></li>
                    <li><a href="/project">Find Nitiper</a></li>
                </div>
                <div className="right flex flex-row gap-6 text-center justify-center items-center">
                    <li><a href="/" >Notification</a></li>
                    <li><a href="/">Profile</a></li>
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
                    <li><a href="/project">Find Nitiper</a></li>
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
    </React.Fragment>
  )
}

export default Navbar