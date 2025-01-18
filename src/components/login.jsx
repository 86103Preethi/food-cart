import React, { useState } from 'react';
import foodwoman from '../images/foodFolder/foodwoman.avif';
import { ToastNotification } from './ToastNotification'; 
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate(); 

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required.');  
      return;
    }
    if (username === 'admin' && password === 'preethi') {
      setAlertMessage('Login Successful!');
      setSuccessAlert(true);
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        setIsLoggedIn(true);
      }, 1000);
    } else {
      setAlertMessage('Invalid credentials');
      setFailureAlert(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{ background: 'antiquewhite' }}>
      <div className="p-5 border flex max-w-xl w-full border-gray-300 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className='w-full'>
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {error && <p className="text-center text-red-500 mb-4">{error}</p>}
          <button type="submit" className="w-full py-3 darkPink boxColor text-white font-semibold rounded-lg hover:darkPink focus:outline-none focus:ring-2">
            Login
          </button>
        </form>
        <div className="flex justify-center p-2 w-full">
          <img src={foodwoman} alt='foodie' className='rounded-lg' style={{ width: '400px', height: '365px' }} />
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastNotification 
        successAlert={successAlert} 
        failureAlert={failureAlert} 
        alertMessage={alertMessage} 
        setSuccessAlert={setSuccessAlert} 
        setFailureAlert={setFailureAlert} 
        setAlertMessage={setAlertMessage} 
      />
    </div>
  );
};

export default Login;
