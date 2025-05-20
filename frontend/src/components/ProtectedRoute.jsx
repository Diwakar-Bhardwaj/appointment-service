// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // if there's no token, redirect to login
  if (!token) {
    return <Navigate to="/pages/login" replace />;
  }

  // if token exists, render the child route
  return children;
};

export default ProtectedRoute;
