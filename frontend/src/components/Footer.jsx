import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-10 bg-gray-200 px-8 py-12 mt-10'>
        <div className='md:w-1/3'>
            <h3 className='text-4xl'>“ The pharma is <br />advanced healthcare <br /> provider with the well <br /> trained medical <br /> professionals. </h3> 
        </div>

        <div className='md:w-1/3'>
            <h3 className='text-3xl '>Explore</h3>
            <ul className='flex flex-col mt-5 px-2 space-y-2'>
                <NavLink to='/'>
                    <li className='text-xl ' onClick={()=>scrollTo(0,0)}>Home</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='text-lg' onClick={()=>scrollTo(0,0)}>About</li>
                </NavLink>
                
                <NavLink to='/pages'>
                    <li className='text-lg' onClick={()=>scrollTo(0,0)}>Sign Up</li>  
                </NavLink>
                
                

            </ul>
        </div>

        <div className='md:w-1/3'>
            <h3 className='text-2xl md:text-3xl'>Contact Us</h3>
            <form action="" className='flex flex-col space-y-4'>
                <input className='m-3 p-3 border-2 rounded-md' type="email" placeholder='Your Email Address' />
                <input type="textarea" className='h-[15vh]' placeholder='Enter your query' /> 
                <button className='p-3 bg-blue-500 text-[#fff] hover:bg-blue-600 transition'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Footer