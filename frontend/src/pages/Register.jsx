
import React, { useState } from 'react';
import { registerUser } from '../api';
import { NavLink ,useNavigate} from 'react-router-dom';


const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate=useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      setMessage(res.data.message);
      console.log('Registration successful:', res.data);
      setForm({ name: '', email: '', password: '' });
      setTimeout(()=>{
        navigate('/pages/login');
      },1200);
    } catch (err) {
      console.error('Registration error:', err.response?.data?.message || err);
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mt-0">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">Register</h2>
        {message && (
          <p className="mb-4 text-center text-red-600 font-medium">{message}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="mob"
            placeholder="Contact Number"
            value={form.mob}
            onChange={handleChange}
            required
            pattern="\d{10}"
           title="Please enter exactly 10 digits"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-white hover:text-blue-800 hover:border-blue-800 hover:border-2 transition"
          >
            Register
          </button>
          <NavLink to="/pages/login">
            <p className="text-center text-blue-600 mt-4 hover:underline">
              Already have an account? Login here
            </p>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
