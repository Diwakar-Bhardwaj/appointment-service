import React from 'react'
import { useState,useEffect,useContext } from 'react'

import { cardio, dental, dermatology, neurology, orthopedic } from '../assets/assets';
import { AppointmentContext } from '../context/AppointmentContext';
import MyAppointments from './MyAppointments';
import { useNavigate } from 'react-router-dom';
   
  

const Appointments = () => {
    
    const navigate=useNavigate();
    const [specialization, setSpecialization] = useState('');
    const [doctor, setDoctor] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
     useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/pages/login');
      return ;
    }
  }, [navigate]);

    const [clk,setClk] = useState(false)

    const { appointments, setAppointments } = useContext(AppointmentContext);
     useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));  // Load saved appointments into state
    }
  }, []);
    

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = { specialization, doctor, name, email, date };
        setAppointments(prev => [...prev, newData]); // save the contest
            
                // save in local storage
        const existing=JSON.parse(localStorage.getItem('appointments')) || [];
        const update=[...existing,newData];
        localStorage.setItem('appointments', JSON.stringify(update));

        setSpecialization('');
        setDate('')
        setName('')
        setDoctor('')
        setEmail('')
        console.log('New appointment added:', newData);
        setClk(true)
        
    }


  


  return (
    <div>
        <h1 className='text-5xl text-center font-bold mb-10 mt-10'>Appointments</h1>
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-col w-1/2 bg-white p-10 rounded-lg shadow-lg'>
            <label className='mb-2 text-xl font-semibold'>Select Specialization:</label>
            <select onChange={(e) => {setSpecialization(e.target.value)}} className='mb-4 p-2 border border-gray-300 rounded' value={specialization} required>
                <option value="">Select Specialization</option>
                <option value="cardiology">Cardiology</option>
                <option value="dental">Dental</option>
                <option value="dermatology">Dermatology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
            </select>
            <label className='mb-2 text-xl font-semibold'>Doctor:</label>
            <select onChange={(e)=>setDoctor(e.target.value)}className='mb-4 p-2 border border-gray-300 rounded' required>
                <option value="">Select Doctor</option>
                { specialization=== 'cardiology' ? cardio.map((item,index)=> {return (
                    <option value={item.name}>{item.name}</option>
                )}) : null}
                { specialization=== 'dental' ? dental.map((item,index)=> {return (
                    <option value={item.name}>{item.name}</option>
                )}) : null}
                { specialization=== 'dermatology' ? dermatology.map((item,index)=> {return (
                    <option value={item.name}>{item.name}</option>
                )}) : null}
                { specialization=== 'neurology' ? neurology.map((item,index)=> {return (
                    <option value={item.name}>{item.name}</option>
                )}) : null}
                { specialization=== 'orthopedics' ? orthopedic.map((item,index)=> {return (
                    <option value={item.name}>{item.name}</option>
                )}) : null}
            </select>
            <label className='mb-2 text-xl font-semibold'>Name:</label>
            <input type="text" className='mb-4 p-2 border border-gray-300 rounded' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
            <label className='mb-2 text-xl font-semibold'>Email:</label>
            <input type="email" className='mb-4 p-2 border border-gray-300 rounded' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
    
            <label className='mb-2 text-xl font-semibold'>Date:</label>
            <input type="date" className='mb-4 p-2 border border-gray-300 rounded' value={date} onChange={(e)=>setDate(e.target.value)} required />
    
            <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Book Appointment</button>
            </form>
        </div>

        
    </div>
  )
}

export default Appointments
