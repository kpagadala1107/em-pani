import { configureStore } from '@reduxjs/toolkit';
import freelancersReducer from './freelancersSlice.js';
import jobsReducer from './jobsSlice';

export const store = configureStore({
  reducer: {
    freelancers: freelancersReducer,
    jobs: jobsReducer,
  },
});
