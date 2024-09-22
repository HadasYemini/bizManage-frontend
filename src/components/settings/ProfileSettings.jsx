import React from 'react';

export default function ProfileSettings() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="profileName" className="block text-gray-700">Name</label>
          <input
            id="profileName"
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="profileEmail" className="block text-gray-700">Email</label>
          <input
            id="profileEmail"
            type="email"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="profilePassword" className="block text-gray-700">Password</label>
          <input
            id="profilePassword"
            type="password"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter new password"
          />
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
