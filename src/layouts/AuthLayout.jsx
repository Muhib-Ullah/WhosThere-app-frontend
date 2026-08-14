import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-12">
        <div className="hidden md:col-span-6 md:flex items-center justify-center bg-primary">
          <h1 className="font-google-sans text-7xl font-bold text-secondary">
            Who's There?
          </h1>
        </div>
        <div className="col-span-1 flex min-h-screen items-center justify-center px-6 py-12 md:col-span-6 md:px-12 lg:px-20">
          <Outlet />
        </div>
      </div>
  );
}

export default AuthLayout