import React from 'react';
import { MdClose } from 'react-icons/md';

export default function TaskNew({ onClose }) {
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
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Task Information</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="taskName" className="block text-gray-700 text-sm font-bold mb-2">
              Task Name
            </label>
            <input
              id="taskName"
              type="text"
              placeholder="Enter task name"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taskDescription" className="block text-gray-700 text-sm font-bold mb-2">
              Task Description
            </label>
            <input
              id="taskDescription"
              type="text"
              placeholder="Enter task description"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taskAssignTo" className="block text-gray-700 text-sm font-bold mb-2">
              Assign To
            </label>
            <input
              id="taskAssignTo"
              type="text"
              placeholder="Enter assignee name"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taskDueDate" className="block text-gray-700 text-sm font-bold mb-2">
              Due Date
            </label>
            <input
              id="taskDueDate"
              type="date"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taskEstimate" className="block text-gray-700 text-sm font-bold mb-2">
              Estimate
            </label>
            <input
              id="taskEstimate"
              type="text"
              placeholder="Enter time estimate"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="taskSection" className="block text-gray-700 text-sm font-bold mb-2">
              Section
            </label>
            <select
              id="taskSection"
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Section</option>
              <option value="CustomersManagement">Customers Management</option>
              <option value="DealsManagement">Deals Management</option>
              <option value="Reports">Reports</option>
              <option value="Support">Support</option>
              <option value="Account">Account</option>
            </select>
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
