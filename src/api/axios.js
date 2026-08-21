import Axios from "axios";
//Custom Imports
import { getRefreshToken, getToken, removeRefreshToken, removeToken, setToken } from "../utils/Token";
import { GenerateNewAccessToken } from "../services/AuthService";

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

axios.interceptors.response.use((response) => {
  return response
}, async (error) => {
  const originalRequest = error.config;
  if(error.response?.status === 401 && !originalRequest._retry && !originalRequest.url.includes("auth/refresh")) {
    originalRequest._retry = true;

    const refreshToken = getRefreshToken();
    if(!refreshToken) {
      removeToken();
      removeRefreshToken();

      return Promise.reject(error);
    }
    try {
      const response = await GenerateNewAccessToken({refreshToken: refreshToken})
      if(response.success) {
        setToken(response.data.token)
        originalRequest.headers.Authorization = `Bearer ${response.data.token}`;

        return axios(originalRequest);
      }
    } catch (refreshError) {
      removeToken();
      removeRefreshToken();

      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
});

export default axios;