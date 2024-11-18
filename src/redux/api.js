// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/users", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const saveWork = async (formData) => {
  try {
    const response = await api.post("/save-work", formData); // Replace `/save-data` with your endpoint
    // const response = await api.get("/get-work"); 
    return response.data;
  } catch (error) {
    console.error("Error saving form data:", error);
    throw error;
  }
};
