import React from "react";
import { Star, MailWarning, Mails } from "lucide-react";

const InboxFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center gap-6">
      <button className={`flex items-center gap-1 font-google-sans text-sm text-gray-400 transition hover:text-primary
        ${filter === "All" ? "text-primary" : "text-gray-400"}`}
        onClick={() => setFilter("All")}>
        <Mails size={15} />
        All
      </button>
      <button className={`flex items-center gap-1 font-google-sans text-sm text-gray-400 transition hover:text-primary
        ${filter === "Unread" ? "text-primary" : "text-gray-400"}`}
        onClick={() => setFilter("Unread")}>
        <MailWarning size={15} />
        Unread
      </button>
      <button className={`flex items-center gap-1 font-google-sans text-sm text-gray-400 transition hover:text-primary
        ${filter === "Starred" ? "text-primary" : "text-gray-400"}`}
        onClick={() => setFilter("Starred")}>
        <Star size={15} />
        Starred
      </button>
    </div>
  );
};

export default InboxFilters;
