import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { useUsers } from '../context/UsersContext';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { validateUser } = useUsers();
    const navigate = useNavigate();

    async function onLoginSubmit(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const backendPort = import.meta.env.VITE_BACKEND_PORT;
        const backendUrl = `${backendPort}/login`;

        try {
            const response = await axios.post(backendUrl, { email, password })
            if (response) {
                console.log('Login response:', response.data);
                console.log('Response:', response.data.message)
                // const isLoggedIn = await userExists();
                // console.log('Logged in status immediately after login:', isLoggedIn);
              navigate("/dashboard")
            } else {
                alert("login failed, please try again!")
                formInput.current.focus()
            }
        } catch (error) {
            console.error('Error posting data:', error)
        }
    }


    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
            <div className='flex flex-col space-y-6 border border-gray-300 rounded-lg shadow-lg p-8 bg-white'>
                <Header title="BizManage" />
                <form onSubmit={onLoginSubmit} className='flex flex-col space-y-6'>
                <input 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                            title="Enter your email (e.g., example@test.com)" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                            className='border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300' 
                            required
                            />
                    <input 
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                        value={formData.password}
                        name='password' 
                        type="password" 
                        required
                        placeholder='Password'
                        className='border border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-yellow-300' 
                    />
                    <div className='flex space-x-4'>
                        <button 
                            type='submit' 
                            className='w-full bg-yellow-400 text-white font-semibold py-2 rounded-lg shadow hover:bg-yellow-300 transition'
                        >
                            Login
                        </button>
                        <button 
                            type='button' 
                            className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-400 transition'
                            onClick={() => navigate('/register')}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
