
'use client';
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lucide icons
const icons = {
  Shield: dynamic(() => import('lucide-react').then(mod => mod.Shield)),
  Lock: dynamic(() => import('lucide-react').then(mod => mod.Lock)),
  Key: dynamic(() => import('lucide-react').then(mod => mod.Key)),
  Globe: dynamic(() => import('lucide-react').then(mod => mod.Globe)),
  AlertTriangle: dynamic(() => import('lucide-react').then(mod => mod.AlertTriangle)),
  CheckCircle: dynamic(() => import('lucide-react').then(mod => mod.CheckCircle)),
  Clock: dynamic(() => import('lucide-react').then(mod => mod.Clock)),
  Moon: dynamic(() => import('lucide-react').then(mod => mod.Moon)),
  Sun: dynamic(() => import('lucide-react').then(mod => mod.Sun)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  Plus: dynamic(() => import('lucide-react').then(mod => mod.Plus)),
  Trash: dynamic(() => import('lucide-react').then(mod => mod.Trash)),
};

export default function SecurityPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(null); // '2fa' or 'add-address'
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [addressWhitelistEnabled, setAddressWhitelistEnabled] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [securityScore, setSecurityScore] = useState(85);

  const loginHistory = [
    { id: 1, time: '2025-08-15 14:30', ip: '192.168.1.1', location: 'New York, USA', status: 'Success' },
    { id: 2, time: '2025-08-15 14:25', ip: '203.0.113.5', location: 'London, UK', status: 'Failed' },
    { id: 3, time: '2025-08-15 14:20', ip: '172.16.0.2', location: 'Tokyo, Japan', status: 'Success' },
    { id: 4, time: '2025-08-15 14:15', ip: '10.0.0.1', location: 'Sydney, Australia', status: 'Success' },
  ];

  const apiKeys = [
    { id: 1, name: 'Trading Bot', key: 'xxxx-xxxx-xxxx-xxxx', permissions: 'Read/Trade', created: '2025-08-01' },
    { id: 2, name: 'Analytics', key: 'xxxx-xxxx-xxxx-xxxx', permissions: 'Read', created: '2025-07-15' },
  ];

  const whitelistedAddresses = [
    { id: 1, address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', asset: 'BTC' },
    { id: 2, address: '0x1234567890abcdef1234567890abcdef12345678', asset: 'ETH' },
  ];

  const securityAlerts = [
    { id: 1, time: '2025-08-15 14:30', event: 'Login Attempt', details: 'Successful login from New York', type: 'success' },
    { id: 2, time: '2025-08-15 14:25', event: 'Failed Login', details: 'Unauthorized access attempt from unknown IP', type: 'error' },
    { id: 3, time: '2025-08-15 14:20', event: '2FA Enabled', details: 'Two-factor authentication activated', type: 'success' },
  ];

  const handleSecurityToggle = useCallback((type) => {
    if (type === '2fa') {
      setTwoFAEnabled(prev => !prev);
      setModalOpen(prev ? null : '2fa');
    }
    if (type === 'whitelist') setAddressWhitelistEnabled(prev => !prev);
  }, []);

  const handleAddAddress = useCallback(() => {
    console.log('Address added:', newAddress);
    setNewAddress('');
    setModalOpen(null);
  }, [newAddress]);

  const handleRemoveAddress = useCallback((address) => {
    console.log('Address removed:', address);
  }, []);

  const handleCreateApiKey = useCallback(() => {
    console.log('API Key created');
  }, []);

  const handleRevokeApiKey = useCallback((key) => {
    console.log('API Key revoked:', key);
  }, []);

  const formatCurrency = (value, decimals = 2) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <icons.Shield className={`h-6 w-6 sm:h-8 sm:w-8 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Security Dashboard
                </h1>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Security Score:
                  </span>
                  <span className={`text-lg sm:text-xl font-bold ${securityScore >= 80 ? 'text-emerald-400' : 'text-yellow-400'}`}>
                    {securityScore}/100
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <button
                onClick={() => handleSecurityToggle('2fa')}
                className={`px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  twoFAEnabled
                    ? (darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200')
                    : (darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-100')
                }`}
              >
                <icons.Lock className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                {twoFAEnabled ? '2FA Enabled' : 'Enable 2FA'}
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
          {/* Two-Factor Authentication */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Two-Factor Authentication
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Lock className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    2FA Status
                  </span>
                </div>
                <button
                  onClick={() => handleSecurityToggle('2fa')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    twoFAEnabled ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      twoFAEnabled ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <button
                onClick={() => setModalOpen('2fa')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                Setup 2FA
              </button>
              <button
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                View Backup Codes
              </button>
            </div>
          </div>

          {/* API Key Management */}
          <div className={`lg:col-span-2 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              API Key Management
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handleCreateApiKey}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                <icons.Plus className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Create New API Key
              </button>
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 text-xs font-semibold text-gray-500 pb-2 border-b border-gray-600">
                    <span>Name</span>
                    <span>Key</span>
                    <span>Permissions</span>
                    <span>Actions</span>
                  </div>
                  {apiKeys.map((key) => (
                    <div key={key.id} className="grid grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm py-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                      <span className={` ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {key.name}
                      </span>
                      <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {key.key}
                      </span>
                      <span className={` ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {key.permissions}
                      </span>
                      <button
                        onClick={() => handleRevokeApiKey(key.key)}
                        className={`text-red-400 hover:text-red-500 transition-colors text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2`}
                      >
                        <icons.Trash className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Revoke</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Address Whitelist */}
          <div className={`lg:col-span-2 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Address Whitelist
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Lock className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Whitelist Status
                  </span>
                </div>
                <button
                  onClick={() => handleSecurityToggle('whitelist')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    addressWhitelistEnabled ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      addressWhitelistEnabled ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <button
                onClick={() => setModalOpen('add-address')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                <icons.Plus className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Add Address
              </button>
              <div className="space-y-2 sm:space-y-3">
                {whitelistedAddresses.map((addr) => (
                  <div key={addr.id} className={`p-2 sm:p-3 rounded-lg flex items-center justify-between ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                    <div>
                      <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {addr.asset}
                      </div>
                      <div className={`text-xs break-all ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {addr.address}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveAddress(addr.address)}
                      className={`text-red-400 hover:text-red-500 transition-colors text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2`}
                    >
                      <icons.Trash className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Login History */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Login History
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-xs font-semibold text-gray-500 pb-2 border-b border-gray-600">
                  <span>Time</span>
                  <span>IP</span>
                  <span>Location</span>
                  <span>Status</span>
                </div>
                {loginHistory.map((login) => (
                  <div key={login.id} className="grid grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm py-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {login.time}
                    </span>
                    <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {login.ip}
                    </span>
                    <span className={` ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {login.location}
                    </span>
                    <span className={`flex items-center space-x-1 sm:space-x-2 ${
                      login.status === 'Success' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {login.status === 'Success' ? (
                        <icons.CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      ) : (
                        <icons.AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                      <span>{login.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Alerts */}
          <div className={`lg:col-span-3 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Security Alerts
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {securityAlerts.map((alert, index) => (
                <div key={alert.id} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      alert.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                    } mt-1 sm:mt-2`} />
                    {index < securityAlerts.length - 1 && (
                      <div className={`absolute top-3 sm:top-4 left-1 sm:left-1.5 w-0.5 h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <icons.Clock className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {alert.event}
                      </span>
                    </div>
                    <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      {alert.details}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                      {alert.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2FA/Add Address Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-2xl p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {modalOpen === '2fa' ? 'Setup 2FA' : 'Add Whitelisted Address'}
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className={`p-1 sm:p-2 rounded-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <icons.X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {modalOpen === '2fa' ? (
                <>
                  <div className="text-center">
                    <div className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gray-700 rounded-lg flex items-center justify-center mb-2 sm:mb-4 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      QR Code Placeholder
                    </div>
                    <div className={`text-xs sm:text-sm break-all ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Scan this QR code with your authenticator app
                    </div>
                  </div>
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Verification Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter 6-digit code"
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
                      Asset
                    </label>
                    <select
                      className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                      <option value="BNB">BNB</option>
                      <option value="USDT">USDT</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Address
                    </label>
                    <input
                      type="text"
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                      placeholder="Enter wallet address"
                      className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                </>
              )}
              <button
                onClick={() => handleAddAddress()}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-200 transform hover:scale-105 ${
                  darkMode
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
                    : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
                }`}
              >
                {modalOpen === '2fa' ? 'Verify and Enable 2FA' : 'Add Address'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



