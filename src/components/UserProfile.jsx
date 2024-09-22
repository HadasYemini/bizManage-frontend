import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Sample User Data URL (replace with your API endpoint if needed)
const userApiUrl = 'https://jsonplaceholder.typicode.com/users/1';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(userApiUrl);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div className="text-center py-5 text-gray-500">Loading...</div>;
    }

    if (!user) {
        return <div className="text-center py-5 text-gray-500">User not found</div>;
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="flex items-center justify-center h-32 bg-gray-200">
                {/* Use a default avatar or user image */}
                <img
                    className="w-24 h-24 rounded-full border-4 border-gray-300"
                    src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                    alt="User Avatar"
                />
            </div>
            <div className="px-6 py-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</p>
                <p className="text-gray-600 mb-1"><strong>Phone:</strong> {user.phone}</p>
                <p className="text-gray-600 mb-4"><strong>Website:</strong> <a href={`https://${user.website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            </div>
            <div className="px-6 py-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600 mb-1"><strong>Street:</strong> {user.address.street}</p>
                <p className="text-gray-600 mb-1"><strong>City:</strong> {user.address.city}</p>
                <p className="text-gray-600"><strong>Zipcode:</strong> {user.address.zipcode}</p>
            </div>
            <div className="px-6 py-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Company</h3>
                <p className="text-gray-600 mb-1"><strong>Name:</strong> {user.company.name}</p>
                <p className="text-gray-600 mb-1"><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                <p className="text-gray-600"><strong>BS:</strong> {user.company.bs}</p>
            </div>
        </div>
    );
}
