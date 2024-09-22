import React from 'react';
import { MdClose } from 'react-icons/md';

export default function CustomerNew({ onClose }) {
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
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Customer Information</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="customerFullName" className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name
                        </label>
                        <input
                            id="customerFullName"
                            type="text"
                            placeholder="John Doe"
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="customerAge" className="block text-gray-700 text-sm font-bold mb-2">
                            Age
                        </label>
                        <input
                            id="customerAge"
                            type="text"
                            placeholder="30"
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="customerGender" className="block text-gray-700 text-sm font-bold mb-2">
                            Gender
                        </label>
                        <select
                            id="customerGender"
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option disabled value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="customerGeographicalLocation" className="block text-gray-700 text-sm font-bold mb-2">
                            Geographical Location
                        </label>
                        <input
                            id="customerGeographicalLocation"
                            type="text"
                            placeholder="City, Country"
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="customerEmail" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            id="customerEmail"
                            type="email"
                            placeholder="example@domain.com"
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="customerPhoneNo" className="block text-gray-700 text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            id="customerPhoneNo"
                            type="text"
                            placeholder="+1234567890"
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="customerBusinessName" className="block text-gray-700 text-sm font-bold mb-2">
                            Business Name
                        </label>
                        <input
                            id="customerBusinessName"
                            type="text"
                            placeholder="Your Business"
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
