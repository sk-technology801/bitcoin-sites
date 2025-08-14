"use client";
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, 
  ArrowUpRight, ArrowDownRight, Eye, EyeOff, RefreshCw, Settings,
  Plus, Minus, Download, Upload, Share2, Filter, Search, 
  Calendar, Clock, AlertTriangle, CheckCircle, XCircle, Star,
  Zap, Shield, Globe, Users, Target, Crown, Flame, Moon, Sun,
  PieChart, LineChart, Wallet, CreditCard, History, Bell
} from 'lucide-react';

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [timeframe, setTimeframe] = useState('1D');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [hideSmallBalances, setHideSmallBalances] = useState(false);
  const [totalBalance, setTotalBalance] = useState(485672.34);
  const [totalPnL, setTotalPnL] = useState(12456.78);
  const [totalPnLPercent, setTotalPnLPercent] = useState(2.64);
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);

  // Simulate portfolio updates
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 1000;
      setTotalBalance(prev => Math.max(0, prev + change));
      setTotalPnL(prev => prev + (Math.random() - 0.5) * 100);
      setTotalPnLPercent((Math.random() - 0.5) * 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const portfolioAssets = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: '₿',
      amount: 2.34567890,
      price: 67432.50,
      value: 158234.67,
      change24h: 2.45,
      change7d: 8.23,
      allocation: 32.6,
      profit: 8234.56,
      profitPercent: 5.49,
      status: 'up'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      icon: 'Ξ',
      amount: 45.6789123,
      price: 3456.78,
      value: 157890.23,
      change24h: -1.23,
      change7d: 4.56,
      allocation: 32.5,
      profit: 4567.89,
      profitPercent: 2.98,
      status: 'down'
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      icon: '🔶',
      amount: 234.5678,
      price: 342.56,
      value: 80345.23,
      change24h: 4.12,
      change7d: -2.34,
      allocation: 16.5,
      profit: 2345.67,
      profitPercent: 3.01,
      status: 'up'
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      icon: '◎',
      amount: 567.8912,
      price: 156.78,
      value: 89045.67,
      change24h: -2.45,
      change7d: 12.45,
      allocation: 18.3,
      profit: 6789.12,
      profitPercent: 8.25,
      status: 'down'
    },
    {
      symbol: 'USDT',
      name: 'Tether',
      icon: '₮',
      amount: 15678.90,
      price: 1.00,
      value: 15678.90,
      change24h: 0.00,
      change7d: 0.00,
      allocation: 3.2,
      profit: 0.00,
      profitPercent: 0.00,
      status: 'stable'
    },
    {
      symbol: 'DOT',
      name: 'Polkadot',
      icon: '●',
      amount: 1234.567,
      price: 7.89,
      value: 9740.66,
      change24h: 3.67,
      change7d: -5.23,
      allocation: 2.0,
      profit: 456.78,
      profitPercent: 4.91,
      status: 'up'
    }
  ];

  const transactionHistory = [
    { id: 1, type: 'buy', asset: 'BTC', amount: 0.5, price: 65000, value: 32500, date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'sell', asset: 'ETH', amount: 10, price: 3200, value: 32000, date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'buy', asset: 'SOL', amount: 100, price: 140, value: 14000, date: '2024-01-13', status: 'completed' },
    { id: 4, type: 'deposit', asset: 'USDT', amount: 10000, price: 1, value: 10000, date: '2024-01-12', status: 'completed' },
    { id: 5, type: 'buy', asset: 'BNB', amount: 50, price: 300, value: 15000, date: '2024-01-11', status: 'pending' },
  ];

  const performanceData = [
    { period: '1D', return: 2.64, value: 485672.34 },
    { period: '7D', return: 8.23, value: 448930.21 },
    { period: '30D', return: 15.67, value: 420145.78 },
    { period: '90D', return: 32.45, value: 366789.12 },
    { period: '1Y', return: 125.34, value: 215432.67 },
    { period: 'ALL', return: 234.56, value: 145123.89 }
  ];

  const formatCurrency = (amount, decimals = 2) => {
    if (isBalanceHidden) return '*****';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(amount);
  };

  const formatNumber = (num, decimals = 4) => {
    if (isBalanceHidden) return '*****';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      {/* Header */}
      <div className={`sticky top-16 z-40 border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            
            {/* Title & Balance */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Portfolio
                  </h1>
                  <button
                    onClick={() => setIsBalanceHidden(!isBalanceHidden)}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {isBalanceHidden ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                <div className="flex items-baseline space-x-4">
                  <div className={`text-4xl font-bold tabular-nums ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {formatCurrency(totalBalance)}
                  </div>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${
                    totalPnLPercent >= 0 
                      ? (darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                      : (darkMode ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600')
                  }`}>
                    {totalPnLPercent >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    <span className="font-semibold text-lg">
                      {formatCurrency(Math.abs(totalPnL))} ({Math.abs(totalPnLPercent).toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              
              {/* Timeframe Selector */}
              <div className={`flex rounded-xl p-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                {['1D', '7D', '30D', '90D', '1Y', 'ALL'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeframe(period)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      timeframe === period
                        ? (darkMode ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white')
                        : (darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <button className={`p-2.5 rounded-xl transition-colors ${
                darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
              }`}>
                <RefreshCw className="h-5 w-5" />
              </button>

              <button className={`p-2.5 rounded-xl transition-colors ${
                darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
              }`}>
                <Download className="h-5 w-5" />
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl transition-colors ${
                  darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceData.slice(0, 4).map((data) => (
            <div key={data.period} className={`p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
            } backdrop-blur-sm`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {data.period} Return
                </span>
                <div className={`p-1 rounded ${
                  data.return >= 0 
                    ? (darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50') 
                    : (darkMode ? 'bg-red-500/10' : 'bg-red-50')
                }`}>
                  {data.return >= 0 ? 
                    <TrendingUp className="h-3 w-3 text-emerald-500" /> : 
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  }
                </div>
              </div>
              <div className={`text-2xl font-bold mb-1 ${
                data.return >= 0 ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {data.return >= 0 ? '+' : ''}{data.return.toFixed(2)}%
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {formatCurrency(data.value)}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Asset Allocation Chart */}
          <div className={`lg:col-span-1 p-6 rounded-2xl border ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Allocation
              </h3>
              <PieChart className="h-5 w-5 text-blue-500" />
            </div>

            <div className="space-y-4">
              {portfolioAssets.slice(0, 5).map((asset, index) => (
                <div key={asset.symbol} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ 
                      backgroundColor: [
                        '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#6B7280'
                      ][index] 
                    }}
                  ></div>
                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{asset.icon}</span>
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {asset.symbol}
                      </span>
                    </div>
                    <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {asset.allocation}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between text-sm">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Total Assets
                </span>
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {portfolioAssets.length}
                </span>
              </div>
            </div>
          </div>

          {/* Portfolio Performance Chart */}
          <div className={`lg:col-span-2 p-6 rounded-2xl border ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Performance Chart
              </h3>
              <div className="flex items-center space-x-2">
                <LineChart className="h-5 w-5 text-emerald-500" />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {timeframe}
                </span>
              </div>
            </div>

            <div className="h-64 flex items-center justify-center">
              <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold">Portfolio Performance Chart</p>
                <p className="text-sm">Advanced charting with technical analysis</p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Activity className="h-4 w-4 animate-pulse text-emerald-500" />
                  <span className="text-sm">Real-time portfolio tracking...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assets List */}
        <div className={`rounded-2xl border ${
          darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
        } backdrop-blur-sm overflow-hidden mb-8`}>
          
          {/* Assets Header */}
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Assets
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Live prices
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setHideSmallBalances(!hideSmallBalances)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    hideSmallBalances
                      ? (darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600')
                      : (darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  <span>Hide small</span>
                </button>

                <div className="flex rounded-lg p-1 bg-gray-700">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-400'
                    }`}
                  >
                    <BarChart3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-400'
                    }`}
                  >
                    <Activity className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Assets Grid/List */}
          {viewMode === 'grid' ? (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioAssets
                  .filter(asset => !hideSmallBalances || asset.value > 100)
                  .map((asset) => (
                  <div key={asset.symbol} className={`p-6 rounded-xl border transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'bg-gray-700/30 border-gray-600/50' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{asset.icon}</div>
                        <div>
                          <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {asset.symbol}
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {asset.name}
                          </div>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        asset.status === 'up' 
                          ? (darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                          : asset.status === 'down'
                          ? (darkMode ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600')
                          : (darkMode ? 'bg-gray-500/10 text-gray-400' : 'bg-gray-50 text-gray-600')
                      }`}>
                        {asset.allocation}%
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Holdings
                        </span>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {formatNumber(asset.amount)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Value
                        </span>
                        <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {formatCurrency(asset.value)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          24h Change
                        </span>
                        <div className={`flex items-center space-x-1 ${
                          asset.change24h >= 0 ? 'text-emerald-500' : 'text-red-500'
                        }`}>
                          {asset.change24h >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                          <span className="font-semibold">
                            {Math.abs(asset.change24h).toFixed(2)}%
                          </span>
                        </div>
                      </div>

                      <div className={`pt-3 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            P&L
                          </span>
                          <div className={`text-right ${
                            asset.profitPercent >= 0 ? 'text-emerald-500' : 'text-red-500'
                          }`}>
                            <div className="font-semibold">
                              {formatCurrency(asset.profit)}
                            </div>
                            <div className="text-xs">
                              {asset.profitPercent >= 0 ? '+' : ''}{asset.profitPercent.toFixed(2)}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`px-6 py-4 text-left text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Asset
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Holdings
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Price
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Value
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      24h Change
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      P&L
                    </th>
                    <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Allocation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioAssets
                    .filter(asset => !hideSmallBalances || asset.value > 100)
                    .map((asset) => (
                    <tr key={asset.symbol} className={`border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-xl">{asset.icon}</div>
                          <div>
                            <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {asset.symbol}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {asset.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-right font-mono ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatNumber(asset.amount)}
                      </td>
                      <td className={`px-6 py-4 text-right font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatCurrency(asset.price)}
                      </td>
                      <td className={`px-6 py-4 text-right font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatCurrency(asset.value)}
                      </td>
                      <td className={`px-6 py-4 text-right ${
                        asset.change24h >= 0 ? 'text-emerald-500' : 'text-red-500'
                      }`}>
                        <div className="flex items-center justify-end space-x-1">
                          {asset.change24h >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                          <span className="font-semibold">
                            {Math.abs(asset.change24h).toFixed(2)}%
                          </span>
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-right ${
                        asset.profitPercent >= 0 ? 'text-emerald-500' : 'text-red-500'
                      }`}>
                        <div className="text-right">
                          <div className="font-semibold">
                            {formatCurrency(asset.profit)}
                          </div>
                          <div className="text-xs">
                            {asset.profitPercent >= 0 ? '+' : ''}{asset.profitPercent.toFixed(2)}%
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-right`}>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                          asset.allocation > 20 
                            ? (darkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-600')
                            : asset.allocation > 10
                            ? (darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600')
                            : (darkMode ? 'bg-gray-500/10 text-gray-400' : 'bg-gray-50 text-gray-600')
                        }`}>
                          {asset.allocation}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Transaction History */}
        <div className={`rounded-2xl border ${
          darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
        } backdrop-blur-sm overflow-hidden mb-8`}>
          
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Transactions
              </h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className={`pl-10 pr-4 py-2 rounded-lg border text-sm ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  darkMode ? 'border-gray-600 text-gray-400 hover:text-white' : 'border-gray-300 text-gray-600 hover:text-gray-900'
                }`}>
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Filter</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Type
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Asset
                  </th>
                  <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Amount
                  </th>
                  <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Price
                  </th>
                  <th className={`px-6 py-4 text-right text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Value
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Date
                  </th>
                  <th className={`px-6 py-4 text-center text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((tx) => (
                  <tr key={tx.id} className={`border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors`}>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-lg text-sm font-semibold ${
                        tx.type === 'buy' 
                          ? (darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                          : tx.type === 'sell'
                          ? (darkMode ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600')
                          : (darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600')
                      }`}>
                        {tx.type === 'buy' ? <ArrowUpRight className="h-3 w-3" /> : 
                         tx.type === 'sell' ? <ArrowDownRight className="h-3 w-3" /> : 
                         <Upload className="h-3 w-3" />}
                        {tx.type.toUpperCase()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xs`}>
                          {tx.asset}
                        </div>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {tx.asset}
                        </span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-right font-mono ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatNumber(tx.amount)}
                    </td>
                    <td className={`px-6 py-4 text-right font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatCurrency(tx.price)}
                    </td>
                    <td className={`px-6 py-4 text-right font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatCurrency(tx.value)}
                    </td>
                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{tx.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold ${
                        tx.status === 'completed' 
                          ? (darkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                          : (darkMode ? 'bg-yellow-500/10 text-yellow-400' : 'bg-yellow-50 text-yellow-600')
                      }`}>
                        {tx.status === 'completed' ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                        {tx.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Showing 5 of 127 transactions
              </span>
              <button className={`px-4 py-2 rounded-lg border transition-colors ${
                darkMode ? 'border-gray-600 text-gray-400 hover:text-white' : 'border-gray-300 text-gray-600 hover:text-gray-900'
              }`}>
                View all transactions
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button className={`p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700 hover:border-emerald-500/50' : 'bg-white border-gray-200 hover:border-emerald-500/50'
          } backdrop-blur-sm group`}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'} group-hover:scale-110 transition-transform`}>
                <Plus className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="text-left">
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Buy Crypto
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Add to portfolio
                </div>
              </div>
            </div>
          </button>

          <button className={`p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700 hover:border-red-500/50' : 'bg-white border-gray-200 hover:border-red-500/50'
          } backdrop-blur-sm group`}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-red-500/10' : 'bg-red-50'} group-hover:scale-110 transition-transform`}>
                <Minus className="h-6 w-6 text-red-500" />
              </div>
              <div className="text-left">
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Sell Assets
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Take profits
                </div>
              </div>
            </div>
          </button>

          <button className={`p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-500/50'
          } backdrop-blur-sm group`}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'} group-hover:scale-110 transition-transform`}>
                <Upload className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-left">
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Deposit
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Add funds
                </div>
              </div>
            </div>
          </button>

          <button className={`p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50' : 'bg-white border-gray-200 hover:border-purple-500/50'
          } backdrop-blur-sm group`}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-purple-500/10' : 'bg-purple-50'} group-hover:scale-110 transition-transform`}>
                <Star className="h-6 w-6 text-purple-500" />
              </div>
              <div className="text-left">
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Staking
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Earn rewards
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Portfolio Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Risk Analysis */}
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Risk Analysis
              </h3>
              <Shield className="h-5 w-5 text-orange-500" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Portfolio Risk Score
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    7.2/10
                  </span>
                  <div className={`px-2 py-1 rounded text-xs font-semibold ${
                    darkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-600'
                  }`}>
                    HIGH
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Volatility
                  </span>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    High (±15.2%)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Diversification
                  </span>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Moderate
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Correlation
                  </span>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    0.87
                  </span>
                </div>
              </div>

              <div className={`mt-4 p-3 rounded-lg border ${
                darkMode ? 'bg-yellow-500/5 border-yellow-500/20' : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <div className="text-sm text-yellow-600">
                    <span className="font-medium">Recommendation:</span> Consider diversifying into stablecoins or other asset classes to reduce risk.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Market Insights
              </h3>
              <Target className="h-5 w-5 text-blue-500" />
            </div>

            <div className="space-y-6">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Strong Market Momentum
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Your portfolio is well-positioned for the current bull market. BTC and ETH showing strong correlation with institutional flows.
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Rebalancing Opportunity
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Consider taking profits from SOL (+8.25%) and redistributing to underperforming assets like ETH.
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-500/10' : 'bg-purple-50'}`}>
                    <Crown className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Premium Suggestion
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Upgrade to access advanced portfolio analytics, automated rebalancing, and tax optimization strategies.
                    </div>
                    <button className="mt-2 px-3 py-1 bg-purple-500 text-white rounded-lg text-xs font-semibold hover:bg-purple-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}