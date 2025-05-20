import React from 'react'
import { services } from '../assets/assets'
import { NavLink } from 'react-router-dom'



const Service = () => {
  return (
    <div className="px-4 py-8 flex flex-col items-center w-full max-w-7xl mx-auto">
        <h4 className='border-gray-500 border-2 inline-block px-8'>SERVICES</h4>
       
        <h2 className='mt-5 text-center text-3xl md:text-3xl'>Feel Like Home With Best <br />Medical Care</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
       
        {services.map((item,index)=>{
            return (
                <div  key={index} className='mt-5 flex'>
                    <div className='border-2 border-black p-5 w-[25vw] flex flex-col justify-items-start items-center shadow-md hover:shadow-xl transition w-full flex-col item-center '>
                        <div>
                            <img src={item.image} alt="" className='w-60 h-50 object-cover rounded-md mb-4' />
                        </div>
                        <div> 
                            <h3 className='text-2xl text-center'>{item.name}</h3>
                            <p className='text-center'>{item.description}</p>
                            <NavLink to={item.name} className={'mt-3'}>
                                <button onClick={()=> {scrollTo(0,0)}} className='text-blue-800 cursor-pointer m-3 '>Read More</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>

    </div>
  )
}

export default Service