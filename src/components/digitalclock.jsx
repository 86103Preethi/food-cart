import React, { useState, useEffect } from 'react';
 
const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    console.log("currentTime",currentTime);
    return () => clearInterval(timer);
  }, []);
 
  const getCurrentTime = () => {
    // Format time in 12-hour format without AM/PM
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
    hours = hours % 12 || 12;
 
    return `${hours}:${minutes}:${seconds}`;
  };
 
  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentTime.toLocaleDateString(undefined, options);
  };
 
  return (
    <div className="App">
      <div className="border border-gray-700 p-10 bg-orange-100 h-80 flex flex-col gap-5 justify-center w-96">
        <h1 className="mb-5 text-2xl w-80 text-center">Digital Clock</h1>
        <div className="text-orange-400 mb-5 font-bold text-2xl w-80 text-center">
          {getCurrentTime()}{currentTime.getHours() > 12 ? ' PM ' : ' AM '}
        </div>
        <div className="text-orange-400 font-bold text-2xl w-80 text-center">
          {getCurrentDate()}
        </div>
      </div>
    </div>
  );
};
 
export default DigitalClock;