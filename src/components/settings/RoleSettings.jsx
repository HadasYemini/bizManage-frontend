import React from 'react';

export default function RoleSettings() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Role Settings</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="roleName" className="block text-gray-700">Role Name</label>
          <input
            id="roleName"
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter role name"
          />
        </div>
        <div>
          <label htmlFor="rolePermissions" className="block text-gray-700">Permissions</label>
          <textarea
            id="rolePermissions"
            rows="4"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter permissions"
          />
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
