import React from "react";
import { Mail, Star } from "lucide-react";

const MessageCard = ({ message }) => {
  
  const messageReadClass = message.isRead ? "text-gray-400" : "text-gray-700";
  const messageStarredClass = message.isStarred ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400";

  return (
    <div
      className={`cursor-pointer border-b border-gray-100 px-4 py-5 transition hover:bg-gray-50 ${
        !message.isRead ? "bg-gray-50" : ""
      }`} >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
          <Mail size={18} strokeWidth={2} className="text-secondary" />
        </div>
      
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className={`truncate font-google-sans text-sm ${messageReadClass}`}>
              {message.sender}
            </p>
            <span className="shrink-0 font-google-sans text-xs text-gray-400">
              {message.createdAt}
            </span>
          </div>
          <p className={`mt-1 truncate font-google-sans text-sm ${messageReadClass}`}>
            {message.messageSubject}
          </p>
        </div>

        <button className={`shrink-0 transition ${messageStarredClass}`}>
          <Star size={17} strokeWidth={1.8} fill={message.isStarred ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
};

export default MessageCard;