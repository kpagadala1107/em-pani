import { createSlice } from '@reduxjs/toolkit';

const freelancersSlice = createSlice({
  name: 'freelancers',
  initialState: [],
  reducers: {
    setFreelancers: (state, action) => action.payload,
  },
});

export const { setFreelancers } = freelancersSlice.actions;
export default freelancersSlice.reducer;
