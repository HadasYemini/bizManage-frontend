import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown

  return (
    <div>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="sm:hidden p-4 bg-gray-800 text-white fixed z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-48 h-full fixed transition-transform transform z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
      >
        <ul className="flex flex-col h-full justify-start py-6 space-y-2">
          <li className="px-6 py-3 hover:bg-gray-700">
            <Link to="/dashboard" className="block">Home</Link>
          </li>

          {/* Customers Dropdown */}
          <li
            className="px-6 py-3 hover:bg-gray-700 relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown('customers')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center justify-between">
              <span>Customers</span>
            </div>
            {openDropdown === 'customers' && (
              <ul className="absolute left-full top-0 mt-1 bg-gray-900 rounded shadow-lg w-48 z-20">
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/customers" className="block">View Customers</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/customers/new" className="block">New Customer</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Deals Dropdown */}
          <li
            className="px-6 py-3 hover:bg-gray-700 relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown('deals')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center justify-between">
              <span>Deals</span>
            </div>
            {openDropdown === 'deals' && (
              <ul className="absolute left-full top-0 mt-1 bg-gray-900 rounded shadow-lg w-48">
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/deals" className="block">View All Deals</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/deals/Active" className="block">Active Deals</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/deals/Done" className="block">Closed Deals</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/deals/New" className="block">New Deal</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Leads Dropdown */}
          <li
            className="px-6 py-3 hover:bg-gray-700 relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown('leads')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center justify-between">
              <span>Leads</span>
            </div>
            {openDropdown === 'leads' && (
              <ul className="absolute left-full top-0 mt-1 bg-gray-900 rounded shadow-lg w-48">
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/leads" className="block">View All Leads</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/leads/Active" className="block">Active Leads</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/leads/Won" className="block">Closed Leads</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/leads/new" className="block">New Lead</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Tasks Dropdown */}
          <li
            className="px-6 py-3 hover:bg-gray-700 relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown('tasks')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center justify-between">
              <span>Tasks</span>
            </div>
            {openDropdown === 'tasks' && (
              <ul className="absolute left-full top-0 mt-1 bg-gray-900 rounded shadow-lg w-48">
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/tasks" className="block">View Tasks</Link>
                </li>
                <li className="p-3 hover:bg-gray-700">
                  <Link to="/tasks/new" className="block">New Task</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="px-6 py-3 hover:bg-gray-700">
            <Link to="/aboutus" className="block">About Us</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700">
            <Link to="/contact" className="block">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
