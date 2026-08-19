import React from "react";
import { Mail, Star } from "lucide-react";
//Custom Imports
import { formatTime } from "../utils/DateTime";

const MessageCard = ({ message, setSelectedMessage }) => {
  
  const messageReadClass = message.isRead ? "text-gray-400" : "text-gray-700";
  const messageStarredClass = message.isStarred ? "text-yellow-400" : "text-gray-300";

  return (
    <div className={`cursor-pointer border-b border-gray-100 px-4 py-3 transition hover:bg-gray-50 ${!message.isRead ? "bg-primary/10" : ""}`} 
        onClick={() => setSelectedMessage(message)}>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Mail size={18} strokeWidth={2} className="text-primary" />
        </div>
        <div className="min-w-0 flex-1 items-center">
          <div className="flex items-center justify-between gap-3">
            <p className={`truncate font-google-sans text-sm ${messageReadClass}`}>
              {message.messageSender}
            </p>
            <span className="shrink-0 font-google-sans text-xs text-gray-400">
              {formatTime(message.sentAt)}
            </span>
          </div>
          <p className={`mt-1 min-w-0 truncate font-google-sans text-xs ${messageReadClass}`}>
            {message.messageSubject}
          </p>
        </div>
        <button className={`shrink-0 transition ${messageStarredClass}`}>
          <Star size={17} strokeWidth={2} fill={message.isStarred ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
};

export default MessageCard;