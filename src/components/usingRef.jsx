import React, { useEffect, useRef, useState } from 'react';

//1. accessing and interacting with dom elements
//2. managing focus and interaction and animations
//3. handling timers and intervals

const UsingRef = () => {
  let [number, setNumber] = useState(0);  // usestate will not refresh component
  const reference = useRef(0); // useref will not refresh component
  const spanRef = useRef(null);
  const focusRef = useRef(null); 


  useEffect(() => {
    console.log("useState triggered");
  },[number]);

  const handleButton = () => {
    setNumber((n) => n + 1);
  };

  const handleReference = () => {
    reference.current += 1;
    console.log(reference.current); 
    spanRef.current.innerText = reference.current;
  }

  const handleTransition = () => {
    focusRef.current.focus();
    focusRef.current.style.backgroundColor = 'pink';
  }

  return (
    <div>
      <button onClick={handleButton}>useState {number}</button>
      <button onClick={handleReference}>useRef <span ref={spanRef}>0</span></button>
      <div className='flex'>
        <input type='text' ref={focusRef} />
        <button onClick={handleTransition}>click</button>
      </div>
    </div>
  );
};

export default UsingRef;
