
// app/components/Footer.jsx
'use client';
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import Lucide icons
const icons = {
  Bitcoin: dynamic(() => import('lucide-react').then(mod => mod.Bitcoin)),
  Mail: dynamic(() => import('lucide-react').then(mod => mod.Mail)),
  HelpCircle: dynamic(() => import('lucide-react').then(mod => mod.HelpCircle)),
  Twitter: dynamic(() => import('lucide-react').then(mod => mod.Twitter)),
  MessageCircle: dynamic(() => import('lucide-react').then(mod => mod.MessageCircle)),
  Github: dynamic(() => import('lucide-react').then(mod => mod.Github)),
  Send: dynamic(() => import('lucide-react').then(mod => mod.Send)),
  Moon: dynamic(() => import('lucide-react').then(mod => mod.Moon)),
  Sun: dynamic(() => import('lucide-react').then(mod => mod.Sun)),
  TrendingUp: dynamic(() => import('lucide-react').then(mod => mod.TrendingUp)),
  BarChart3: dynamic(() => import('lucide-react').then(mod => mod.BarChart3)),
  Globe: dynamic(() => import('lucide-react').then(mod => mod.Globe)),
  Wallet: dynamic(() => import('lucide-react').then(mod => mod.Wallet)),
  Shield: dynamic(() => import('lucide-react').then(mod => mod.Shield)),
  User: dynamic(() => import('lucide-react').then(mod => mod.User)),
  Settings: dynamic(() => import('lucide-react').then(mod => mod.Settings)),
  DollarSign: dynamic(() => import('lucide-react').then(mod => mod.DollarSign)),
  LogOut: dynamic(() => import('lucide-react').then(mod => mod.LogOut)),
};

export default function Footer() {
  const [darkMode, setDarkMode] = useState(true);
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Simulate API call or show success message
  }, [email]);

  const navItems = [
    { icon: icons.TrendingUp, label: 'Trading', href: '/trading' },
    { icon: icons.BarChart3, label: 'Portfolio', href: '/portfolio' },
    { icon: icons.Globe, label: 'Markets', href: '/markets' },
    { icon: icons.Wallet, label: 'Wallet', href: '/wallet' },
    { icon: icons.Shield, label: 'Security', href: '/security' },
    { icon: icons.User, label: 'Profile', href: '/profile' },
    { icon: icons.Settings, label: 'Settings', href: '/settings' },
    { icon: icons.DollarSign, label: 'Billing', href: '/billing' },
    { icon: icons.LogOut, label: 'Logout', href: '/logout' },
  ];

  const socialLinks = [
    { icon: icons.Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: icons.MessageCircle, label: 'Discord', href: 'https://discord.com' },
    { icon: icons.Send, label: 'Telegram', href: 'https://telegram.org' },
    { icon: icons.Github, label: 'GitHub', href: 'https://github.com/sk-technology801' },
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${
      darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-gray-50 border-gray-200'
    } backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-yellow-600 p-2.5 rounded-2xl transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <icons.Bitcoin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className={`text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent`}>
                  BitcoinX
                </h2>
                <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Crypto Hub
                </span>
              </div>
            </Link>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering wealth creation with cutting-edge crypto tools.
            </p>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 sm:p-2.5 rounded-lg transition-all duration-200 ${
                darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'
              }`}
            >
              {darkMode ? <icons.Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <icons.Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className={`text-sm sm:text-base font-semibold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className={`text-sm sm:text-base font-semibold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact and Newsletter */}
          <div>
            <h3 className={`text-sm sm:text-base font-semibold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:support@bitcoinx.com"
                className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors duration-200 ${
                  darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <icons.Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>support@bitcoinx.com</span>
              </a>
              <a
                href="/support"
                className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors duration-200 ${
                  darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <icons.HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Support Center</span>
              </a>
            </div>
            <div className="mt-4 sm:mt-6">
              <h3 className={`text-sm sm:text-base font-semibold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Newsletter
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`flex-1 p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
                <button
                  type="submit"
                  className={`p-2 sm:p-3 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                    darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                  }`}
                >
                  <icons.Send className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700/50 text-center">
          <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} BitcoinX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
