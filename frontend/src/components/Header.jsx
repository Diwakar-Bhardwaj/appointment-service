import React from 'react'
import { assets } from '../assets/assets'



const Header = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
        <img src={assets.headerDoctor} alt=""
         className='absolute inset-0 w-full h-full object-cover opacity-40 brightness-75'/>

<div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-black">
        
            <span className='bg-emerald-400 p-5 text-xl'>Medical Professionals</span>
            <h1 className='mt-10 text-5xl'>Makes Your Health <br /> Better Will Makes <br /> Us Better</h1>
            <p className='mt-10'>This is open to everyone every day and provides primary <br /> health care and cutting-edge medicine in a central location.</p>

            <button className=' inline-block bg-blue-800 text-white px-4 py-2 text-xl mt-5  hover:text-blue-800 hover:bg-white  hover:border-blue-800 hover:border-2  '>Get Started</button>
        </div>
        
    </div> 
  )
}

export default Header