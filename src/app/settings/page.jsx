

'use client';
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lucide icons
const icons = {
  Settings: dynamic(() => import('lucide-react').then(mod => mod.Settings)),
  Lock: dynamic(() => import('lucide-react').then(mod => mod.Lock)),
  Palette: dynamic(() => import('lucide-react').then(mod => mod.Palette)),
  Bell: dynamic(() => import('lucide-react').then(mod => mod.Bell)),
  Shield: dynamic(() => import('lucide-react').then(mod => mod.Shield)),
  CreditCard: dynamic(() => import('lucide-react').then(mod => mod.CreditCard)),
  Moon: dynamic(() => import('lucide-react').then(mod => mod.Moon)),
  Sun: dynamic(() => import('lucide-react').then(mod => mod.Sun)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  Trash: dynamic(() => import('lucide-react').then(mod => mod.Trash)),
};

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(null); // 'change-password' or 'manage-payment'
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    push: true,
    transactions: true,
    security: true,
  });
  const [privacySettings, setPrivacySettings] = useState({
    dataSharing: false,
    twoFA: true,
    sessionTimeout: '30m',
  });
  const [themeColor, setThemeColor] = useState('orange');

  const handleNotificationChange = useCallback((key) => {
    setNotificationSettings(prev => ({ ...prev, [key]: !prev[key] }));
    console.log(`Notification setting updated: ${key} = ${!notificationSettings[key]}`);
  }, [notificationSettings]);

  const handlePrivacyChange = useCallback((key, value) => {
    setPrivacySettings(prev => ({ ...prev, [key]: value }));
    console.log(`Privacy setting updated: ${key} = ${value}`);
  }, []);

  const handleChangePassword = useCallback(() => {
    console.log('Password change initiated');
    setModalOpen(null);
  }, []);

  const handleDeactivateAccount = useCallback(() => {
    console.log('Account deactivation initiated');
  }, []);

  const handleManagePayment = useCallback(() => {
    console.log('Payment method management initiated');
    setModalOpen(null);
  }, []);

  const handleUpgradePlan = useCallback(() => {
    console.log('Plan upgrade initiated');
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
              <icons.Settings className={`h-6 w-6 sm:h-8 sm:w-8 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
              <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings
              </h1>
            </div>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Account Settings */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Account Settings
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={() => setModalOpen('change-password')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <icons.Lock className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Change Password
              </button>
              <button
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <icons.Settings className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Manage API Keys
              </button>
              <button
                onClick={handleDeactivateAccount}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                <icons.Trash className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Deactivate Account
              </button>
            </div>
          </div>

          {/* Appearance */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Appearance
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Palette className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Dark Mode
                  </span>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    darkMode ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      darkMode ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Theme Color
                </label>
                <select
                  value={themeColor}
                  onChange={(e) => setThemeColor(e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="orange">Orange</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Notifications
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Bell className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Notifications
                  </span>
                </div>
                <button
                  onClick={() => handleNotificationChange('email')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    notificationSettings.email ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      notificationSettings.email ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Bell className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    SMS Notifications
                  </span>
                </div>
                <button
                  onClick={() => handleNotificationChange('sms')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    notificationSettings.sms ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      notificationSettings.sms ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Bell className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Push Notifications
                  </span>
                </div>
                <button
                  onClick={() => handleNotificationChange('push')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    notificationSettings.push ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      notificationSettings.push ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Bell className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Transaction Alerts
                  </span>
                </div>
                <button
                  onClick={() => handleNotificationChange('transactions')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    notificationSettings.transactions ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      notificationSettings.transactions ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Bell className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Security Alerts
                  </span>
                </div>
                <button
                  onClick={() => handleNotificationChange('security')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    notificationSettings.security ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      notificationSettings.security ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className={`lg:col-span-2 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Privacy
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Shield className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Data Sharing
                  </span>
                </div>
                <button
                  onClick={() => handlePrivacyChange('dataSharing', !privacySettings.dataSharing)}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    privacySettings.dataSharing ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      privacySettings.dataSharing ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Lock className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Two-Factor Authentication
                  </span>
                </div>
                <button
                  onClick={() => handlePrivacyChange('twoFA', !privacySettings.twoFA)}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    privacySettings.twoFA ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      privacySettings.twoFA ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Session Timeout
                </label>
                <select
                  value={privacySettings.sessionTimeout}
                  onChange={(e) => handlePrivacyChange('sessionTimeout', e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="15m">15 Minutes</option>
                  <option value="30m">30 Minutes</option>
                  <option value="1h">1 Hour</option>
                  <option value="never">Never</option>
                </select>
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Billing
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <icons.CreditCard className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subscription Status
                </span>
              </div>
              <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Premium Plan
              </div>
              <button
                onClick={() => setModalOpen('manage-payment')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                Manage Payment Methods
              </button>
              <button
                onClick={handleUpgradePlan}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-2xl p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {modalOpen === 'change-password' ? 'Change Password' : 'Manage Payment Methods'}
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className={`p-1 sm:p-2 rounded-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <icons.X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {modalOpen === 'change-password' ? (
                <>
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={modalOpen === 'change-password' ? handleChangePassword : handleManagePayment}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700`}
              >
                {modalOpen === 'change-password' ? 'Change Password' : 'Save Payment Method'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
