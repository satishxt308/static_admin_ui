import React from "react";
import { FaEnvelope, FaPhone, FaTrashAlt, FaClock, FaDatabase, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

const Deletation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 rounded-full bg-red-500/10 mb-4">
            <FaTrashAlt className="text-red-400 text-3xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Account Deletion Request
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            We're sorry to see you go. Please follow the steps below to permanently delete your account.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Steps */}
          <div className="lg:col-span-2 space-y-6">
            {/* How to Request Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-red-400">How to Request Account Deletion</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-gray-300">
                        Open your email application and compose a new email to:
                      </p>
                      <a 
                        href="mailto:support@pswb.co.in" 
                        className="text-red-400 font-mono hover:underline break-all"
                      >
                        support@pswb.co.in
                      </a>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-gray-300">Use this exact subject line:</p>
                      <code className="inline-block mt-1 px-3 py-1 bg-gray-900 rounded-lg text-red-300 font-mono text-sm border border-gray-700">
                        Account Deletion Request – PSWB
                      </code>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-gray-300">Include this information in your email:</p>
                      <ul className="mt-2 space-y-1 text-gray-400 list-disc list-inside">
                        <li>Your registered mobile number <span className="text-gray-500 text-sm">(the one you used to log in)</span></li>
                        <li>Your full name</li>
                      </ul>
                      <p className="text-xs text-gray-500 mt-2">
                        Note: Your mobile number is your account identifier. No account ID is needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Template */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-blue-400">Email Template</h2>
              </div>
              <div className="p-6">
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-700 font-mono text-sm">
                  <p className="text-gray-400">To: <span className="text-blue-400">support@pswb.co.in</span></p>
                  <p className="text-gray-400 mt-2">Subject: <span className="text-blue-400">Account Deletion Request – PSWB</span></p>
                  <div className="border-t border-gray-700 my-4"></div>
                  <p className="text-gray-300">Please delete my account from PSWB application.</p>
                  <p className="text-gray-300 mt-3">My registered mobile number is: <span className="text-yellow-500">[your mobile number]</span></p>
                  <p className="text-gray-300 mt-1">My name is: <span className="text-yellow-500">[your full name]</span></p>
                  <p className="text-gray-400 text-xs mt-4 italic">— Replace the bracketed information with your details</p>
                </div>
                <button 
                  onClick={() => {
                    const emailBody = `Please delete my account from PSWB application.\n\nMy registered mobile number is: [your mobile number]\nMy name is: [your full name]`;
                    window.location.href = `mailto:support@pswb.co.in?subject=Account Deletion Request – PSWB&body=${encodeURIComponent(emailBody)}`;
                  }}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all duration-300"
                >
                  <FaEnvelope />
                  Compose Email Now
                </button>
              </div>
            </div>

            {/* What Data Will Be Deleted */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-green-400">What Data Will Be Deleted</h2>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Your user account information",
                    "Personal details (name, mobile number, etc.)",
                    "Loan application data",
                    "Uploaded documents (if any)",
                    "App usage/activity data"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-400">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Processing Time */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-yellow-400 text-xl" />
                <h3 className="text-lg font-semibold text-yellow-400">Processing Time</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our support team will review your request and process the deletion within <strong className="text-yellow-400">3–5 business days</strong>.
                You will receive a confirmation once your account is deleted.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaDatabase className="text-orange-400 text-xl" />
                <h3 className="text-lg font-semibold text-orange-400">Data That May Be Retained</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Some information may be retained for a limited time if required for:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  Government compliance and legal obligations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  Fraud prevention
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  Security purposes
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                Any retained data will be automatically deleted within 30–90 days, as per regulations.
              </p>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-red-400 text-xl" />
                <h3 className="text-lg font-semibold text-red-400">Important Note</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Any ongoing loan application or government benefit request may be cancelled after account deletion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  You will not be able to recover your account once it is deleted
                </li>
              </ul>
            </div>

            {/* Need Help */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-purple-400 text-xl" />
                <h3 className="text-lg font-semibold text-purple-400">Need Help?</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                If you have any questions about the account deletion process, please contact us at:
              </p>
              <a 
                href="mailto:support@pswb.co.in" 
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <FaEnvelope />
                support@pswb.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
          <p>© {new Date().getFullYear()} PSWB. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Deletation;