import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar className="w-full md:w-64 bg-gray-800 text-white" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 p-4 md:p-6 bg-gray-100 ml-48 mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
