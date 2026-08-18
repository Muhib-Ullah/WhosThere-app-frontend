import React from "react";
import { MailOpen, Check, Trash2, Star } from "lucide-react";

const MessagePreview = ({ selectedMessage }) => {
  return (
    <div className="h-full">
      {selectedMessage ? (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
            <div>
              <p className="font-google-sans text-md font-medium text-primary">
                {selectedMessage.sender}
              </p>
              <p className="mt-1 font-google-sans text-xs text-gray-400">
                Received {selectedMessage.createdAt}
              </p>
            </div>

            <button
              className={`transition ${
                selectedMessage.isStarred
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              <Star
                size={21}
                strokeWidth={1.7}
                fill={
                  selectedMessage.isStarred
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
          </div>
          <div className="message-scroll flex-1 overflow-y-auto px-6 py-8">
            <div>
              <p className="font-google-sans text-sm font-medium uppercase tracking-wide text-secondary">
                Subject:
              </p>
              <h2 className="mt-2 font-google-sans text-xl text-primary">
                {selectedMessage.messageSubject}
              </h2>
            </div>
            <div className="mt-8">
              <p className="max-w-2xl whitespace-pre-line font-google-sans leading-7 text-gray-400 text-sm text-justify">
                {selectedMessage.message}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-gray-300 px-6 py-4">
            {!selectedMessage.isRead && (
              <button className="flex items-center gap-2 rounded-sm  px-4 py-2 font-google-sans text-sm text-white bg-primary">
                <Check size={16} />
                Mark as read
              </button>
            )}
            <button className="flex items-center gap-2 rounded-sm px-4 py-2 font-google-sans text-sm text-white bg-secondary">
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <MailOpen size={26} strokeWidth={2} className="text-primary"/>
          </div>
          <p className="mt-4 font-google-sans text-md font-medium text-primary">
            Select a message
          </p>
          <p className="mt-1 max-w-xs font-google-sans text-sm text-gray-400">
            Choose a message from your inbox to view its content here.
          </p>
        </div>
      )}
    </div>
  );
};

export default MessagePreview;