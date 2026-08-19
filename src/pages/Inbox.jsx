import React from "react";
import { Star, Mail, Trash2, Check, CircleOff } from "lucide-react";
import { useState, useEffect } from "react";
import toast from 'react-hot-toast';
//Custom Imports
import InboxFilters from "../components/InboxFilters";
import SearchField from "../components/SearchField";
import MessageCard from "../components/MessageCard";
import MessagePreview from "../components/MessagePreview";
import { GetMessages, MarkAsRead, MarkAsStarred, DeleteMessage } from "../services/MessageService";

const Inbox = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await GetMessages();
        if (response.success) {
          setMessages(response.data);
        }
      } catch (error) {
        toast.error(error.response.data?.message);
      }
    }
    
    loadMessages();
  }, []);

  //Message filteration based on search input and messagetype filter
  const filteredMessages = messages.filter((messages) => { 
    //handle search input filteration
    let searchMatch = messages.messageSubject.toLowerCase().includes(search.toLowerCase());
    //handle message type filteration
    let typeMatch = filter === "All" || (filter === "Unread" && !messages.isRead) || (filter === "Starred" && messages.isStarred);
    return searchMatch && typeMatch;
  });

  const handleMessageSelect = async (message) => {
    setSelectedMessage(message)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div>
        <h1 className="font-google-sans text-4xl font-bold text-primary">
          Inbox
        </h1>
        <p className="mt-2 font-google-sans text-md text-gray-400">
          Your anonymous messages
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <InboxFilters filter={filter} setFilter={setFilter} />
        <SearchField placeholder="Search" value={search} onChange={setSearch} />
      </div>
      <div className="mt-4 flex h-[calc(100vh-360px)] min-h-110 overflow-hidden rounded-sm border border-gray-300 bg-white">
        <div className="message-scroll h-full w-full overflow-y-auto md:w-[38%] md:border-r md:border-gray-200">
          {filteredMessages.length > 0 ? (filteredMessages.map((message) => (
              <MessageCard key={message.messageId}
                message={message} setSelectedMessage={setSelectedMessage} />
            ))) : messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <CircleOff size={26} strokeWidth={2} className="text-primary"/>
                  </div>
                  <p className="mt-4 font-google-sans text-sm text-gray-400">
                    The inbox is suspiciously quiet!
                  </p>
                </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CircleOff size={26} strokeWidth={2} className="text-primary"/>
                </div>
                <p className="mt-4 font-google-sans text-sm text-gray-400">
                  No {filter.toLowerCase()} messages found.
                </p>
              </div>
            )}
        </div>
        <div className="hidden h-full flex-1 md:block">
          <MessagePreview selectedMessage={selectedMessage} />
        </div>
      </div> 
    </div>
  );
};

export default Inbox;