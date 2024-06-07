import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalDetails: {
  },
  customerDetails: {
  },
};

const formSlices = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setField: (state, action) => {
      const { fieldName, value, formName } = action.payload;
      // console.log('fieldName',fieldName);
      state[formName][fieldName] = value;
    },

  },
});

export const { setField } = formSlices.actions;

export default formSlices.reducer;
