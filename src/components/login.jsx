import React, { useState } from 'react';
import bg from '../assets/food folder/food-bg.png';
import { ToastNotification } from './ToastNotification';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successAlert, setSuccessAlert] = useState('');
  const [failureAlert, setFailureAlert] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required.');
      return;
    }
    if (username === 'admin' && password === 'preethi') {
      setSuccessAlert('Login Successful !!');
      setUsername('');
      setPassword('');
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    } else {
      setFailureAlert('Invalid credentials');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Side with Background Image */}
      <div
        className="w-full hidden md:block relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full flex items-center justify-center px-3 border border-pink">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg z-10">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 darkPink boxColor hover:bg-pink-700 font-semibold rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <ToastNotification successAlert={successAlert} failureAlert={failureAlert} />
    </div>
  );
};

export default Login;
