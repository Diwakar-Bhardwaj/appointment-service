import React from 'react'
import { orthopedic } from '../assets/assets'

const Orthopedics = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center p-20 text-align-center'>
        <div className='bg-emerald-100 p-10'>
          <h1 className='text-5xl'>Orthopedics</h1>
          <h3 className='text-3xl mt-3 ml-3'>Your Bones, Our Expertise</h3>
          <p className='px-5 mt-3'>Our orthopedics department specializes in diagnosing and treating a wide range of musculoskeletal conditions. Our experienced orthopedic surgeons are committed to providing personalized care and advanced treatments for all your bone and joint health needs.</p>
        </div>

        <div className='text-align-center flex flex-col justify-between items-center mt-10 border-2 border-green-200 p-10'>
          <h2 className='m-5 text-4xl'>Available Orthopedic Services</h2>
          <div>
            <h3 className='m-3 text-2xl'>1. General Orthopedics</h3>
            <ul>
              <li>Fracture Management</li>
              <li>Joint Replacement Surgery</li>
              <li>Sports Medicine</li>
              <li>Arthroscopy</li>
            </ul>
          </div>
          <div>
            <h3 className='m-3 text-2xl'>2. Pediatric Orthopedics</h3>
            <ul>
              <li>Childhood Bone Disorders</li>
              <li>Growth Plate Injuries</li>
            </ul>
          </div>
          <div>
            <h3 className='m-3 text-2xl'>3. Spine Surgery</h3>
            <ul>
              <li>Spinal Fusion</li>
              <li>Minimally Invasive Spine Surgery</li>
            </ul>
          </div>

        </div>

      </div>

      {orthopedic.map((item, index) => {
        return (
          <div key={index} className='mt-5 flex flex-col justify-center items-center'>
            <div className='border-2 border-black p-5 w-[25vw] flex flex-col justify-items-start items-center'>
              <div>
                <h3 className='text-2xl text-center'>{item.name}</h3>
                <p className='text-center'>{item.specialization}</p>
                <p className='text-center'>{item.experience} years of experience</p>
                <p className='text-center'>{item.hospital}</p>
                <p className='text-center'>{item.contact.phone}</p>
              </div>
            </div>
          </div>
        )})}
    </div>
  )
}

export default Orthopedics