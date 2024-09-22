import React from 'react';
import logo from '../assets/BizManage.webp';

export default function Header({ title, size = 'large' }) {
    const isSmall = size === 'small';

    return (
        <header className={`flex items-center p-4 ${isSmall ? 'bg-gray-50' : 'bg-gray-100'} shadow-md`}>
            <img 
                src={logo} 
                alt="BizManage" 
                className={`mr-4 ${isSmall ? 'h-10' : 'h-20'} w-auto`} 
            />
            <h1 className={`font-bold text-gray-800 ${isSmall ? 'text-xl' : 'text-3xl'}`}>
                {title}
            </h1>
        </header>
    );
}
