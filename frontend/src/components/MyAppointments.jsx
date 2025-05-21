import React, { useEffect, useState, useContext } from 'react';
import { AppointmentContext } from '../context/AppointmentContext';

const MyAppointments = () => {
  const { appointments: contextAppointments } = useContext(AppointmentContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (contextAppointments.length > 0) {
      setAppointments(contextAppointments);
    } else {
      const stored = localStorage.getItem('appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      }
    }
  }, [contextAppointments]);

  const cancelAppointment = (indexToRemove) => {
    const updated = appointments.filter((_, i) => i !== indexToRemove);
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 sm:p-8 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-700">
          My Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-600 text-base sm:text-lg">
            No appointments booked yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {appointments.map((appt, index) => (
              <li
                key={index}
                className="border p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Specialization:</span> {appt.specialization}
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Doctor:</span> {appt.doctor}
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Name:</span> {appt.name}
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Contact:</span> {appt.mobile}
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Date:</span> {appt.date}
                </p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm sm:text-base"
                  onClick={() => cancelAppointment(index)}
                >
                  Cancel Appointment
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
