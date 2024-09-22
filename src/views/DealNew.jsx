import React from 'react';
import { MdClose } from 'react-icons/md'; // Ensure MdClose is imported

export default function DealNew({ onClose }) {
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Deal Information</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="dealName" className="block text-gray-700 font-medium mb-1">
              Deal Name:
            </label>
            <input 
              id="dealName" 
              type="text" 
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dealOwner" className="block text-gray-700 font-medium mb-1">
              Owner:
            </label>
            <input 
              id="dealOwner" 
              type="text" 
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dealPriority" className="block text-gray-700 font-medium mb-1">
              Priority:
            </label>
            <select
              id="dealPriority"
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label htmlFor="dealTimeline" className="block text-gray-700 font-medium mb-1">
              Timeline:
            </label>
            <input 
              id="dealTimeline" 
              type="date" 
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dealStatus" className="block text-gray-700 font-medium mb-1">
              Status:
            </label>
            <select
              id="dealStatus"
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled value="">Select Status</option>
              <option value="Not Started">Not Started</option>
              <option value="Stuck">Stuck</option>
              <option value="Working on it">Working on it</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div>
            <label htmlFor="dealContact" className="block text-gray-700 font-medium mb-1">
              Contact:
            </label>
            <input 
              id="dealContact" 
              type="text" 
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dealPaymentMethod" className="block text-gray-700 font-medium mb-1">
              Payment Method:
            </label>
            <select
              id="dealPaymentMethod"
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled value="">Select Payment Method</option>
              <option value="Bit">Bit</option>
              <option value="PayPal">PayPal</option>
              <option value="CreditCard">Credit Card</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Approve
          </button>
        </form>
      </div>
    </div>
  );
}
