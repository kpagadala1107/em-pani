// src/redux/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  company: "",
  description: "",
  people: "",
  dynamicFields: [],
};

const jobSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      // Updates the state with the payload (form data)
      return { ...state, ...action.payload };
    },
    resetFormData: () => initialState, // Resets form to initial state
  },
});

export const { saveFormData, resetFormData } = jobSlice.actions;
export default jobSlice.reducer;