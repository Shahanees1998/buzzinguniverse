import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('login') === 'true' || sessionStorage.getItem('login') === 'true';

  // Redirect to home page if not logged in
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
