
// app/logout/page.jsx
'use client';
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamically import Lucide icons
const icons = {
  LogOut: dynamic(() => import('lucide-react').then(mod => mod.LogOut)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  Moon: dynamic(() => import('lucide-react').then(mod => mod.Moon)),
  Sun: dynamic(() => import('lucide-react').then(mod => mod.Sun)),
};

export default function LogoutPage() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const handleLogout = useCallback(() => {
    console.log('User logged out');
    // Simulate logout logic (e.g., clear session, redirect to login)
    router.push('/login');
  }, [router]);

  const handleCancel = useCallback(() => {
    // Redirect to profile or dashboard
    router.push('/profile');
  }, [router]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <icons.LogOut className={`h-6 w-6 sm:h-8 sm:w-8 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
              <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Logout
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className={`w-full max-w-md rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
        } backdrop-blur-sm`}>
          <div className="text-center">
            <icons.LogOut className={`h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
            <h2 className={`text-base sm:text-lg font-bold mb-2 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Are you sure you want to log out?
            </h2>
            <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Logging out will end your current session. You'll need to sign in again to access your account.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={handleLogout}
                className={`py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white`}
              >
                Log Out
              </button>
              <button
                onClick={handleCancel}
                className={`py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
