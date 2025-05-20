import React from 'react'
import { dental } from '../assets/assets'

const Dental = () => {
  return (
    <div className='flex flex-col items-center justify-center p-20 text-align-center'>
      <div className='bg-emerald-100 p-10'>
        <h1 className='text-5xl'>Dental Care & Services</h1>
        <h3 className='text-3xl mt-3 ml-3'>Your Smile, Our Priority</h3>
        <p className='px-5 mt-3'>We understand the importance of oral health and a confident smile. Our dental section connects you with trusted and experienced dentists to address everything from routine check-ups to specialized treatments.</p>
      </div>

      <div className='text-align-center flex flex-col justify-between items-center mt-10 border-2 border-green-200 p-10'>
        <h2 className='m-5 text-4xl'>Available Dental Services</h2>
        <div>
          <h3 className='m-3 text-2xl'>1. General Dentistry</h3>
          <ul>
            <li>Dental Check-ups</li>
            <li>Teeth Cleaning (Scaling & Polishing)</li>
            <li>Cavity Fillings</li>
            <li>Tooth Extractions</li>
          </ul>
        </div>
        <div>
          <h3 className='m-3 text-2xl'>2. Cosmetic Dentistry</h3>
          <ul>
            <li>Teeth Whitening</li>
            <li>Dental Veneers</li>
            <li>Smile Makeovers</li>
          </ul>
        </div>
        <div>
          <h3 className='m-3 text-2xl'>3. Orthodontics</h3>
          <ul>
          <li>Braces (Metal/Ceramic)</li>
          <li>Invisible Aligners (e.g., Invisalign)</li>
          <li>Retainers</li>
          </ul>
        </div>
      </div>

      {dental.map((item, index) => {
        return (
          <div key={index} className='mt-5 flex'>
            <div className='border-2 border-black p-5 w-[25vw] flex flex-col justify-items-start items-center'>
              <div>
                <h3 className='text-2xl text-center'>{item.name}</h3>
                <p className='text-center'>{item.specialization}</p>
                <p className='text-center'>{item.experience}</p>
                <p className='text-center'>{item.hospital}</p>
                <p className='text-center'>{item.contact.phone}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Dental