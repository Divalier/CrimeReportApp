import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Outlet, Link } from 'react-router-dom'
function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center z-40 sticky  overflow-hidden h-24 mx-w-[1240px] mx-auto px-4'>
   
      <Link className='w-full text-3xl font-bold text-blue-600' to="/">Crime Report System App</Link>
      <ul className='hidden md:flex text-2xl'>
        <Link className='p-4 hover:text-blue-600 text-black  scale-105 duration-300' to="/">Home</Link>
        <Link className='p-4 hover:text-blue-600 text-black    scale-105 duration-300'>About</Link>
        <Link className='p-4 hover:text-blue-600 text-black  scale-105 duration-300' to="/report">Report</Link>
        <Link className='p-4 bg-blue-600  hover:bg-blue-400 text-black   scale-105 duration-300 font-medium rounded-lg' to="/signIn">Register</Link>
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed top-0 left-0 w-[60%] h-full border-r' : 'fixed left-[-100%] ease-in-out duration-500'} >
      
        <ul className='pt-24 uppercase'>
        <Link className='p-4 hover:text-blue-600 scale-105 duration-300 font-medium rounded-lg'>Home</Link>
        <Link className='p-4 hover:text-blue-600 scale-105 font-medium duration-300'>About</Link>
        <Link className='p-4 hover:text-blue-600 scale-105 font-medium duration-300'>Report</Link>
        <Link className='p-4 bg-blue-600  hover:bg-blue-400 scale-105 duration-300 font-medium rounded-lg'>Register</Link>
        </ul>
        <Outlet/>
      </div>
    </div>
  )
}

export default Navbar;
