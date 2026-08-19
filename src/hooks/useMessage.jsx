import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
//Custom Imports
import { GetMessages, MarkAsRead, MarkAsStarred, DeleteMessage } from "../services/MessageService";

const useMessage = () => {
  const [messages, setMessages] = useState([]);
  //Fetch Messages
  const fetchMessages = async () => {
    try {
      const response = await GetMessages();
      if (response.success) {
        setMessages(response.data);
      }
    } catch (error) {
        toast.error(error.response.data?.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  },  [])

  //Mark As Read
  const markAsRead = async (message) => {
    if(message.isRead) { return message }
    try {
      const response = await MarkAsRead(message.messageId);
      if (response.success) {
        const updatedMessage = {...message, ...response.data};
        setMessages((prevMessages) => 
          prevMessages.map((prevMessage) => 
            prevMessage.messageId === message.messageId ? updatedMessage : prevMessage
          )
        );

        return updatedMessage;
      }
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  };

  //Mark As Starred
  const markAsStarred = async (message) => {
    try {
      const response = await MarkAsStarred(message.messageId);
      if(response.success) {
        const updatedMessage = {...message, ...response.data};
        setMessages((prevMessages) => 
          prevMessages.map((prevMessage) => 
            prevMessage.messageId === message.messageId ? updatedMessage : prevMessage
          )
        );

        return updatedMessage;
      }
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  };

  //Delete Message
  const OnDeleteMessage = async (message) => {
    try {
      const response = await DeleteMessage(message.messageId);
      if(response.success) {
        setMessages((prevMessages) => 
          prevMessages.filter((prevMessage) => 
            prevMessage.messageId !== message.messageId
          )
        );
      }
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  }

  return {messages, setMessages, markAsRead, markAsStarred, OnDeleteMessage}
}

export default useMessage