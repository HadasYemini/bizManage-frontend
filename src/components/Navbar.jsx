import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCog, FaBars } from 'react-icons/fa'; // Import icons
import Header from './Header';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
    // Example: Redirect to a search results page with query
    // window.location.href = `/search?query=${searchQuery}`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo and Header */}
        <div className="text-xl font-semibold text-gray-800 flex items-center space-x-3">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-600 hover:text-gray-900 md:hidden focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>


        {/* Middle: Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-6">
          {/* Placeholder for future left-side links */}
          <li>
          <Header title="BizManage" size="small"/>
          </li>
          </ul>

        {/* Right Side: Settings, Profile, Search, and Notifications */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/settings" className="flex items-center text-gray-600 hover:text-gray-900 transition">
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center text-gray-600 hover:text-gray-900 transition">
              <FaUserCircle className="mr-2" />
              User Profile
            </Link>
          </li>
          <li>
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
                Search
              </button>
            </form>
          </li>
          <li>
            <button className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition">
              🔔
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-3 bg-white p-4 absolute top-14 left-0 right-0 shadow-lg">
          <li>
            <Link to="/settings" className="flex items-center text-gray-600 hover:text-gray-900 transition">
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center text-gray-600 hover:text-gray-900 transition">
              <FaUserCircle className="mr-2" />
              User Profile
            </Link>
          </li>
          <li>
            <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-full"
              />
              <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
                Search
              </button>
            </form>
          </li>
          <li>
            <button className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition w-full">
              🔔
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
