import React from 'react'
import {Outlet} from 'react-router-dom'
//Custom Imports
import Navbar from '../components/NavBar'


const DashboardLayout = () => {
    return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout