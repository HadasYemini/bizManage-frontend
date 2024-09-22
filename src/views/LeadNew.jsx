import React from 'react';
import { MdClose } from 'react-icons/md'; // Import MdClose icon

export default function LeadNew({ onClose }) {
  return (
    <div className={onClose ? "relative w-full max-w-md bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 mt-20" : "flex justify-center items-center min-h-screen bg-gray-100"}>
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <MdClose className="h-6 w-6" />
        </button>
      )}
      <div className="w-full max-w-md bg-white p-5">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Lead Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="leadName" className="block text-gray-700 text-sm font-bold mb-2">
              Lead Name
            </label>
            <input
              id="leadName"
              type="text"
              placeholder="Enter lead name"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="leadOwner" className="block text-gray-700 text-sm font-bold mb-2">
              Owner
            </label>
            <input
              id="leadOwner"
              type="text"
              placeholder="Enter owner's name"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="leadStage" className="block text-gray-700 text-sm font-bold mb-2">
              Stage
            </label>
            <select
              id="leadStage"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option disabled value="">Select Stage</option>
              <option value="New">New</option>
              <option value="Proposal">Proposal</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="leadDealValue" className="block text-gray-700 text-sm font-bold mb-2">
              Deal Value
            </label>
            <input
              id="leadDealValue"
              type="text"
              placeholder="Enter deal value"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="leadContacts" className="block text-gray-700 text-sm font-bold mb-2">
              Contacts
            </label>
            <input
              id="leadContacts"
              type="text"
              placeholder="Enter contacts"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="leadExpectedCloseDate" className="block text-gray-700 text-sm font-bold mb-2">
              Expected Close Date
            </label>
            <input
              id="leadExpectedCloseDate"
              type="date"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="leadCloseProbability" className="block text-gray-700 text-sm font-bold mb-2">
              Close Probability
            </label>
            <input
              id="leadCloseProbability"
              type="text"
              placeholder="Enter close probability"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="leadEstimatedProfit" className="block text-gray-700 text-sm font-bold mb-2">
              Estimated Profit
            </label>
            <input
              id="leadEstimatedProfit"
              type="text"
              placeholder="Enter estimated profit"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Approve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
