import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardio, dental, dermatology, neurology, orthopedic } from '../assets/assets';
import { AppointmentContext } from '../context/AppointmentContext';

const Appointments = () => {
  const navigate = useNavigate();
  const [specialization, setSpecialization] = useState('');
  const [doctor, setDoctor] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState('');
  const [clk, setClk] = useState(false);

  const { appointments, setAppointments } = useContext(AppointmentContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/pages/login');
      return;
    }
  }, [navigate]);

  useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const userEmail = token ? JSON.parse(atob(token.split('.')[1])).email : '';

    const newData = {
      specialization,
      doctor,
      name,
      mobile,
      email: userEmail, // stored using login email
      date,
    };

    const updated = [...appointments, newData];
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));

    // Clear form
    setSpecialization('');
    setDate('');
    setName('');
    setDoctor('');
    setMobile('');
    setClk(true);
    console.log('New appointment added:', newData);
  };

  return (
    <div>
      <h1 className='text-5xl text-center font-bold mb-10 mt-10'>Appointments</h1>
      <div className='flex justify-center items-center min-h-screen px-4'>
        <form onSubmit={submitHandler} className='flex flex-col w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
          <label className='mb-2 text-xl font-semibold'>Select Specialization:</label>
          <select onChange={(e) => setSpecialization(e.target.value)} className='mb-4 p-2 border border-gray-300 rounded' value={specialization} required>
            <option value="">Select Specialization</option>
            <option value="cardiology">Cardiology</option>
            <option value="dental">Dental</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
          </select>

          <label className='mb-2 text-xl font-semibold'>Doctor:</label>
          <select onChange={(e) => setDoctor(e.target.value)} className='mb-4 p-2 border border-gray-300 rounded' required>
            <option value="">Select Doctor</option>
            {specialization === 'cardiology' && cardio.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
            {specialization === 'dental' && dental.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
            {specialization === 'dermatology' && dermatology.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
            {specialization === 'neurology' && neurology.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
            {specialization === 'orthopedics' && orthopedic.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
          </select>

          <label className='mb-2 text-xl font-semibold'>Name:</label>
          <input type="text" className='mb-4 p-2 border border-gray-300 rounded' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />

          <label className='mb-2 text-xl font-semibold'>Mobile Number:</label>
          <input type="tel" className='mb-4 p-2 border border-gray-300 rounded' placeholder='Enter your mobile number' value={mobile} onChange={(e) => setMobile(e.target.value)} required />

          <label className='mb-2 text-xl font-semibold'>Date:</label>
          <input type="date" className='mb-4 p-2 border border-gray-300 rounded' value={date} onChange={(e) => setDate(e.target.value)} required />

          <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
