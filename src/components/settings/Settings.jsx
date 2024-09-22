import { useState } from 'react';
import ProfileSettings from './ProfileSettings';
import NotificationSettings from './NotificationSettings';
import PrivacySettings from './PrivacySettings';
import IntegrationSettings from './IntegrationSettings';
import RoleSettings from './RoleSettings';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="max-w-2xl mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="flex border-b mb-4">
                <button
                    className={`py-2 px-4 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('profile')}
                    aria-selected={activeTab === 'profile'}
                >
                    Profile
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'notifications' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('notifications')}
                    aria-selected={activeTab === 'notifications'}
                >
                    Notifications
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'privacy' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('privacy')}
                    aria-selected={activeTab === 'privacy'}
                >
                    Privacy
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'integrations' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('integrations')}
                    aria-selected={activeTab === 'integrations'}
                >
                    Integrations
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'roles' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('roles')}
                    aria-selected={activeTab === 'roles'}
                >
                    Roles
                </button>
            </div>
      
            <div>
                {activeTab === 'profile' && <ProfileSettings />}
                {activeTab === 'notifications' && <NotificationSettings />}
                {activeTab === 'privacy' && <PrivacySettings />}
                {activeTab === 'integrations' && <IntegrationSettings />}
                {activeTab === 'roles' && <RoleSettings />}
            </div>
        </div>
    );
}
