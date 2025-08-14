"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, 
  ArrowUpRight, ArrowDownRight, Eye, EyeOff, RefreshCw, Settings,
  Plus, Minus, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2,
  Clock, AlertTriangle, CheckCircle, XCircle, Star, BookOpen,
  Zap, Shield, Globe, Users, Target, Crown, Flame, Moon, Sun
} from 'lucide-react';

export default function TradingPage() {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [orderType, setOrderType] = useState('market');
  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [isWatching, setIsWatching] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(67432.50);
  const [priceChange, setPriceChange] = useState(2.47);
  const [volume, setVolume] = useState(1247896);
  const [marketCap, setMarketCap] = useState(1324500000000);

  // Simulated real-time data
  useEffect(() => {
    const interval = setInterval(() => {
      const volatility = 0.001;
      const change = (Math.random() - 0.5) * 2 * volatility * currentPrice;
      setCurrentPrice(prev => Math.max(0, prev + change));
      setPriceChange((Math.random() - 0.5) * 2);
      setVolume(prev => prev + (Math.random() - 0.5) * 10000);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentPrice]);

  const cryptoList = [
    { symbol: 'BTC', name: 'Bitcoin', price: 67432.50, change: 2.47, volume: 1247896, icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: -1.23, volume: 892345, icon: 'Ξ' },
    { symbol: 'BNB', name: 'Binance', price: 342.56, change: 4.12, volume: 234567, icon: '🔶' },
    { symbol: 'SOL', name: 'Solana', price: 156.78, change: -2.45, volume: 456789, icon: '◎' },
    { symbol: 'ADA', name: 'Cardano', price: 0.487, change: 3.67, volume: 123456, icon: '₳' },
  ];

  const recentTrades = [
    { time: '14:32:15', type: 'buy', price: 67432.50, amount: 0.0234, total: 1578.40 },
    { time: '14:31:58', type: 'sell', price: 67420.12, amount: 0.1567, total: 10567.89 },
    { time: '14:31:42', type: 'buy', price: 67445.78, amount: 0.0892, total: 6016.12 },
    { time: '14:31:28', type: 'sell', price: 67401.23, amount: 0.2345, total: 15805.69 },
    { time: '14:31:15', type: 'buy', price: 67456.90, amount: 0.0678, total: 4573.58 },
  ];

  const orderBook = {
    asks: [
      { price: 67445.50, amount: 0.2344, total: 15806.72 },
      { price: 67443.20, amount: 0.1567, total: 10567.89 },
      { price: 67441.80, amount: 0.3456, total: 23289.45 },
      { price: 67440.30, amount: 0.0892, total: 6016.12 },
      { price: 67438.90, amount: 0.1234, total: 8324.56 },
    ],
    bids: [
      { price: 67432.10, amount: 0.1876, total: 12647.83 },
      { price: 67430.50, amount: 0.2567, total: 17305.46 },
      { price: 67428.70, amount: 0.0987, total: 6655.21 },
      { price: 67426.90, amount: 0.3421, total: 23067.45 },
      { price: 67425.30, amount: 0.1654, total: 11153.87 },
    ]
  };

  const portfolioData = [
    { asset: 'BTC', amount: 2.34567, value: 158234.67, change: 2.45 },
    { asset: 'ETH', amount: 15.6789, value: 54234.12, change: -1.23 },
    { asset: 'BNB', amount: 234.567, value: 80345.23, change: 4.12 },
    { asset: 'USDT', amount: 15678.90, value: 15678.90, change: 0.00 },
  ];

  const handleTrade = () => {
    // Simulate trade execution
    console.log('Trade executed:', { type: tradeType, amount, price, orderType });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      {/* Header Controls */}
      <div className={`sticky top-16 z-40 border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            
            {/* Trading Pair Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                  ₿
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    BTC/USDT
                  </h1>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Bitcoin
                    </span>
                    <div className="flex items-center space-x-1">
                      <Crown className="h-3 w-3 text-yellow-500" />
                      <span className="text-yellow-500 font-semibold">#1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Info */}
              <div className="hidden md:flex items-center space-x-8">
                <div>
                  <div className={`text-3xl font-bold tabular-nums ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className={`flex items-center space-x-2 text-sm ${
                    priceChange >= 0 ? 'text-emerald-500' : 'text-red-500'
                  }`}>
                    {priceChange >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    <span className="font-semibold">{priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%</span>
                    <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>24h</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>24h Volume</div>
                  <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ${volume.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Market Cap</div>
                  <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ${(marketCap / 1e9).toFixed(1)}B
                  </div>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsWatching(!isWatching)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  isWatching 
                    ? (darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600')
                    : (darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900')
                }`}
              >
                {isWatching ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  soundEnabled 
                    ? (darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600')
                    : (darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600')
                }`}
              >
                {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Trading Interface */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          
          {/* Market List - Left Sidebar */}
          <div className="lg:col-span-1 xl:col-span-1">
            <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
            } backdrop-blur-sm`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Markets</h3>
                <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
              </div>
              
              <div className="space-y-3">
                {cryptoList.map((crypto) => (
                  <button
                    key={crypto.symbol}
                    onClick={() => setSelectedCrypto(crypto.symbol)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                      selectedCrypto === crypto.symbol
                        ? (darkMode ? 'bg-orange-500/20 border-orange-500/50' : 'bg-orange-50 border-orange-200')
                        : (darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50')
                    } border border-transparent`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{crypto.icon}</span>
                        <div>
                          <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {crypto.symbol}
                          </div>
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {crypto.name}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          ${crypto.price.toLocaleString()}
                        </div>
                        <div className={`text-xs font-semibold ${
                          crypto.change >= 0 ? 'text-emerald-500' : 'text-red-500'
                        }`}>
                          {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chart Area */}
          <div className="lg:col-span-2 xl:col-span-3">
            <div className={`rounded-2xl border transition-colors duration-300 ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
            } backdrop-blur-sm overflow-hidden`}>
              
              {/* Chart Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Price Chart
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Live</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {['1m', '5m', '15m', '1h', '4h', '1d'].map((timeframe) => (
                      <button
                        key={timeframe}
                        className={`px-3 py-1 text-sm rounded-lg transition-all duration-200 ${
                          timeframe === '1h'
                            ? (darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600')
                            : (darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100')
                        }`}
                      >
                        {timeframe}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart Area - Simulated */}
              <div className="h-96 p-6 flex items-center justify-center">
                <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Advanced TradingView Chart</p>
                  <p className="text-sm">Real-time candlestick chart with technical indicators</p>
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <Activity className="h-4 w-4 animate-pulse" />
                    <span className="text-sm">Live market data streaming...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Panel - Right Sidebar */}
          <div className="lg:col-span-1 xl:col-span-2">
            <div className="space-y-6">
              
              {/* Order Book */}
              <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
                darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              } backdrop-blur-sm`}>
                <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Order Book
                </h3>
                
                {/* Asks */}
                <div className="space-y-2 mb-4">
                  <div className={`text-xs font-semibold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    ASKS
                  </div>
                  {orderBook.asks.map((order, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className={`tabular-nums ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                        {order.price.toFixed(2)}
                      </span>
                      <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {order.amount.toFixed(4)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Spread */}
                <div className={`text-center py-3 border-y border-gray-600 mb-4 ${
                  darkMode ? 'bg-gray-700/30' : 'bg-gray-100'
                } rounded-lg`}>
                  <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Spread: $12.40
                  </span>
                </div>

                {/* Bids */}
                <div className="space-y-2">
                  <div className={`text-xs font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    BIDS
                  </div>
                  {orderBook.bids.map((order, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className={`tabular-nums ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        {order.price.toFixed(2)}
                      </span>
                      <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {order.amount.toFixed(4)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trading Form */}
              <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
                darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              } backdrop-blur-sm`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Place Order
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Pro
                    </span>
                  </div>
                </div>

                {/* Buy/Sell Toggle */}
                <div className="flex mb-6">
                  <button
                    onClick={() => setTradeType('buy')}
                    className={`flex-1 py-3 px-4 rounded-l-xl font-semibold transition-all duration-200 ${
                      tradeType === 'buy'
                        ? 'bg-emerald-500 text-white'
                        : (darkMode ? 'bg-gray-700 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900')
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setTradeType('sell')}
                    className={`flex-1 py-3 px-4 rounded-r-xl font-semibold transition-all duration-200 ${
                      tradeType === 'sell'
                        ? 'bg-red-500 text-white'
                        : (darkMode ? 'bg-gray-700 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900')
                    }`}
                  >
                    Sell
                  </button>
                </div>

                {/* Order Type */}
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Order Type
                  </label>
                  <select
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                    className={`w-full p-3 rounded-xl border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="market">Market</option>
                    <option value="limit">Limit</option>
                    <option value="stop">Stop Loss</option>
                    <option value="take-profit">Take Profit</option>
                  </select>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Amount (BTC)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00000000"
                      className={`w-full p-3 rounded-xl border transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <button className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">25%</button>
                      <button className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">50%</button>
                      <button className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">MAX</button>
                    </div>
                  </div>
                </div>

                {/* Price Input (for limit orders) */}
                {orderType === 'limit' && (
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Price (USDT)
                    </label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      className={`w-full p-3 rounded-xl border transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                )}

                {/* Total */}
                <div className="mb-6">
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    Total: ~${((parseFloat(amount) || 0) * currentPrice).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleTrade}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-200 transform hover:scale-105 ${
                    tradeType === 'buy'
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
                      : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                  }`}
                >
                  {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedCrypto}
                </button>

                {/* Balance Info */}
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="flex justify-between items-center text-sm">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Available:</span>
                    <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      15,678.90 USDT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Recent Trades & Portfolio */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Recent Trades */}
          <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Trades
              </h3>
              <button className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode ? 'bg-gray-700 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}>
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-gray-500 pb-2 border-b border-gray-600">
                <span>Time</span>
                <span>Type</span>
                <span>Price</span>
                <span>Amount</span>
              </div>
              {recentTrades.map((trade, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 text-sm py-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {trade.time}
                  </span>
                  <span className={`font-semibold ${
                    trade.type === 'buy' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {trade.type.toUpperCase()}
                  </span>
                  <span className={`tabular-nums ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ${trade.price.toLocaleString()}
                  </span>
                  <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {trade.amount} BTC
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Overview */}
          <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Portfolio
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total: $308,492.92
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {portfolioData.map((asset, index) => (
                <div key={index} className={`p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                  darkMode ? 'bg-gray-700/30' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm`}>
                        {asset.asset}
                      </div>
                      <div>
                        <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {asset.amount} {asset.asset}
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          ${asset.value.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${
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

            <button className={`w-full mt-4 py-3 px-4 rounded-xl border border-dashed transition-all duration-200 hover:scale-[1.02] ${
              darkMode 
                ? 'border-gray-600 text-gray-400 hover:text-white hover:border-gray-500' 
                : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400'
            }`}>
              <Plus className="h-4 w-4 mx-auto" />
            </button>
          </div>
        </div>

        {/* Advanced Trading Tools */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Market Analysis */}
          <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technical Analysis
              </h3>
              <Target className="h-5 w-5 text-blue-500" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>RSI (14)</span>
                <span className="text-sm font-semibold text-orange-400">67.2</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>MACD</span>
                <span className="text-sm font-semibold text-emerald-400">Bullish</span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Support</span>
                <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$65,420</span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resistance</span>
                <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$69,850</span>
              </div>

              <div className={`mt-4 p-3 rounded-lg ${
                darkMode ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-600">Strong Buy Signal</span>
                </div>
              </div>
            </div>
          </div>

          {/* News & Alerts */}
          <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Market News
              </h3>
              <BookOpen className="h-5 w-5 text-purple-500" />
            </div>

            <div className="space-y-4">
              <div className={`p-3 rounded-lg border-l-4 border-orange-500 ${
                darkMode ? 'bg-orange-500/5' : 'bg-orange-50'
              }`}>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                  <div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Bitcoin ETF Approval News
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      Major institutional adoption expected
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                      2 hours ago
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-3 rounded-lg border-l-4 border-blue-500 ${
                darkMode ? 'bg-blue-500/5' : 'bg-blue-50'
              }`}>
                <div className="flex items-start space-x-2">
                  <Globe className="h-4 w-4 text-blue-500 mt-0.5" />
                  <div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Global Regulatory Updates
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      Positive developments in EU markets
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                      4 hours ago
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-3 rounded-lg border-l-4 border-emerald-500 ${
                darkMode ? 'bg-emerald-500/5' : 'bg-emerald-50'
              }`}>
                <div className="flex items-start space-x-2">
                  <Users className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Whale Movement Alert
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      Large BTC transfer to cold storage
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                      6 hours ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Stats
              </h3>
              <Activity className="h-5 w-5 text-green-500 animate-pulse" />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    24h High
                  </div>
                  <div className={`font-bold text-emerald-500`}>
                    $68,945
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    24h Low
                  </div>
                  <div className={`font-bold text-red-500`}>
                    $65,234
                  </div>
                </div>
              </div>

              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Fear & Greed Index
                </div>
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    72 - Greed
                  </span>
                  <div className="w-16 bg-gray-600 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>

              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Active Traders
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    47,892 online
                  </span>
                </div>
              </div>

              <div className={`p-3 rounded-lg border ${
                darkMode ? 'bg-purple-500/10 border-purple-500/20' : 'bg-purple-50 border-purple-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium text-purple-600">Premium Features</span>
                </div>
                <button className="w-full mt-2 py-2 px-3 bg-purple-500 text-white rounded-lg text-xs font-semibold hover:bg-purple-600 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}