import React from "react";
import { Star, MailWarning, Mails } from "lucide-react";

const InboxFilters = () => {
  return (
    <div className="flex items-center gap-6">
      <button className="flex items-center gap-1 font-google-sans text-sm text-gray-400 transition hover:text-primary">
        <Mails size={15} />
        All
      </button>
      <button className="flex items-center gap-1 font-google-sans text-sm text-gray-400 transition hover:text-primary">
        <MailWarning size={15} />
        Unread
      </button>
      <button className="flex items-center gap-1 font-google-sans text-sm text-gray-400 transition hover:text-primary">
        <Star size={15} />
        Starred
      </button>
    </div>
  );
};

export default InboxFilters;
