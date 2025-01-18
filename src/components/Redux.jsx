import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption } from '../slices/optionsSlice';

const Redux = () => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.options.options);
  const selectedOption = useSelector((state) => state.options.selectedOption);
  const [input, setInput] = useState([]); // To store the list of entered names
  const [currentInput, setCurrentInput] = useState(""); // For the input field value

  const handleChange = (e) => {
    dispatch(setSelectedOption(e.target.value));
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value); // Update the input field value
  };

  const handleInput = () => {
    setInput((previousData) => [...previousData, currentInput.trim()]);
    setCurrentInput(""); // Clear the input field
    
  };



  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">React Redux Dropdown</h1>
      <label htmlFor="options" className="block text-sm font-medium">Select an Option:</label>
      <select
        id="options"
        value={selectedOption}
        onChange={handleChange}
        className="mt-2 block w-full p-2 border rounded"
      >
        <option value="" disabled>-- Choose an option -- </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="mt-4 text-sm">Selected: {selectedOption || 'None'}</p>

      <div className='flex'>
        <input 
          type="text" 
          value={currentInput}
          onChange={handleInputChange}
          className="w-40 h-10 mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400" 
          placeholder="Enter the names" 
        />
        <button type="button" onClick={handleInput}>Add</button>
      </div>


      <div className="mt-4">
        <h4>Saved Inputs:</h4>
        <ul className="pl-6">
          {input.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>





    </div>
  );
};

export default Redux;
