import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo and Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-bold text-gray-800">
            <span className="inline-block w-5 h-5 bg-black mr-1 rounded-sm" />
            SkillHub
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <Link to="/find-talent" className="hover:text-blue-600">
              Find Talent
            </Link>
            <Link to="/find-work" className="hover:text-blue-600">
              Find Work
            </Link>
            <Link to="/why-skillhub" className="hover:text-blue-600">
              Why SkillHub?
            </Link>
            <Link to="/enterprise" className="hover:text-blue-600">
              Enterprise
            </Link>
          </nav>
        </div>

        {/* Center - Search */}
        <div className="hidden md:block w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/post-job"
            className="hidden md:block bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-700"
          >
            Post a Job
          </Link>
          <FaBell className="text-gray-600 text-lg hidden md:block" />
          <Link to="/profile">
            <img
              src="#"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
