//Custom Imports
import axios from "../api/axios";

export const SendMessage = async (shareCode, data) => {
  const response = await axios.post(`message/${shareCode}`, data);
  return response.data;
}