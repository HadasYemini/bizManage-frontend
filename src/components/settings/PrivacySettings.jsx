import React from 'react';

export default function PrivacySettings() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
      <form className="space-y-4">
        <div className="flex items-center">
          <input
            id="profileVisibility"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="profileVisibility" className="text-gray-700">Profile Visibility</label>
        </div>
        <div className="flex items-center">
          <input
            id="searchEngineIndexing"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="searchEngineIndexing" className="text-gray-700">Allow Search Engine Indexing</label>
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
