//Custom Imports
import axios from "../api/axios";

export const LoginUser = async (data) => {
  const  response = await axios.post("auth/login", data);
  return response.data
}

export const RegisterUser = async (data) => {
  const response = await axios.post("auth/register", data);
  return response.data
}

export const GetUserDetails = async () => {
  const response = await axios.get("auth/getuserdetails");
  return response.data
}

export const GenerateNewAccessToken = async (data) => {
  const response = await axios.post('auth/refresh', data);
  return response.data;
}

export const logoutUser = async (data) => {
  const response = await axios.post('auth/logout', data);
  return response.data;
}