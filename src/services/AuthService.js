import axios from "axios";

const API_URL = "https://localhost:7141/api/"

export const LoginUser = async (data) => {
  const  response = await axios.post(`${API_URL}auth/login`, data);
  return response.data
}

export const RegisterUser = async (data) => {
  const response = await axios.post(`${API_URL}auth/register`, data);
  return response.data
}