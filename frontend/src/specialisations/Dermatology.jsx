import React from 'react'
import { dermatology } from '../assets/assets'

const Dermatology = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center p-20 text-align-center'>
        <div className='bg-emerald-100 p-10'>
          <h1 className='text-5xl'>Dermatology</h1>
          <h3 className='text-3xl mt-3 ml-3'>Your Skin, Our Expertise</h3>
          <p className='px-5 mt-3'>Our dermatology department specializes in diagnosing and treating a wide range of skin conditions. Our experienced dermatologists are committed to providing personalized care and advanced treatments for all your skin health needs.</p>
        </div>

        <div className='text-align-center flex flex-col justify-between items-center mt-10 border-2 border-green-200 p-10'>
          <h2 className='m-5 text-4xl'>Available Dermatological Services</h2>
          <div>
            <h3 className='m-3 text-2xl'>1. General Dermatology</h3>
            <ul>
              <li>Skin Cancer Screening</li>
              <li>Acne Treatment</li>
              <li>Eczema Management</li>
              <li>Psoriasis Treatment</li>
            </ul>
          </div>
          <div>
            <h3 className='m-3 text-2xl'>2. Cosmetic Dermatology</h3>
            <ul>
              <li>Botox and Fillers</li>
              <li>Laser Hair Removal</li>
              <li>Skin Rejuvenation Treatments</li>
            </ul>
          </div>
          <div>
            <h3 className='m-3 text-2xl'>3. Pediatric Dermatology</h3>
            <ul>
              <li>Childhood Skin Conditions</li>
              <li>Birthmarks and Pigmented Lesions</li>
            </ul>
          </div>

        </div>

      </div>

      {dermatology.map((item, index) => {
        return (
          <div key={index} className='mt-5 flex flex-col justify-center items-center'>
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

export default Dermatology