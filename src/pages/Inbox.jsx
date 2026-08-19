import React, { useState } from "react";
import {CircleOff} from "lucide-react";
//Custom Imports
import InboxFilters from "../components/InboxFilters";
import SearchField from "../components/SearchField";
import MessageCard from "../components/MessageCard";
import MessagePreview from "../components/MessagePreview";
import Pagination from "../components/Pagination";
import useMessage from "../hooks/useMessage";

const Inbox = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const {messages, setMessages, page, setPage, totalPages, markAsRead, markAsStarred, OnDeleteMessage} = useMessage();
 
  const filteredMessages = messages.filter((messages) => { 
    let searchMatch = messages.messageSubject.toLowerCase().includes(search.toLowerCase());
    let typeMatch = filter === "All" || (filter === "Unread" && !messages.isRead) || (filter === "Starred" && messages.isStarred);
    return searchMatch && typeMatch;
  });

  const handleMessageSelect = async (message) => {
    const selectedMessage = await markAsRead(message);
    setSelectedMessage(selectedMessage);
  }

  const handleStar = async (message) => {
    const starredMessage = await markAsStarred(message);
    setSelectedMessage(starredMessage);
  }

  const handleDelete = async () => {
    const deletedMessage = await OnDeleteMessage(selectedMessage);
    setSelectedMessage(null); 
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div>
        <h1 className="font-google-sans text-4xl font-bold text-primary"> Inbox </h1>
        <p className="mt-2 font-google-sans text-md text-gray-400"> Your anonymous messages </p>
      </div>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <InboxFilters filter={filter} setFilter={setFilter} />
        <SearchField placeholder="Search" value={search} onChange={setSearch} />
      </div>
      <div className="mt-4 flex h-[calc(100vh-400px)] min-h-110 overflow-hidden rounded-sm border border-gray-300 bg-white">
        <div className="flex h-full min-h-0 w-full flex-col md:w-[38%] md:border-r md:border-gray-200">
          <div className="message-scroll min-h-0 flex-1 overflow-y-auto">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <MessageCard key={message.messageId}
                  message={message} setSelectedMessage={handleMessageSelect}/>
              ))
            ) : messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CircleOff size={26} strokeWidth={2} className="text-primary" />
                </div>
                <p className="mt-4 font-google-sans text-sm text-gray-400"> The inbox is suspiciously quiet! </p>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CircleOff size={26} strokeWidth={2} className="text-primary" />
                </div>
                <p className="mt-4 font-google-sans text-sm text-gray-400"> No {filter.toLowerCase()} messages found. </p>
              </div>
            )}
          </div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
        </div>
        <div className="hidden h-full flex-1 md:block">
          <MessagePreview selectedMessage={selectedMessage} handleStar={handleStar} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Inbox;