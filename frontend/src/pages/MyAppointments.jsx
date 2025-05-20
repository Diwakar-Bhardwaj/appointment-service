// import React from 'react'
// import { useState } from 'react'
// import { useContext } from 'react';
// import { AppointmentContext } from '../context/AppointmentContext';
// import Appointments from './Appointments';
//     const token = localStorage.getItem('token'); // get token from local storage
      
// const MyAppointments = () => {

//   const { appointments } = useContext(AppointmentContext);
//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
//   <div className="max-w-4xl mx-auto">
    

//     {appointments.length === 0 ? (
//       <p className="text-center text-gray-600 text-lg">No appointments booked yet.</p>
//     ) : (
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//         {appointments.map((appt, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 "
//           >
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 ">Appointment {index + 1}</h2>
//             <p className="text-gray-700 mb-1">Specialization: {appt.specialization}</p>
//             <p className="text-gray-700 mb-1">Doctor: {appt.doctor}</p>
//             <p className="text-gray-700 mb-1">Name: {appt.name}</p>
//             <p className="text-gray-700 mb-1">Email: {appt.email}</p>
//             <p className="text-gray-700">Date: {appt.date}</p>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// </div>

//   )
// }

// export default MyAppointments