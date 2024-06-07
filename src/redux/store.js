import { configureStore } from '@reduxjs/toolkit';
import formSlicesReducer from './formSlices';

const store = configureStore({
  reducer: {
    forms: formSlicesReducer,
  },
});

export default store;