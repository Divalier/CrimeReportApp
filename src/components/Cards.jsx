import React from 'react'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-32 bg-white justify-between'>
       <div className="flex items-center  py-6 justify-center mt-4">
    <span className="w-[100px] border-b border-blue-600 border-2 "></span>

    <a
      href="#"
      className="text-xl text-center text-blue-600 font-bold uppercase dark:text-gray-400 hover:underline"
    >
      About Us
    </a>

  </div>
      <div className='max-w-[1240px] max-auto md:grid grid-cols-3 gap-8'>
       <div className='w-full shadow-xl bg-blue-500 flex flex-col p-4 my-4 rounded-log hover:scale-105 duration-300'>
      
         <h2 className='text-2xl font-bold text-center py-8'>Police</h2>
         <p className='text-center text-4xl font-bold'>Police Names</p>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Peter</p>
          <p className='py-2 border-b mx-8'>James</p>
          <p className='py-2 border-b mx-8'>Donard</p>
         </div>
       </div>

       <div className='w-full shadow-xl bg-blue-500 flex flex-col p-4 md:my-0 my-8 rounded-log hover:scale-105 duration-300'>
      
       <h2 className='text-2xl font-bold text-center py-8'>Medical Care</h2>
         <p className='text-center text-4xl font-bold'></p>
         <div className='text-center font-medium'>
         <p className='text-center text-4xl font-bold'>Doctor's Name</p>
          <p className='py-2 border-b mx-8'>Lucy</p>
          <p className='py-2 border-b mx-8'>Menelas</p>
          <p className='py-2 border-b mx-8'>Kumal</p>
         </div>
       
       </div>

       <div className='w-full shadow-xl bg-blue-500 flex flex-col p-4 my-4 rounded-log hover:scale-105 duration-300'>
       
       <h2 className='text-2xl font-bold text-center py-8'>Lawyer</h2>
         <p className='text-center text-4xl font-bold'>Lawyer Names</p>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>John</p>
          <p className='py-2 border-b mx-8'>Samil</p>
          <p className='py-2 border-b mx-8'>Mcain</p>
         </div>
        
       </div>
       
      </div>
    </div>
  )
}

export default Cards
