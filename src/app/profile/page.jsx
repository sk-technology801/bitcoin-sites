
'use client';
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lucide icons
const icons = {
  User: dynamic(() => import('lucide-react').then(mod => mod.User)),
  Mail: dynamic(() => import('lucide-react').then(mod => mod.Mail)),
  Phone: dynamic(() => import('lucide-react').then(mod => mod.Phone)),
  Globe: dynamic(() => import('lucide-react').then(mod => mod.Globe)),
  Bell: dynamic(() => import('lucide-react').then(mod => mod.Bell)),
  Clock: dynamic(() => import('lucide-react').then(mod => mod.Clock)),
  Moon: dynamic(() => import('lucide-react').then(mod => mod.Moon)),
  Sun: dynamic(() => import('lucide-react').then(mod => mod.Sun)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  CheckCircle: dynamic(() => import('lucide-react').then(mod => mod.CheckCircle)),
  AlertTriangle: dynamic(() => import('lucide-react').then(mod => mod.AlertTriangle)),
  Link: dynamic(() => import('lucide-react').then(mod => mod.Link)),
  Unlink: dynamic(() => import('lucide-react').then(mod => mod.Unlink)),
  ShieldCheck: dynamic(() => import('lucide-react').then(mod => mod.ShieldCheck)),
};

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(null); // 'edit-info'
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (123) 456-7890',
  });
  const [tempInfo, setTempInfo] = useState(userInfo);
  const [preferences, setPreferences] = useState({
    currency: 'USD',
    language: 'English',
    notifications: true,
  });

  const accountActivity = [
    { id: 1, time: '2025-08-15 14:30', action: 'Profile Updated', details: 'Updated email address', status: 'Success' },
    { id: 2, time: '2025-08-15 14:25', action: 'Password Changed', details: 'Password updated successfully', status: 'Success' },
    { id: 3, time: '2025-08-15 14:20', action: 'Login', details: 'Logged in from New York', status: 'Success' },
    { id: 4, time: '2025-08-15 14:15', action: 'Failed Login', details: 'Incorrect password attempt', status: 'Failed' },
  ];

  const linkedAccounts = [
    { id: 1, provider: 'Google', status: 'Connected', connectedAt: '2025-08-01' },
    { id: 2, provider: 'MetaMask', status: 'Connected', connectedAt: '2025-07-15' },
  ];

  const handleSaveInfo = useCallback(() => {
    setUserInfo(tempInfo);
    setModalOpen(null);
    console.log('User info updated:', tempInfo);
  }, [tempInfo]);

  const handlePreferenceChange = useCallback((key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
    console.log('Preference updated:', { [key]: value });
  }, []);

  const handleLinkAccount = useCallback((provider) => {
    console.log(`Linking ${provider} account`);
  }, []);

  const handleUnlinkAccount = useCallback((provider) => {
    console.log(`Unlinking ${provider} account`);
  }, []);

  const handleVerifyIdentity = useCallback(() => {
    console.log('Starting identity verification');
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                {userInfo.name[0]}
              </div>
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {userInfo.name}
                </h1>
                <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Premium Member
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <button
                onClick={() => setModalOpen('edit-info')}
                className={`px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                <icons.User className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Edit Profile
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-1.5 sm:p-2 rounded-lg transition-all duration-200 ${
                  darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                {darkMode ? <icons.Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <icons.Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* User Information */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              User Information
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.User className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </span>
                </div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-white' : 'text-gray-900'} mt-1`}>
                  {userInfo.name}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Mail className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </span>
                </div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-white' : 'text-gray-900'} mt-1`}>
                  {userInfo.email}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Phone className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Phone
                  </span>
                </div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-white' : 'text-gray-900'} mt-1`}>
                  {userInfo.phone}
                </div>
              </div>
              <button
                onClick={() => setModalOpen('edit-info')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                Edit Information
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Preferences
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Currency
                </label>
                <select
                  value={preferences.currency}
                  onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="BTC">BTC</option>
                </select>
              </div>
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Language
                </label>
                <select
                  value={preferences.language}
                  onChange={(e) => handlePreferenceChange('language', e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Bell className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Notifications
                  </span>
                </div>
                <button
                  onClick={() => handlePreferenceChange('notifications', !preferences.notifications)}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    preferences.notifications ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      preferences.notifications ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Account Activity */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Account Activity
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-xs font-semibold text-gray-500 pb-2 border-b border-gray-600">
                  <span>Time</span>
                  <span>Action</span>
                  <span>Details</span>
                  <span>Status</span>
                </div>
                {accountActivity.map((activity) => (
                  <div key={activity.id} className="grid grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm py-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {activity.time}
                    </span>
                    <span className={` ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {activity.action}
                    </span>
                    <span className={` ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {activity.details}
                    </span>
                    <span className={`flex items-center space-x-1 sm:space-x-2 ${
                      activity.status === 'Success' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {activity.status === 'Success' ? (
                        <icons.CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      ) : (
                        <icons.AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                      <span>{activity.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Linked Accounts */}
          <div className={`lg:col-span-2 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Linked Accounts
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={() => handleLinkAccount('Google')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                <icons.Link className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Connect New Account
              </button>
              <div className="space-y-2 sm:space-y-3">
                {linkedAccounts.map((account) => (
                  <div key={account.id} className={`p-2 sm:p-3 rounded-lg flex items-center justify-between ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                    <div>
                      <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {account.provider}
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Connected on {account.connectedAt}
                      </div>
                    </div>
                    <button
                      onClick={() => handleUnlinkAccount(account.provider)}
                      className={`text-red-400 hover:text-red-500 transition-colors text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2`}
                    >
                      <icons.Unlink className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Disconnect</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Verification Status
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <icons.ShieldCheck className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  KYC Status
                </span>
              </div>
              <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                Pending Verification
              </div>
              <button
                onClick={handleVerifyIdentity}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                Complete KYC Verification
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Information Modal */}
      {modalOpen === 'edit-info' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-2xl p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Edit Profile Information
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className={`p-1 sm:p-2 rounded-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <icons.X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  value={tempInfo.name}
                  onChange={(e) => setTempInfo({ ...tempInfo, name: e.target.value })}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={tempInfo.email}
                  onChange={(e) => setTempInfo({ ...tempInfo, email: e.target.value })}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Phone
                </label>
                <input
                  type="tel"
                  value={tempInfo.phone}
                  onChange={(e) => setTempInfo({ ...tempInfo, phone: e.target.value })}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
              <button
                onClick={handleSaveInfo}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700`}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
