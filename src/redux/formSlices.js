import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalDetails: {
  },
  customerDetails: {
    whatsappOptInStatus:false
  },
  productlDetails: {
  },
  yblPersonalDetails: {
  },
  yblCustomerDetails: {
    whatsappOptInStatus:false
  },
  yblProductlDetails: {
  },

};

const formSlices = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setField: (state, action) => {
      const { fieldName, value, formName } = action.payload;
      state[formName][fieldName] = value;
    },

  },
});

export const { setField } = formSlices.actions;

export default formSlices.reducer;
