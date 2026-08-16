import React, { useContext } from "react";
//Custom Imports 
import ShareLink from "../components/ShareLink";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { AuthUser } = useContext(AuthContext);
  const link = `${import.meta.env.VITE_APP_URL}/u/${AuthUser?.shareCode}`;
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
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
    </div>
  );
};

export default Dashboard;