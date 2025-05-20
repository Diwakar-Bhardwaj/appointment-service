import React from 'react'
import { cardio } from '../assets/assets' 
import { NavLink } from 'react-router-dom'

const Cardiology = () => {
  return (
    <div className='flex flex-col items-center justify-center p-20 text-align-center'>  
      <div className='bg-emerald-100 p-10'>
        <h1 className='text-5xl'>
          Cardiology
        </h1>
        <h2 className='text-3xl mt-3 ml-3'>Overview</h2>
        <p className='p-5'>The Cardiology Department specializes in the diagnosis, treatment, and prevention of heart-related conditions. Our expert cardiologists are dedicated to delivering advanced cardiac care through personalized treatment plans, modern diagnostic tools, and compassionate service.</p>
      </div>

      <div className='text-align-center flex justify-between items-center mt-10 border-2 border-green-200 p-10'>
      <h2 className='m-5 text-4xl'>Treatments <br /> Available</h2>
      <ul className='w-fit mx-auto' >
        <li>Coronary Artery Disease (CAD)</li>
        <li>Hypertension (High Blood Pressure)</li>
        <li>Heart Failure</li>
        <li>Arrhythmias (Irregular Heartbeat)</li>
        <li>Congenital Heart Defects</li>
        <li>Valvular Heart Disease</li>
        <li>Cardiomyopathy</li>
        <li>Atherosclerosis</li>
      </ul>
      </div>

      <div className='text-align-center flex justify-between items-center mt-10 border-2 border-green-200 p-10'>
        <ul>
        <h2 className='m-5 text-4xl'>Diagnostic Services</h2>
        <h3 className='m-3 text-2xl'>Non-Invasive Tests</h3>
        <li>Electrocardiogram (ECG / EKG)</li>
        <li>Echocardiogram</li>
        <li>Treadmill Test (TMT)</li>
        <li>Holter Monitoring</li>
        <li>Cardiac CT Scan</li>
        <li>Stress Echocardiography</li>
        <h3 className='m-3 text-2xl'>Invasive Procedures</h3>
        <li>Cardiac Catheterization</li>
        <li>Coronary Angiography</li>
        </ul>

      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
  <h2 className="text-3xl font-bold text-center text-emerald-700 my-8">Cardiology Specialists</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">      

        {cardio.map((item,index) => {
          return (
            <div key={index} className='mt-5 flex'>
              <div className='border-2 border-black p-5 w-[25vw] flex flex-col justify-items-start items-center  '>
                <div> 
                  <h3 className='text-2xl text-center '>{item.name}</h3>
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
</div>
    </div>
  )
}

export default Cardiology