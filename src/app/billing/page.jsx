
// app/billing/page.jsx
'use client';
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lucide icons
const icons = {
  CreditCard: dynamic(() => import('lucide-react').then(mod => mod.CreditCard)),
  DollarSign: dynamic(() => import('lucide-react').then(mod => mod.DollarSign)),
  History: dynamic(() => import('lucide-react').then(mod => mod.History)),
  Package: dynamic(() => import('lucide-react').then(mod => mod.Package)),
  Moon: dynamic(() => import('lucide-react').then(mod => mod.Moon)),
  Sun: dynamic(() => import('lucide-react').then(mod => mod.Sun)),
  X: dynamic(() => import('lucide-react').then(mod => mod.X)),
  Trash: dynamic(() => import('lucide-react').then(mod => mod.Trash)),
  CheckCircle: dynamic(() => import('lucide-react').then(mod => mod.CheckCircle)),
  AlertTriangle: dynamic(() => import('lucide-react').then(mod => mod.AlertTriangle)),
};

export default function BillingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(null); // 'add-payment', 'edit-payment', 'change-plan'
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Visa', last4: '1234', expiry: '12/26' },
    { id: 2, type: 'MasterCard', last4: '5678', expiry: '09/25' },
  ]);
  const [newPayment, setNewPayment] = useState({ cardNumber: '', expiry: '', cvc: '' });
  const [billingHistory, setBillingHistory] = useState([
    { id: 1, date: '2025-08-01', amount: 49.99, status: 'Paid', invoiceId: 'INV001' },
    { id: 2, date: '2025-07-01', amount: 49.99, status: 'Paid', invoiceId: 'INV002' },
    { id: 3, date: '2025-06-01', amount: 49.99, status: 'Pending', invoiceId: 'INV003' },
  ]);
  const [currentPlan, setCurrentPlan] = useState('Premium');

  const handleAddPayment = useCallback(() => {
    const newId = paymentMethods.length + 1;
    setPaymentMethods([...paymentMethods, { id: newId, type: 'Card', last4: newPayment.cardNumber.slice(-4), expiry: newPayment.expiry }]);
    setNewPayment({ cardNumber: '', expiry: '', cvc: '' });
    setModalOpen(null);
    console.log('Payment method added:', newPayment);
  }, [newPayment, paymentMethods]);

  const handleRemovePayment = useCallback((id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    console.log(`Payment method ${id} removed`);
  }, [paymentMethods]);

  const handleChangePlan = useCallback((plan) => {
    setCurrentPlan(plan);
    setModalOpen(null);
    console.log(`Plan changed to: ${plan}`);
  }, []);

  const handleDownloadInvoice = useCallback((invoiceId) => {
    console.log(`Downloading invoice: ${invoiceId}`);
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
              <icons.CreditCard className={`h-6 w-6 sm:h-8 sm:w-8 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
              <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Billing
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
          {/* Subscription Details */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Subscription Details
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.Package className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Current Plan
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} mt-1`}>
                  {currentPlan} Plan
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.DollarSign className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Billing Cycle
                  </span>
                </div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-white' : 'text-gray-900'} mt-1`}>
                  Monthly
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <icons.DollarSign className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Next Payment
                  </span>
                </div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-white' : 'text-gray-900'} mt-1`}>
                  September 1, 2025
                </div>
              </div>
              <button
                onClick={() => setModalOpen('change-plan')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                Manage Subscription
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Payment Methods
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={() => setModalOpen('add-payment')}
                className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                  darkMode ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                }`}
              >
                <icons.CreditCard className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-1 sm:mr-2" />
                Add Payment Method
              </button>
              <div className="space-y-2 sm:space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className={`p-2 sm:p-3 rounded-lg flex items-center justify-between ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                    <div>
                      <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {method.type} ending in {method.last4}
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Expires {method.expiry}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemovePayment(method.id)}
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

          {/* Billing History */}
          <div className={`lg:col-span-1 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Billing History
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-xs font-semibold text-gray-500 pb-2 border-b border-gray-600">
                  <span>Date</span>
                  <span>Amount</span>
                  <span>Status</span>
                  <span>Invoice</span>
                </div>
                {billingHistory.map((entry) => (
                  <div key={entry.id} className="grid grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm py-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <span className={`tabular-nums ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {entry.date}
                    </span>
                    <span className={` ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ${entry.amount.toFixed(2)}
                    </span>
                    <span className={`flex items-center space-x-1 sm:space-x-2 ${
                      entry.status === 'Paid' ? 'text-emerald-400' : 'text-yellow-400'
                    }`}>
                      {entry.status === 'Paid' ? (
                        <icons.CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      ) : (
                        <icons.AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                      <span>{entry.status}</span>
                    </span>
                    <button
                      onClick={() => handleDownloadInvoice(entry.invoiceId)}
                      className={`text-blue-400 hover:text-blue-500 transition-colors text-xs sm:text-sm`}
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan Upgrade/Downgrade */}
          <div className={`lg:col-span-2 rounded-2xl border p-4 sm:p-6 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
          } backdrop-blur-sm`}>
            <h2 className={`text-base sm:text-lg font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Plan Upgrade/Downgrade
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {['Basic', 'Premium', 'Enterprise'].map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setModalOpen('change-plan')}
                    className={`py-3 sm:py-4 px-3 sm:px-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                      currentPlan === plan
                        ? darkMode
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-emerald-100 text-emerald-600'
                        : darkMode
                          ? 'bg-gray-700/30 text-gray-400 hover:bg-gray-700'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {plan} Plan
                  </button>
                ))}
              </div>
              <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Current Plan: {currentPlan}
              </div>
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
                {modalOpen === 'add-payment' ? 'Add Payment Method' : 'Change Plan'}
              </h2>
              <button
                onClick={() => setModalOpen(null)}
                className={`p-1 sm:p-2 rounded-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <icons.X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {modalOpen === 'add-payment' ? (
                <>
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={newPayment.cardNumber}
                      onChange={(e) => setNewPayment({ ...newPayment, cardNumber: e.target.value })}
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
                        value={newPayment.expiry}
                        onChange={(e) => setNewPayment({ ...newPayment, expiry: e.target.value })}
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
                        value={newPayment.cvc}
                        onChange={(e) => setNewPayment({ ...newPayment, cvc: e.target.value })}
                        placeholder="123"
                        className={`w-full p-2 sm:p-3 rounded-xl border text-xs sm:text-sm transition-colors duration-200 ${
                          darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleAddPayment}
                    className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700`}
                  >
                    Add Payment Method
                  </button>
                </>
              ) : (
                <>
                  <div className="space-y-3 sm:space-y-4">
                    {['Basic', 'Premium', 'Enterprise'].map((plan) => (
                      <button
                        key={plan}
                        onClick={() => handleChangePlan(plan)}
                        className={`w-full py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                          currentPlan === plan
                            ? darkMode
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-emerald-100 text-emerald-600'
                            : darkMode
                              ? 'bg-gray-700/30 text-gray-400 hover:bg-gray-700'
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {plan} Plan
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => handleChangePlan(currentPlan)}
                    className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700`}
                  >
                    Confirm Plan Change
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
