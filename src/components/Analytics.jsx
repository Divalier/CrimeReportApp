import React from 'react'
import Police from '../assets/Rectangle 12.png'
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 space-x-5'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[800px] mx-auto my-4' src={Police} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-600 font-bold'>IBIBAZO HHH DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your IBIBAZO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem, omnis! Eligendi debitis nobis commodi praesentium soluta repellendus nesciunt consequatur, 
            suscipit consequuntur ullam porro molestiae vero fugiat, eos numquam exercitationem quibusdam.
            </p>
        
        </div>
        </div>
      
    </div>
  )
}

export default Analytics
