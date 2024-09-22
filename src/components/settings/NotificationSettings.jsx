import React from 'react';

export default function NotificationSettings() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
      <form className="space-y-4">
        <div className="flex items-center">
          <input
            id="emailNotifications"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="emailNotifications" className="text-gray-700">Email Notifications</label>
        </div>
        <div className="flex items-center">
          <input
            id="smsNotifications"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="smsNotifications" className="text-gray-700">SMS Notifications</label>
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
