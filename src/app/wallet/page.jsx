'use client';
import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lucide icons
const icons = {
  Wallet: dynamic(() => import('lucide-react').then(mod => mod.Wallet)),
  Send: dynamic(() => import('lucide-react').then(mod => mod.Send)),
  Download: dynamic(() => import('lucide-react').then(mod => mod.Download)),
  ArrowUpRight: dynamic(() => import('lucide-react').then(mod => mod.ArrowUpRight)),
  ArrowDownRight: dynamic(() => import('lucide-react').then(mod => mod.ArrowDownRight)),
  Moon: dynamic(() => import('lucide-react').then(mod => mod.Moon)),
  Sun: dynamic(() => import('lucide-react').then(mod => mod.Sun)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  CheckCircle: dynamic(() => import('lucide-react').then(mod => mod.CheckCircle)),
  AlertTriangle: dynamic(() => import('lucide-react').then(mod => mod.AlertTriangle)),
  PieChart: dynamic(() => import('lucide-react').then(mod => mod.PieChart)),
  TrendingUp: dynamic(() => import('lucide-react').then(mod => mod.TrendingUp)),
  TrendingDown: dynamic(() => import('lucide-react').then(mod => mod.TrendingDown)),
  Shield: dynamic(() => import('lucide-react').then(mod => mod.Shield)),
  Lock: dynamic(() => import('lucide-react').then(mod => mod.Lock)),
  Key: dynamic(() => import('lucide-react').then(mod => mod.Key)),
  Clock: dynamic(() => import('lucide-react').then(mod => mod.Clock)),
  Coins: dynamic(() => import('lucide-react').then(mod => mod.Coins)),
  BarChart2: dynamic(() => import('lucide-react').then(mod => mod.BarChart2)),
  ArrowLeftRight: dynamic(() => import('lucide-react').then(mod => mod.ArrowLeftRight)),
};

export default function WalletPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(null); // 'deposit', 'withdraw', or 'swap'
  const [selectedAsset, setSelectedAsset] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [totalBalance, setTotalBalance] = useState(308492.92);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [addressWhitelist, setAddressWhitelist] = useState(false);

  // Simulated real-time balance updates
  useEffect(() => {
    const interval = setInterval(() => {
      const volatility = 0.0005;
      const change = (Math.random() - 0.5) * 2 * volatility * totalBalance;
      setTotalBalance(prev => Math.max(0, prev + change));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalBalance]);

  const balances = [
    { asset: 'BTC', amount: 2.34567, value: 158234.67, change: 2.45, icon: '₿' },
    { asset: 'ETH', amount: 15.6789, value: 54234.12, change: -1.23, icon: 'Ξ' },
    { asset: 'BNB', amount: 234.567, value: 80345.23, change: 4.12, icon: '🔶' },
    { asset: 'USDT', amount: 15678.90, value: 15678.90, change: 0.00, icon: '₮' },
  ];

  const transactions = [
    { id: 1, date: '2025-08-15 14:32', type: 'Deposit', asset: 'BTC', amount: 0.0234, value: 1578.40, status: 'Completed' },
    { id: 2, date: '2025-08-15 14:30', type: 'Withdraw', asset: 'ETH', amount: 0.1567, value: 541.23, status: 'Pending' },
    { id: 3, date: '2025-08-15 14:28', type: 'Deposit', asset: 'BNB', amount: 1.234, value: 422.56, status: 'Completed' },
    { id: 4, date: '2025-08-15 14:25', type: 'Withdraw', asset: 'USDT', amount: 1000, value: 1000, status: 'Failed' },
  ];

  const activities = [
    { id: 1, time: '2025-08-15 14:30', action: 'Login', details: 'Successful login from IP 192.168.1.1', type: 'success' },
    { id: 2, time: '2025-08-15 14:25', action: 'Address Added', details: 'New BTC address added to whitelist', type: 'info' },
    { id: 3, time: '2025-08-15 14:20', action: '2FA Enabled', details: 'Two-factor authentication activated', type: 'success' },
    { id: 4, time: '2025-08-15 14:15', action: 'Failed Login', details: 'Failed login attempt from unknown IP', type: 'error' },
  ];

  const stakingData = [
    { asset: 'ETH', staked: 5.123, rewards: 0.234, apy: 4.5, icon: 'Ξ' },
    { asset: 'ADA', staked: 1000, rewards: 45.67, apy: 5.2, icon: '₳' },
  ];

  const handleAction = useCallback((action) => {
    console.log(`${action} executed:`, { asset: selectedAsset, amount });
    setModalOpen(null);
    setAmount('');
  }, [selectedAsset, amount]);

  const handleSecurityToggle = useCallback((type) => {
    if (type === '2fa') setTwoFAEnabled(prev => !prev);
    if (type === 'whitelist') setAddressWhitelist(prev => !prev);
  }, []);

  const formatCurrency = (value, decimals = 2) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  const formatNumber = (value, decimals = 4) => {
    return new Intl.NumberFormat('en-US', {
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
              <icons.Wallet className={`h-6 w-6 sm:h-8 sm:w-8 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Wallet Overview
                </h1>
                <div className={`text-lg sm:text-xl font-bold tabular-nums ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {formatCurrency(totalBalance)}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <button
                onClick={() => setModalOpen('deposit')}
                className={`px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                <icons.Download className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Deposit
              </button>
              <button
                onClick={() => setModalOpen('withdraw')}
                className={`px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                <icons.Send className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Withdraw
              </button>
              <button
                onClick={() => setModalOpen('swap')}
                className={`px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <icons.ArrowLeftRight className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Swap
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
          {/* Balances Section */}
          <div className={`lg:col-span-2 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Asset Balances
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {balances.map((asset) => (
                <div
                  key={asset.asset}
                  className={`p-3 sm:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                    darkMode ? 'bg-gray-700/30' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                        {asset.icon}
                      </div>
                      <div>
                        <div className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {formatNumber(asset.amount)} {asset.asset}
                        </div>
                        <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {formatCurrency(asset.value)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs sm:text-sm font-semibold ${
                        asset.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(2)}%
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        24h
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Insights */}
          <div className={`rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Portfolio Insights
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="h-32 sm:h-40 flex items-center justify-center">
                <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <icons.PieChart className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-4 opacity-50" />
                  <p className="text-xs sm:text-sm">Portfolio Allocation Chart</p>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Top Asset
                  </span>
                  <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    BTC (51.2%)
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Gains
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400">
                    +{formatCurrency(12456.78)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className={`lg:col-span-3 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Transaction History
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-5 gap-2 sm:gap-4 text-xs font-semibold text-gray-500 pb-2 border-b border-gray-600">
                  <span>Date</span>
                  <span>Type</span>
                  <span>Asset</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
                {transactions.map((tx) => (
                  <div key={tx.id} className="grid grid-cols-5 gap-2 sm:gap-4 text-xs sm:text-sm py-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {tx.date}
                    </span>
                    <span className={`font-semibold ${
                      tx.type === 'Deposit' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {tx.type}
                    </span>
                    <span className={`tabular-nums ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {tx.asset}
                    </span>
                    <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {formatNumber(tx.amount)} {tx.asset}
                    </span>
                    <span className={`flex items-center space-x-1 sm:space-x-2 ${
                      tx.status === 'Completed' ? 'text-emerald-400' : tx.status === 'Pending' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {tx.status === 'Completed' ? (
                        <icons.CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      ) : (
                        <icons.AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                      <span>{tx.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Security Settings
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Shield className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Two-Factor Authentication
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
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Lock className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Address Whitelist
                  </span>
                </div>
                <button
                  onClick={() => handleSecurityToggle('whitelist')}
                  className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-12 items-center rounded-full transition-colors duration-200 ${
                    addressWhitelist ? 'bg-emerald-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform bg-white rounded-full transition-transform duration-200 ${
                      addressWhitelist ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <button className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}>
                <icons.Key className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Manage API Keys
              </button>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className={`lg:col-span-2 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Recent Activity
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {activities.map((activity, index) => (
                <div key={activity.id} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      activity.type === 'success' ? 'bg-emerald-500' : activity.type === 'info' ? 'bg-blue-500' : 'bg-red-500'
                    } mt-1 sm:mt-2`} />
                    {index < activities.length - 1 && (
                      <div className={`absolute top-3 sm:top-4 left-1 sm:left-1.5 w-0.5 h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <icons.Clock className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.action}
                      </span>
                    </div>
                    <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      {activity.details}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Staking Dashboard */}
          <div className={`lg:col-span-3 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Staking Dashboard
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {stakingData.map((stake) => (
                <div
                  key={stake.asset}
                  className={`p-3 sm:p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                    darkMode ? 'bg-gray-700/30' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                        {stake.icon}
                      </div>
                      <div>
                        <div className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {stake.asset}
                        </div>
                        <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Staked: {formatNumber(stake.staked)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Rewards: {formatNumber(stake.rewards)} {stake.asset}
                      </div>
                      <div className={`text-xs sm:text-sm font-semibold text-emerald-400`}>
                        APY: {stake.apy}%
                      </div>
                    </div>
                  </div>
                  <button className={`w-full mt-2 sm:mt-3 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                    darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                  }`}>
                    <icons.Coins className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                    Stake More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Wallet Analytics */}
          <div className={`lg:col-span-3 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Wallet Analytics
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="h-32 sm:h-40 flex items-center justify-center">
                <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <icons.BarChart2 className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-4 opacity-50" />
                  <p className="text-xs sm:text-sm">Balance Trend Chart</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      30d Transaction Volume
                    </span>
                    <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatCurrency(24567.89)}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Average Transaction Size
                    </span>
                    <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatCurrency(1234.56)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 border-t transition-colors duration-300 md:sticky md:bottom-4 md:max-w-7xl md:mx-auto md:rounded-2xl ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl md:shadow-lg`}>
        <div className="flex justify-around md:justify-start md:space-x-4 px-4 py-3 sm:py-4">
          <button
            onClick={() => setModalOpen('deposit')}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              darkMode ? 'text-emerald-400 hover:bg-emerald-500/20' : 'text-emerald-600 hover:bg-emerald-100'
            }`}
          >
            <icons.Download className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Deposit</span>
          </button>
          <button
            onClick={() => setModalOpen('withdraw')}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              darkMode ? 'text-red-400 hover:bg-red-500/20' : 'text-red-600 hover:bg-red-100'
            }`}
          >
            <icons.Send className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Withdraw</span>
          </button>
          <button
            onClick={() => setModalOpen('swap')}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              darkMode ? 'text-blue-400 hover:bg-blue-500/20' : 'text-blue-600 hover:bg-blue-100'
            }`}
          >
            <icons.ArrowLeftRight className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Swap</span>
          </button>
        </div>
      </div>

      {/* Deposit/Withdraw/Swap Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-2xl p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {modalOpen === 'deposit' ? 'Deposit Funds' : modalOpen === 'withdraw' ? 'Withdraw Funds' : 'Swap Assets'}
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
                  {modalOpen === 'swap' ? 'From Asset' : 'Asset'}
                </label>
                <select
                  value={selectedAsset}
                  onChange={(e) => setSelectedAsset(e.target.value)}
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  {balances.map((asset) => (
                    <option key={asset.asset} value={asset.asset}>{asset.asset}</option>
                  ))}
                </select>
              </div>
              {modalOpen === 'swap' && (
                <div>
                  <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    To Asset
                  </label>
                  <select
                    className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    {balances.filter(asset => asset.asset !== selectedAsset).map((asset) => (
                      <option key={asset.asset} value={asset.asset}>{asset.asset}</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00000000"
                  className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
              {modalOpen === 'deposit' && (
                <div className="text-center">
                  <div className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gray-700 rounded-lg flex items-center justify-center mb-2 sm:mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    QR Code Placeholder
                  </div>
                  <div className={`text-xs sm:text-sm break-all ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Wallet Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                  </div>
                </div>
              )}
              <button
                onClick={() => handleAction(modalOpen)}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-200 transform hover:scale-105 ${
                  modalOpen === 'deposit'
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
                    : modalOpen === 'withdraw'
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                }`}
              >
                {modalOpen === 'deposit' ? 'Confirm Deposit' : modalOpen === 'withdraw' ? 'Confirm Withdrawal' : 'Confirm Swap'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}