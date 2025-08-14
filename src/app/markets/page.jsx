
"use client";
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, 
  ArrowUpRight, ArrowDownRight, Eye, EyeOff, RefreshCw, Settings,
  Plus, Minus, Download, Upload, Share2, Filter, Search, 
  Calendar, Clock, AlertTriangle, CheckCircle, XCircle, Star,
  Zap, Shield, Globe, Users, Target, Crown, Flame, Moon, Sun,
  PieChart, LineChart, Wallet, CreditCard, History, Bell,
  Volume2, VolumeX, Play, Pause, Bookmark, ExternalLink, Info
} from 'lucide-react';
import Link from 'next/link';

export default function MarketPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [timeframe, setTimeframe] = useState('24h');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('market_cap');
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(new Set(['BTC', 'ETH', 'BNB']));
  const [isLoading, setIsLoading] = useState(false);

  // Market overview data
  const [marketStats, setMarketStats] = useState({
    totalMarketCap: 2456789123456,
    marketCapChange: 3.45,
    totalVolume: 123456789123,
    volumeChange: -2.34,
    btcDominance: 54.2,
    ethDominance: 18.7,
    fearGreedIndex: 72,
    activeCoins: 13457
  });

  // Simulate market data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketStats(prev => ({
        ...prev,
        totalMarketCap: prev.totalMarketCap + (Math.random() - 0.5) * 1000000000,
        marketCapChange: (Math.random() - 0.5) * 5,
        totalVolume: prev.totalVolume + (Math.random() - 0.5) * 1000000000,
        volumeChange: (Math.random() - 0.5) * 8,
        btcDominance: Math.max(45, Math.min(60, prev.btcDominance + (Math.random() - 0.5) * 0.5)),
        ethDominance: Math.max(15, Math.min(25, prev.ethDominance + (Math.random() - 0.5) * 0.3)),
        fearGreedIndex: Math.max(0, Math.min(100, prev.fearGreedIndex + (Math.random() - 0.5) * 2))
      }));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const marketData = [
    {
      rank: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: '₿',
      price: 67432.50,
      marketCap: 1320456789123,
      volume24h: 28456789123,
      change1h: 0.45,
      change24h: 2.45,
      change7d: 8.23,
      supply: 19678234,
      maxSupply: 21000000,
      category: 'layer1',
      isNew: false,
      isHot: true
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      icon: 'Ξ',
      price: 3456.78,
      marketCap: 415678912345,
      volume24h: 18234567890,
      change1h: -0.23,
      change24h: -1.23,
      change7d: 4.56,
      supply: 120234567,
      maxSupply: null,
      category: 'layer1',
      isNew: false,
      isHot: true
    },
    {
      rank: 3,
      symbol: 'USDT',
      name: 'Tether',
      icon: '₮',
      price: 1.00,
      marketCap: 98765432109,
      volume24h: 45678912345,
      change1h: 0.00,
      change24h: 0.01,
      change7d: 0.00,
      supply: 98765432109,
      maxSupply: null,
      category: 'stablecoin',
      isNew: false,
      isHot: false
    },
    {
      rank: 4,
      symbol: 'BNB',
      name: 'BNB',
      icon: '🔶',
      price: 342.56,
      marketCap: 52345678901,
      volume24h: 1234567890,
      change1h: 1.23,
      change24h: 4.12,
      change7d: -2.34,
      supply: 152800000,
      maxSupply: 200000000,
      category: 'exchange',
      isNew: false,
      isHot: true
    },
    {
      rank: 5,
      symbol: 'SOL',
      name: 'Solana',
      icon: '◎',
      price: 156.78,
      marketCap: 72345678901,
      volume24h: 2345678901,
      change1h: 0.89,
      change24h: -2.45,
      change7d: 12.45,
      supply: 461234567,
      maxSupply: null,
      category: 'layer1',
      isNew: false,
      isHot: true
    },
    {
      rank: 6,
      symbol: 'ADA',
      name: 'Cardano',
      icon: '₳',
      price: 0.62,
      marketCap: 22345678901,
      volume24h: 456789012,
      change1h: -0.45,
      change24h: 3.67,
      change7d: -1.23,
      supply: 36012345678,
      maxSupply: 45000000000,
      category: 'layer1',
      isNew: false,
      isHot: false
    },
    {
      rank: 7,
      symbol: 'AVAX',
      name: 'Avalanche',
      icon: '🔺',
      price: 28.45,
      marketCap: 11234567890,
      volume24h: 234567890,
      change1h: 2.34,
      change24h: 6.78,
      change7d: 15.23,
      supply: 394567890,
      maxSupply: 720000000,
      category: 'layer1',
      isNew: false,
      isHot: true
    },
    {
      rank: 8,
      symbol: 'DOGE',
      name: 'Dogecoin',
      icon: '🐕',
      price: 0.089,
      marketCap: 12789012345,
      volume24h: 567890123,
      change1h: 0.12,
      change24h: -3.45,
      change7d: 8.90,
      supply: 143678901234,
      maxSupply: null,
      category: 'meme',
      isNew: false,
      isHot: false
    },
    {
      rank: 9,
      symbol: 'LINK',
      name: 'Chainlink',
      icon: '🔗',
      price: 16.78,
      marketCap: 9876543210,
      volume24h: 345678901,
      change1h: 1.56,
      change24h: 2.34,
      change7d: -4.56,
      supply: 567890123,
      maxSupply: 1000000000,
      category: 'oracle',
      isNew: false,
      isHot: false
    },
    {
      rank: 10,
      symbol: 'MATIC',
      name: 'Polygon',
      icon: '💜',
      price: 0.95,
      marketCap: 8765432109,
      volume24h: 234567890,
      change1h: -0.78,
      change24h: 5.67,
      change7d: 12.34,
      supply: 9234567890,
      maxSupply: 10000000000,
      category: 'scaling',
      isNew: false,
      isHot: true
    },
    {
      rank: 45,
      symbol: 'PEPE',
      name: 'Pepe',
      icon: '🐸',
      price: 0.00000123,
      marketCap: 520456789,
      volume24h: 123456789,
      change1h: 5.67,
      change24h: 23.45,
      change7d: 156.78,
      supply: 420690000000000,
      maxSupply: 420690000000000,
      category: 'meme',
      isNew: true,
      isHot: true
    }
  ];

  const trendingCoins = [
    { symbol: 'PEPE', name: 'Pepe', change: 156.78, searchRank: 1 },
    { symbol: 'AVAX', name: 'Avalanche', change: 15.23, searchRank: 2 },
    { symbol: 'MATIC', name: 'Polygon', change: 12.34, searchRank: 3 },
    { symbol: 'SOL', name: 'Solana', change: 12.45, searchRank: 4 },
    { symbol: 'DOGE', name: 'Dogecoin', change: 8.90, searchRank: 5 },
    { symbol: 'BTC', name: 'Bitcoin', change: 8.23, searchRank: 6 }
  ];

  const categories = [
    { id: 'all', name: 'All Coins', count: marketData.length },
    { id: 'layer1', name: 'Layer 1', count: marketData.filter(c => c.category === 'layer1').length },
    { id: 'defi', name: 'DeFi', count: 45 },
    { id: 'meme', name: 'Meme', count: marketData.filter(c => c.category === 'meme').length },
    { id: 'stablecoin', name: 'Stablecoins', count: marketData.filter(c => c.category === 'stablecoin').length },
    { id: 'gaming', name: 'Gaming', count: 23 },
    { id: 'ai', name: 'AI', count: 18 },
    { id: 'metaverse', name: 'Metaverse', count: 12 }
  ];

  const formatCurrency = (amount, decimals = 2) => {
    if (amount < 0.01 && amount > 0) {
      return `$${amount.toExponential(2)}`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(amount);
  };

  const formatMarketCap = (amount) => {
    if (amount >= 1e12) return `$${(amount / 1e12).toFixed(2)}T`;
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(2)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(2)}M`;
    return formatCurrency(amount);
  };

  const toggleFavorite = (symbol) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(symbol)) {
      newFavorites.delete(symbol);
    } else {
      newFavorites.add(symbol);
    }
    setFavorites(newFavorites);
  };

  const filteredData = marketData
    .filter(coin => {
      const matchesCategory = category === 'all' || coin.category === category;
      const matchesSearch = coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           coin.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFavorites = !showFavorites || favorites.has(coin.symbol);
      return matchesCategory && matchesSearch && matchesFavorites;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap': return b.marketCap - a.marketCap;
        case 'price': return b.price - a.price;
        case 'change24h': return b.change24h - a.change24h;
        case 'volume': return b.volume24h - a.volume24h;
        default: return a.rank - b.rank;
      }
    });

  const getFearGreedColor = (value) => {
    if (value <= 25) return 'text-red-500';
    if (value <= 50) return 'text-orange-500';
    if (value <= 75) return 'text-yellow-500';
    return 'text-emerald-500';
  };

  const getFearGreedLabel = (value) => {
    if (value <= 25) return 'Extreme Fear';
    if (value <= 50) return 'Fear';
    if (value <= 75) return 'Greed';
    return 'Extreme Greed';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Header Spacer */}
      <div className="h-16"></div>

      {/* Header */}
      <div className={`sticky top-16 z-40 border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            {/* Title & Live Indicator */}
            <div className="flex items-center space-x-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Market
                  </h1>
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-emerald-500/10">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-500 text-sm font-semibold">LIVE</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Market Cap:
                    </span>
                    <span className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatMarketCap(marketStats.totalMarketCap)}
                    </span>
                    <div className={`flex items-center space-x-1 ${
                      marketStats.marketCapChange >= 0 ? 'text-emerald-500' : 'text-red-500'
                    }`}>
                      {marketStats.marketCapChange >= 0 ? 
                        <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" /> : 
                        <ArrowDownRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      }
                      <span className="text-xs sm:text-sm font-semibold">
                        {Math.abs(marketStats.marketCapChange).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      24h Volume:
                    </span>
                    <span className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatMarketCap(marketStats.totalVolume)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Search */}
              <div className="relative w-full sm:w-auto">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <input
                  type="text"
                  placeholder="Search coins..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full sm:w-48 md:w-64 pl-10 pr-4 py-2 rounded-xl border text-sm ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500'
                  }`}
                />
              </div>

              {/* Favorites Toggle */}
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className={`p-2 rounded-xl transition-colors ${
                  showFavorites
                    ? (darkMode ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white')
                    : (darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900')
                }`}
                aria-label={showFavorites ? "Show all coins" : "Show favorite coins"}
              >
                <Star className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* View Mode Toggle */}
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className={`p-2 rounded-xl transition-colors ${
                  darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label={viewMode === 'grid' ? "Switch to list view" : "Switch to grid view"}
              >
                {viewMode === 'grid' ? <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" /> : <LineChart className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>

              {/* Refresh */}
              <button
                className={`p-2 rounded-xl transition-colors ${
                  darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Refresh market data"
              >
                <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl transition-colors ${
                  darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Market Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* BTC Dominance */}
          <div className={`p-4 sm:p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                BTC Dominance
              </span>
              <div className="text-lg sm:text-xl">₿</div>
            </div>
            <div className={`text-xl sm:text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {marketStats.btcDominance.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all" 
                style={{ width: `${marketStats.btcDominance}%` }}
              ></div>
            </div>
          </div>

          {/* ETH Dominance */}
          <div className={`p-4 sm:p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                ETH Dominance
              </span>
              <div className="text-lg sm:text-xl">Ξ</div>
            </div>
            <div className={`text-xl sm:text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {marketStats.ethDominance.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all" 
                style={{ width: `${marketStats.ethDominance * 4}%` }}
              ></div>
            </div>
          </div>

          {/* Fear & Greed Index */}
          <div className={`p-4 sm:p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Fear & Greed
              </span>
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
            </div>
            <div className={`text-xl sm:text-2xl font-bold mb-1 ${getFearGreedColor(marketStats.fearGreedIndex)}`}>
              {marketStats.fearGreedIndex}
            </div>
            <div className={`text-xs sm:text-sm ${getFearGreedColor(marketStats.fearGreedIndex)}`}>
              {getFearGreedLabel(marketStats.fearGreedIndex)}
            </div>
          </div>

          {/* Active Coins */}
          <div className={`p-4 sm:p-6 rounded-2xl border transition-all duration-200 hover:scale-105 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Active Coins
              </span>
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
            </div>
            <div className={`text-xl sm:text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {marketStats.activeCoins.toLocaleString()}
            </div>
            <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Cryptocurrencies
            </div>
          </div>
        </div>

        {/* Trending & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {/* Trending Coins */}
          <div className={`p-4 sm:p-6 rounded-2xl border ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                🔥 Trending
              </h3>
              <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              {trendingCoins.slice(0, 6).map((coin, index) => (
                <Link
                  key={coin.symbol}
                  href={`/markets/${coin.symbol.toLowerCase()}`}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-700/20 ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === 0 ? 'bg-orange-500 text-white' :
                    index === 1 ? 'bg-gray-400 text-white' :
                    index === 2 ? 'bg-yellow-600 text-white' :
                    darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {coin.symbol}
                    </div>
                    <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {coin.name}
                    </div>
                  </div>
                  <div className={`text-right ${
                    coin.change >= 0 ? 'text-emerald-500' : 'text-red-500'
                  }`}>
                    <div className="flex items-center justify-end space-x-1">
                      {coin.change >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      <span className="font-semibold text-xs sm:text-sm">
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className={`lg:col-span-2 p-4 sm:p-6 rounded-2xl border ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Categories
              </h3>
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`p-3 sm:p-4 rounded-xl border transition-all duration-200 hover:scale-105 ${
                    category === cat.id
                      ? (darkMode ? 'bg-orange-500/20 border-orange-500 text-orange-400' : 'bg-orange-100 border-orange-500 text-orange-600')
                      : (darkMode ? 'bg-gray-700/30 border-gray-600 text-gray-300 hover:border-gray-500' : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300')
                  }`}
                >
                  <div className="font-semibold text-xs sm:text-sm">{cat.name}</div>
                  <div className="text-xs opacity-70 mt-1">{cat.count} coins</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Market Data */}
        <div className={`rounded-2xl border ${
          darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
        } backdrop-blur-sm overflow-hidden mb-8`}>
          {/* Market Data Header */}
          <div className="p-4 sm:p-6 border-b border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Cryptocurrencies
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {filteredData.length} coins
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:outline-none focus:border-orange-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500'
                  }`}
                >
                  <option value="rank">Rank</option>
                  <option value="market_cap">Market Cap</option>
                  <option value="price">Price</option>
                  <option value="change24h">24h Change</option>
                  <option value="volume">24h Volume</option>
                </select>
                {/* Timeframe */}
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className={`px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:outline-none focus:border-orange-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500'
                  }`}
                >
                  <option value="1h">1H</option>
                  <option value="24h">24H</option>
                  <option value="7d">7D</option>
                </select>
              </div>
            </div>
          </div>

          {/* Market Data Content */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-orange-500"></div>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 sm:p-6">
              {filteredData.map((coin) => (
                <Link
                  key={coin.symbol}
                  href={`/markets/${coin.symbol.toLowerCase()}`}
                  className={`p-4 rounded-xl border transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'bg-gray-800/30 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg sm:text-xl">{coin.icon}</div>
                      <div>
                        <div className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {coin.name}
                        </div>
                        <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {coin.symbol} #{coin.rank}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(coin.symbol);
                      }}
                      className="p-1"
                      aria-label={favorites.has(coin.symbol) ? `Remove ${coin.name} from favorites` : `Add ${coin.name} to favorites`}
                    >
                      <Star
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${favorites.has(coin.symbol) ? 'text-orange-500 fill-orange-500' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                      />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Price</span>
                      <span className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatCurrency(coin.price, coin.price < 1 ? 4 : 2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Market Cap</span>
                      <span className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatMarketCap(coin.marketCap)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {timeframe === '1h' ? '1h Change' : timeframe === '24h' ? '24h Change' : '7d Change'}
                      </span>
                      <div className={`flex items-center space-x-1 ${
                        (timeframe === '1h' ? coin.change1h : timeframe === '24h' ? coin.change24h : coin.change7d) >= 0 ? 'text-emerald-500' : 'text-red-500'
                      }`}>
                        {(timeframe === '1h' ? coin.change1h : timeframe === '24h' ? coin.change24h : coin.change7d) >= 0 ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        <span className="font-semibold text-xs sm:text-sm">
                          {Math.abs(timeframe === '1h' ? coin.change1h : timeframe === '24h' ? coin.change24h : coin.change7d).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {coin.isHot && (
                        <div className="flex items-center space-x-1 text-orange-500">
                          <Flame className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs font-semibold">Hot</span>
                        </div>
                      )}
                      {coin.isNew && (
                        <div className="flex items-center space-x-1 text-blue-500">
                          <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs font-semibold">New</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 sm:p-6">
              <div className="hidden sm:grid grid-cols-12 gap-2 sm:gap-4 text-xs sm:text-sm font-medium border-b border-gray-700/50 pb-2 mb-4">
                <div className="col-span-1 text-center">Rank</div>
                <div className="col-span-3">Coin</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">
                  {timeframe === '1h' ? '1h Change' : timeframe === '24h' ? '24h Change' : '7d Change'}
                </div>
                <div className="col-span-2 text-right">Market Cap</div>
                <div className="col-span-2 text-right">24h Volume</div>
              </div>
              <div className="space-y-2">
                {filteredData.map((coin) => (
                  <Link
                    key={coin.symbol}
                    href={`/markets/${coin.symbol.toLowerCase()}`}
                    className={`block sm:grid sm:grid-cols-12 gap-2 sm:gap-4 items-center p-3 sm:p-4 rounded-lg transition-all duration-200 hover:bg-gray-700/20 ${
                      darkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
                  >
                    <div className="sm:col-span-1 text-center sm:text-sm text-xs">
                      <span className={` ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        #{coin.rank}
                      </span>
                    </div>
                    <div className="sm:col-span-3 flex items-center space-x-2 sm:space-x-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(coin.symbol);
                        }}
                        className="p-1"
                        aria-label={favorites.has(coin.symbol) ? `Remove ${coin.name} from favorites` : `Add ${coin.name} to favorites`}
                      >
                        <Star
                          className={`h-4 w-4 sm:h-4 sm:w-4 ${favorites.has(coin.symbol) ? 'text-orange-500 fill-orange-500' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        />
                      </button>
                      <div className="text-lg sm:text-xl">{coin.icon}</div>
                      <div>
                        <div className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {coin.name}
                        </div>
                        <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {coin.symbol}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {coin.isHot && <Flame className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />}
                        {coin.isNew && <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />}
                      </div>
                    </div>
                    <div className="sm:col-span-2 text-right mt-2 sm:mt-0">
                      <span className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatCurrency(coin.price, coin.price < 1 ? 4 : 2)}
                      </span>
                    </div>
                    <div className="sm:col-span-2 text-right mt-2 sm:mt-0">
                      <div className={`flex items-center justify-end space-x-1 ${
                        (timeframe === '1h' ? coin.change1h : timeframe === '24h' ? coin.change24h : coin.change7d) >= 0 ? 'text-emerald-500' : 'text-red-500'
                      }`}>
                        {(timeframe === '1h' ? coin.change1h : timeframe === '24h' ? coin.change24h : coin.change7d) >= 0 ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        <span className="font-semibold text-xs sm:text-sm">
                          {Math.abs(timeframe === '1h' ? coin.change1h : timeframe === '24h' ? coin.change24h : coin.change7d).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-2 text-right mt-2 sm:mt-0">
                      <span className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatMarketCap(coin.marketCap)}
                      </span>
                    </div>
                    <div className="sm:col-span-2 text-right mt-2 sm:mt-0">
                      <span className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatMarketCap(coin.volume24h)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
