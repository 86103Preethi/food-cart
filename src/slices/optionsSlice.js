// slices/optionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    selectedOption: '', // Store the selected option
    options: ['Option 1', 'Option 2', 'Option 3'], // Available options
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload; // Update the selected option
    },
  },
});
export const { setSelectedOption } = optionsSlice.actions;

export default optionsSlice.reducer;
