import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      // const text = await response.text(); // read raw text
      // console.log('Raw response:', text);
      const data = await response.json(); // this will now work

      // const data = await response.json();
      if (response.ok && data.token) {
        setMessage(data.message);
        localStorage.setItem('token', data.token); // store token
        window.location.href = '/';   // it refresh after token update because profile not reloade
        console.log("token:",data.token);
        setTimeout(()=>{

          navigate('/');  // after login which page should open
        },1000);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setMessage('Something went wrong');
    }
  };

 return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-emerald-700">
      Login
    </h2>

    {message && <p className="text-center text-red-600 mb-4">{message}</p>}

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-700 transition"
      >
        Login
      </button>
    </form>
  </div>
);

};

export default Login;
