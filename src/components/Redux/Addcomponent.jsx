import React, { useState, useEffect } from 'react';


const Addcomponent = () => {
  const [input,setInput] = useState('');
  const [customer,setCustomer] = useState([]);


 return (
   <div className='redux'>
      <h1 className=''>React Redux</h1>
      <h1 className='underline m-10'>Add Customer</h1>
      <input  type='text' className='border p-2 w-80' placeholder='Enter names....' />
   </div>
 )
}

export default Addcomponent;