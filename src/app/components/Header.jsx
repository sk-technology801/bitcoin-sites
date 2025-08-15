
// app/components/BitcoinHeader.jsx
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

// Dynamically import Lucide icons
const icons = {
  Menu: dynamic(() => import('lucide-react').then(mod => mod.Menu)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  Bitcoin: dynamic(() => import('lucide-react').then(mod => mod.Bitcoin)),
  TrendingUp: dynamic(() => import('lucide-react').then(mod => mod.TrendingUp)),
  Wallet: dynamic(() => import('lucide-react').then(mod => mod.Wallet)),
  Bell: dynamic(() => import('lucide-react').then(mod => mod.Bell)),
  Search: dynamic(() => import('lucide-react').then(mod => mod.Search)),
  Shield: dynamic(() => import('lucide-react').then(mod => mod.Shield)),
  Globe: dynamic(() => import('lucide-react').then(mod => mod.Globe)),
  ChevronDown: dynamic(() => import('lucide-react').then(mod => mod.ChevronDown)),
  User: dynamic(() => import('lucide-react').then(mod => mod.User)),
  Settings: dynamic(() => import('lucide-react').then(mod => mod.Settings)),
  LogOut: dynamic(() => import('lucide-react').then(mod => mod.LogOut)),
  BarChart3: dynamic(() => import('lucide-react').then(mod => mod.BarChart3)),
  Zap: dynamic(() => import('lucide-react').then(mod => mod.Zap)),
  DollarSign: dynamic(() => import('lucide-react').then(mod => mod.DollarSign)),
};

export default function BitcoinHeader() {
  const pathname = usePathname();
  const router = useRouter();

  // Define navItems and userMenuItems before state hooks
  const navItems = [
    { id: 'trading', icon: icons.TrendingUp, label: 'Trading', href: '/trading', hasDropdown: true, badge: 'Live' },
    { id: 'portfolio', icon: icons.BarChart3, label: 'Portfolio', href: '/portfolio', hasDropdown: false },
    { id: 'markets', icon: icons.Globe, label: 'Markets', href: '/markets', hasDropdown: true },
    { id: 'wallet', icon: icons.Wallet, label: 'Wallet', href: '/wallet', hasDropdown: false },
    { id: 'security', icon: icons.Shield, label: 'Security', href: '/security', hasDropdown: false },
  ];

  const userMenuItems = [
    { icon: icons.User, label: 'Profile', href: '/profile' },
    { icon: icons.Settings, label: 'Settings', href: '/settings' },
    { icon: icons.DollarSign, label: 'Billing', href: '/billing', badge: 'Pro' },
    { divider: true },
    { icon: icons.LogOut, label: 'Sign Out', href: '/logout', danger: true },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [btcPrice, setBtcPrice] = useState(67432.50);
  const [priceChange, setPriceChange] = useState(2.47);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(
    navItems.find(item => item.href === pathname)?.id || 'trading'
  );
  const [errorCount, setErrorCount] = useState(0);

  const fetchBtcPrice = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true',
        { headers: { 'Accept': 'application/json' }, signal: AbortSignal.timeout(10000) }
      );
      if (!response.ok) throw new Error('Failed to fetch price');
      const data = await response.json();
      setBtcPrice(data.bitcoin.usd);
      setPriceChange(data.bitcoin.usd_24h_change);
      setLastUpdated(Date.now());
      setErrorCount(0);
    } catch (error) {
      console.error('Error fetching BTC price:', error);
      setErrorCount(prev => prev + 1);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBtcPrice();
    const interval = setInterval(fetchBtcPrice, 60000); // Increased to 60s to respect API limits
    return () => clearInterval(interval);
  }, [fetchBtcPrice]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setUserMenuOpen(false);
      setIsMenuOpen(false);
    };
    if (isMenuOpen || userMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen, userMenuOpen]);

  const formatTimestamp = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    return `${Math.floor(seconds / 3600)}h ago`;
  };

  return (
    <>
      <div className="h-16"></div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/98 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gray-800/50'
            : 'bg-gray-900/90 backdrop-blur-lg border-b border-gray-800/30'
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-yellow-600 p-2.5 rounded-2xl transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <icons.Bitcoin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BitcoinX
                </h1>
                <div className="text-xs text-gray-500 font-medium">
                  Crypto Hub
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl px-4 py-2 border border-gray-700/50">
              <span className="text-sm font-medium text-white">${btcPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
              <span className={`text-xs font-semibold ${priceChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
              </span>
              {errorCount >= 3 && (
                <div className="text-xs text-red-400">Price data unavailable</div>
              )}
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => setActiveNav(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                      activeNav === item.id
                        ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        item.badge === 'Live' ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {item.hasDropdown && (
                      <icons.ChevronDown className="h-3 w-3 opacity-60" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <button className="hidden sm:flex p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/30">
                <icons.Search className="h-5 w-5" />
              </button>

              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserMenuOpen(!userMenuOpen);
                  }}
                  className="hidden md:flex items-center space-x-2 p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/30"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <icons.User className="h-3 w-3 text-white" />
                  </div>
                  <icons.ChevronDown className={`h-3 w-3 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl py-2 z-50">
                    {userMenuItems.map((item, index) => (
                      item.divider ? (
                        <div key={index} className="my-2 h-px bg-gray-700/50"></div>
                      ) : (
                        <Link
                          key={index}
                          href={item.href}
                          className={`flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200 ${
                            item.danger 
                              ? 'text-red-400 hover:text-red-300 hover:bg-red-500/10' 
                              : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </div>
                          {item.badge && (
                            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>

              <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black px-5 py-2.5 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <icons.Wallet className="h-4 w-4" />
                <span className="hidden sm:inline">Connect</span>
                <icons.Zap className="h-3 w-3 animate-pulse" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="lg:hidden p-3 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/30"
              >
                {isMenuOpen ? <icons.X className="h-6 w-6" /> : <icons.Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden transition-all duration-300 ease-out ${
              isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="mb-4 p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    isLoading ? 'bg-yellow-500' : 'bg-emerald-500'
                  } animate-pulse`}></div>
                  <span className="font-medium text-white">Bitcoin</span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white tabular-nums">
                    ${btcPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </div>
                  <div className={`text-sm font-semibold tabular-nums ${
                    priceChange >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}% 24h
                  </div>
                  {errorCount >= 3 && (
                    <div className="text-xs text-red-400">Price data unavailable</div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                    activeNav === item.id
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        item.badge === 'Live' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.hasDropdown && <icons.ChevronDown className="h-4 w-4 opacity-60" />}
                </Link>
              ))}

              <button className="sm:hidden w-full flex items-center space-x-3 p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                <icons.Search className="h-5 w-5" />
                <span className="font-medium">Search</span>
              </button>

              <div className="md:hidden pt-2 mt-2 border-t border-gray-700/50">
                {userMenuItems.slice(0, -2).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
