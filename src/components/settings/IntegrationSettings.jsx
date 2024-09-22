import React from 'react';

export default function IntegrationSettings() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Integration Settings</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-gray-700">API Key</label>
          <input
            id="apiKey"
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter API key"
          />
        </div>
        <div>
          <label htmlFor="apiSecret" className="block text-gray-700">API Secret</label>
          <input
            id="apiSecret"
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter API secret"
          />
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
