import React from "react";
import { Star, Mail, Trash2, Check } from "lucide-react";
import { useState } from "react";
//Custom Imports
import InboxFilters from "../components/InboxFilters";
import SearchField from "../components/SearchField";
import MessageCard from "../components/MessageCard";
import MessagePreview from "../components/MessagePreview";

const Inbox = () => {
  const messages = [
  {
    id: 1,
    sender: "Anonymous",
    messageSubject: "You're such a genuine person. I really admire how you treat everyone around you.",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",

    createdAt: "2 min ago",
    isRead: false,
    isStarred: false,
  },
  {
    id: 2,
    sender: "Anonymous",
    messageSubject: "You have such a kind heart. Never change who you are.",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    createdAt: "1 hour ago",
    isRead: true,
    isStarred: true,
  },
  {
    id: 3,
    sender: "Anonymous",
    messageSubject: "You inspire more people than you think. Keep doing what you're doing!",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    createdAt: "3 hours ago",
    isRead: false,
    isStarred: false,
  },
  {
    id: 4,
    sender: "Anonymous",
    messageSubject: "We should definitely hang out sometime! You seem like a really cool person.",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    createdAt: "Yesterday",
    isRead: true,
    isStarred: false,
  },
  {
    id: 5,
    sender: "Anonymous",
    messageSubject: "I honestly think you're one of the most interesting people I know.",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    createdAt: "Yesterday",
    isRead: true,
    isStarred: true,
  },
  {
    id: 6,
    sender: "Anonymous",
    messageSubject: "Someone really appreciates everything you do, even if they don't say it.",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    createdAt: "2 days ago",
    isRead: false,
    isStarred: false,
  },
  {
    id: 7,
    sender: "Anonymous",
    messageSubject: "You always know how to make people feel comfortable around you.",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    createdAt: "3 days ago",
    isRead: true,
    isStarred: false,
  },
  ];
  //State Management
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  //Message filteration based on search input and messagetype filter
  const filteredMessages = messages.filter((messages) => { 
    //handle search input filteration
    let searchMatch = messages.messageSubject.toLowerCase().includes(search.toLowerCase());
    //handle message type filteration
    let typeMatch = filter === "All" || (filter === "Unread" && !messages.isRead) || (filter === "Starred" && messages.isStarred);
    return searchMatch && typeMatch;
  });

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
          {filteredMessages.map((message) => (
            <MessageCard key={message.id} message={message} setSelectedMessage={setSelectedMessage} />
          ))}
        </div>
        <div className="hidden h-full flex-1 md:block">
          <MessagePreview selectedMessage={selectedMessage} />
        </div>

      </div> 
    </div>
  );
};

export default Inbox;