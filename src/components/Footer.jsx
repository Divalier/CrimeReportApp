import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'
function Footer() {
  return (
    <div className='w-full flex justify-center   bg-[#377D97]'> 
    <div className="flex w-full px-10 py-8 flex-col justify-center items-center">
        <div>
        <h1 className=' text-3xl py-2 font-bold text-white'> Quick link </h1> 
        </div> 
        <div className=" w-full  border-white border">
            </div>
            {/* links   */}
             <div className="flex flex-row w-full py-2 justify-around text-white">
              <div>
                <div className="text-2xl font-bold">About</div>
              <li>Blogs</li>
              <li>team members</li>
              </div>
              <div>
                <div className="text-2xl font-bold">More info</div>
              <li>+250788888888</li>
              <li>crime@gmail.com</li>
              </div>
        </div> 
        {/* icons */}
           <div className=" flex flex-row py-2 w-full justify-between items-center">
            <div className=" w-1/3  border-white border"></div> 
            <div className="w-1/3">
              <div className='flex flex-row justify-around'>
            <FaFacebookSquare size={30} color="white"/>
            <FaInstagram size={30} color="white"/>
            <FaTwitterSquare size={30} color="white"/>
            <FaGithubSquare size={30} color="white"/>
            <FaDribbbleSquare size={30} color="white"/>
         </div>
         </div>
          <div className=" w-1/3 border-white border"> </div>
           </div>
           <div className="text-white">
             <p> <span> &copy; Copyright 2023 Crime Report. All rights reserved</span></p>

            
           </div>
         </div>
    </div>
  )
}

export default Footer
