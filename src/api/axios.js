import Axios from "axios";
//Custom Imports
import { getToken } from "../utils/Token";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

axios.interceptors.request.use((config) => {
  const auth_token = getToken();
  if(auth_token) {
    config.headers.Authorization = `Bearer ${auth_token}` 
  }

  return config;
});

export default axios;