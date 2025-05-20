import React, { useState ,useE} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [form, setForm] = useState({ email: '', oldpassword:'',newPassword: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

   

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/procted/update', {
        method: 'POST',   // sending data to server backend 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      // const text = await response.text(); // read raw text
      // console.log('Raw response:', text);
      const data = await response.json(); // this will now work

      // const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setTimeout(()=>{

          navigate('/pages/login');  // after login which page should open
        },1000);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(' error:', err);
      setMessage('Something went wrong');
    }
  };

 return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-emerald-700">
      Change Password
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
        name="oldpassword"
        placeholder="Old Password"
        value={form.oldpassword}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="password"
        name="password"
        placeholder="New Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-700 transition"
      >
        Change Password
      </button>
    </form>
  </div>
);
}

export default Login;
