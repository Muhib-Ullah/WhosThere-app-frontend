//Custom Imports
import axios from "../api/axios";

export const SendMessage = async (shareCode, data) => {
  const response = await axios.post(`message/${shareCode}`, data);
  return response.data;
}

export const GetMessages = async () => {
  const response = await axios.get("message/getallmessages");
  return response.data;
}

export const MarkAsRead = async (messageId) => {
  const response = await axios.put(`message/${messageId}/markasread`);
  return response.data;
}

export const MarkAsStarred = async (messageId) => {
  const response = await axios.put(`message/${messageId}/togglestar`);
  return response.data;
}

export const DeleteMessage = async (messageId) => {
  const response = await axios.delete(`message/${messageId}/delete`);
  return response.data;
}