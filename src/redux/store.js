import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./JobSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;