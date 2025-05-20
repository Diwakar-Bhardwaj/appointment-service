import axios from 'axios';

const API = axios.create({
  baseURL: 'https://appointment-service-1.onrender.com/api'
});

export const registerUser = (formData) => API.post('/auth/register', formData);
