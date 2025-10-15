import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-6 text-sm text-gray-600 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} FreelanceHub. All rights reserved.
        </div>
        <div className="text-gray-300 hover:text-white flex space-x-4">
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
