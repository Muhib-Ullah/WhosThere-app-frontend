import React, { useContext } from "react";
import { Mail, MailOpen, Eye } from "lucide-react";
//Custom Imports 
import ShareLink from "../components/ShareLink";
import StatsCard from "../components/StatsCard";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { AuthUser } = useContext(AuthContext);
  const link = `${import.meta.env.VITE_APP_URL}/${AuthUser?.userName}/${AuthUser?.shareCode}`;
  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col px-6 py-8">
      <div>
        <h1 className="font-google-sans text-4xl font-bold text-gray-400">
          Hello, <span className="text-primary">{AuthUser?.userName}</span> 
        </h1>
        <p className="mt-2 font-google-sans text-md text-gray-400">
          Here's what's going on while you were gone.
        </p>
      </div>
      <div className="mt-8">
        <ShareLink personalLink={link} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total Messages"
          value={24}
          description="Messages received"
          icon={Mail} />
        <StatsCard
          title="Unread Messages"
          value={8}
          description="Waiting for you"
          icon={MailOpen} />
        <StatsCard
          title="Profile Views"
          value={137}
          description="People viewed your profile"
          icon={Eye} />
      </div>
      <p className="mt-auto pt-8 text-center font-google-sans text-xs text-gray-400">
        © 2026 Who'sThere. All rights reserved.
      </p>
    </div>
  );
};

export default Dashboard;