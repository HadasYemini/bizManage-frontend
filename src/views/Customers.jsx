import React, { useState } from 'react';
import { customersDb } from '../constants/customersDb';
import CustomerCard from '../components/cards/CustomerCard';
import { MdAddToPhotos } from "react-icons/md";
import CustomerNew from './CustomerNew';

export default function Customers() {
    const [customers, setCustomers] = useState(customersDb);
    const [showNewCustomer, setShowNewCustomer] = useState(false);

    return (
        <div className="relative p-4">
            <div id="customersBar" className='p-4 flex items-center'>
                <button onClick={() => setShowNewCustomer(true)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                    <MdAddToPhotos className="mr-2 h-8 w-8" />
                    New Customer
                </button>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Full Name</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Age</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Gender</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Geographical Location</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Phone</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Communication Preferences</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <CustomerCard key={customer.id} customer={customer} />
                        ))}
                    </tbody>
                </table>

                {/* Conditional Rendering for New Customer Form */}
                {showNewCustomer && (
         <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 rounded'>
                        <CustomerNew onClose={() => setShowNewCustomer(false)} />
                    </div>
                )}
            </div>
        </div>
    );
}
