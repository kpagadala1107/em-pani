// src/redux/formSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { saveWork } from "../redux/api"

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
    saveFormData: async (state, action) => {
      const response = await saveWork(action.payload);
      console.log("Form saved successfully:", response);
      // Updates the state with the payload (form data)
      // return { ...state, ...action.payload };
    },
    resetFormData: () => initialState, // Resets form to initial state
  },
});

export const { saveFormData, resetFormData } = jobSlice.actions;
export default jobSlice.reducer;