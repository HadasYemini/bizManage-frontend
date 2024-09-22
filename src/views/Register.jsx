import axios from "axios";
import { useState } from "react";
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        password: ''
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,20}$/;
        return regex.test(password);
    }

    function validateUserData() {
        if (!formData.firstName || !formData.lastName || !formData.businessName || !formData.email || !formData.password) {
            setMessage('All fields are required.');
            return false;
        }

        if (formData.firstName.length < 2 || formData.firstName.length > 10) {
            setMessage('First name must be between 2-10 characters.');
            return false;
        }

        if (formData.lastName.length < 2 || formData.lastName.length > 10) {
            setMessage('Last name must be between 2-10 characters.');
            return false;
        }

        if (formData.businessName.length < 2 || formData.businessName.length > 15) {
            setMessage('Business name must be between 2-15 characters.');
            return false;
        }

        if (!validateEmail(formData.email)) {
            setMessage('Email address must follow the format: example@test.com');
            return false;
        }

        if (!validatePassword(formData.password)) {
            setMessage('Password must be between 8-20 characters and include a capital letter, small letter, number, and special character.');
            return false;
        }

        if (formData.password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return false;
        }

        return true;
    };

    async function onSubmitRegister(e) {
        e.preventDefault();

        const backendPort = import.meta.env.VITE_BACKEND_PORT;
        const backendUrl = `${backendPort}/register`;

        if (!validateUserData()) {
            return;
        }

        try {
            const response = await axios.post(backendUrl, formData);
            setMessage(response.data.message);
            navigate('/')
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred while creating the user.');
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
            <div className='flex flex-col space-y-6 border border-gray-300 rounded-lg shadow-lg p-8 bg-white w-full max-w-md'>
                <Header title="BizManage" />
                <form id="signUp" name="signUp" onSubmit={onSubmitRegister} className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="firstName" className="sr-only">First Name</label>
                        <input 
                            id="firstName" 
                            type="text" 
                            placeholder="First Name" 
                            title="Enter your first name (2-10 characters)" 
                            className="border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="lastName" className="sr-only">Last Name</label>
                        <input 
                            id="lastName" 
                            type="text" 
                            placeholder="Last Name" 
                            title="Enter your last name (2-10 characters)" 
                            className="border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="businessName" className="sr-only">Business Name</label>
                        <input 
                            id="businessName" 
                            type="text" 
                            placeholder="Business Name" 
                            title="Enter your business name (2-15 characters)" 
                            className="border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                            title="Enter your email (e.g., example@test.com)" 
                            className="border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Password" 
                            title="Password must be between 8-20 characters and include a capital letter, small letter, number, and special character." 
                            className="border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                        <input 
                            id="confirmPassword" 
                            type="password" 
                            placeholder="Confirm Password" 
                            title="Confirm your password" 
                            className="border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>

                    {message && <p className="text-red-500 text-center">{message}</p>}
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-400 transition"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
