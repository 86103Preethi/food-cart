// import React, { useEffect, useRef, useState } from 'react';

// //1. accessing and interacting with dom elements
// //2. managing focus and interaction and animations
// //3. handling timers and intervals

// const UsingRef = () => {
//   let [number, setNumber] = useState(0);  // usestate will not refresh component
//   const reference = useRef(0); // useref will not refresh component
//   const spanRef = useRef(null);
//   const focusRef = useRef(null); 


//   useEffect(() => {
//     console.log("useState triggered");
//   },[number]);

//   const handleButton = () => {
//     setNumber((n) => n + 1);
//   };

//   const handleReference = () => {
//     reference.current += 1;
//     console.log(reference.current); 
//     spanRef.current.innerText = reference.current;
//   }

//   const handleTransition = () => {
//     focusRef.current.focus();
//     focusRef.current.style.backgroundColor = 'pink';
//   }

//   return (
//     <div>
//       <button onClick={handleButton}>useState {number}</button>
//       <button onClick={handleReference}>useRef <span ref={spanRef}>0</span></button>
//       <div className='flex'>
//         <input type='text' ref={focusRef} />
//         <button onClick={handleTransition}>click</button>
//       </div>
//     </div>
//   );
// };

// export default UsingRef;



import React, { useEffect, useRef } from 'react';

const UsingRef = () => {
  const inputRef = useRef(null);     // 1. Access DOM element
  const clickCount = useRef(0);      // 2. Store mutable count (no re-render)

  useEffect(() => {
    // 3. Focus the input when component mounts
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    clickCount.current += 1; // No re-render
    console.log(`Button clicked ${clickCount.current} times`);
  };

  return (
    <div>
      <h2>Click Counter App</h2>
      <input ref={inputRef} placeholder="Auto-focused input" />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UsingRef;


// import React, { useEffect, useRef, useState } from 'react';

// const UsingState = () => {
//   const inputRef = useRef(null);
//   const [clickCount, setClickCount] = useState(0); // useState here

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleClick = () => {
//     setClickCount(prev => prev + 1); // triggers re-render
//   };

//   return (
//     <div>
//       <h2>Click Counter App (with useState)</h2>
//       <input ref={inputRef} placeholder="Auto-focused input" />
//       <button onClick={handleClick}>Click Me</button>
//       <p>You clicked {clickCount} times</p> {/* UI updates */}
//     </div>
//   );
// };

// export default UsingState;


