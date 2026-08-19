import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bell, Menu, X, LogOut } from "lucide-react";
import toast from "react-hot-toast";
//Custom Imports
import { removeToken } from "../utils/Token";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const NavLinkClass = ({ isActive }) => `font-google-sans text-sm transition ${ isActive ? "text-primary" : "text-gray-400 hover:text-primary" }`;

  const handleLogout = () => {
    removeToken();
    toast.success('User logged out successfully');
    navigate('/login');
  }

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="flex h-15 items-center px-6">
        <NavLink to="/dashboard">
          <img src="/logo.png" alt="Who'sThere" className="h-5 w-auto" />
        </NavLink>
        
        <div className="ml-10 hidden h-full items-center gap-10 md:flex">
          <NavLink to="/dashboard" className={NavLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/inbox" className={NavLinkClass}>
            Inbox
          </NavLink>
        </div>

        <div className="ml-auto flex items-center gap-5">
          <button className="text-gray-400 transition hover:text-primary">
            <Bell size={20} strokeWidth={1.5} />
          </button>
          <button className="flex items-center gap-2 rounded-sm px-4 py-2 font-google-sans text-sm text-white bg-secondary"
            onClick={handleLogout}>
            <LogOut size={16} />
              Log out
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 transition hover:text-primary md:hidden">
            { menuOpen ? <X size={24} /> : <Menu size={24} /> }
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink to="/dashboard" className={NavLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/inbox" className={NavLinkClass}>
              Inbox
            </NavLink>
            <NavLink to="/profile" className={NavLinkClass}>
              Profile
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;