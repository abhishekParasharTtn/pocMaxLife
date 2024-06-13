import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalDetails: {
    gender:null,
    firstName:null,
    lastName:null,
    dob:null
  },
  customerDetails: {
    mobileNumber:false,
    nationality:null,
    residentialStatus:null,
    email:null
  },
  productDetails: {
    gender:null,
    firstName:null,
    lastName:null,
    dob:null,
    productName:null,
    premiumType:null,
    premiumPaymentTerm:null,
    policyTerm:null,
    modeOfPayment:null
  },
  yblPersonalDetails: {
  },
  yblCustomerDetails: {
    whatsappOptInStatus:false
  },
  yblProductDetails: {
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
