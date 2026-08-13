import React from "react";
import ShareLink from "../components/ShareLink";

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div>
        <h1 className="font-google-sans text-4xl font-bold text-gray-400">
          Hello, <span className="text-primary">User!</span> 
        </h1>
        <p className="mt-2 font-google-sans text-md text-gray-400">
          Here's what's going on while you were gone.
        </p>
      </div>
      <div className="mt-8">
        <ShareLink personalLink="https://whosthere.app/u/user123" />
      </div>
    </div>
  );
};

export default Dashboard;