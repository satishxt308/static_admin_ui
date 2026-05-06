import React from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaTrashAlt, 
  FaClock, 
  FaDatabase, 
  FaShieldAlt, 
  FaExclamationTriangle,
  FaMobileAlt,
  FaUser,
  FaInfoCircle,
  FaFileAlt
} from "react-icons/fa";

const Deletation = () => {
  const handleComposeEmail = () => {
    const emailBody = `Please delete my account from PSWB platform.\n\nMy registered mobile number is: [your mobile number]\nMy name is: [your full name]`;
    window.location.href = `mailto:support@pswb.co.in?subject=Account Deletion Request – PSWB&body=${encodeURIComponent(emailBody)}`;
  };

  const dataToDelete = [
    "User account information",
    "Personal details (name, mobile number, etc.)",
    "Submitted request data",
    "Uploaded documents (if any)",
    "App usage/activity data"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex p-5 rounded-full bg-red-500/10 shadow-lg shadow-red-500/10 mb-5">
            <FaTrashAlt className="text-red-400 text-4xl" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Account Deletion Request
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            We're sorry to see you go. Please follow the steps below to permanently delete your account.
          </p>
          {/* Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
            <FaExclamationTriangle className="text-amber-400 text-xs" />
            <span>PSWB is a private platform – not affiliated with any government organization</span>
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* How to Request Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-red-500/30 transition-all">
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-red-400 flex items-center gap-2">
                  <FaEnvelope className="text-red-400" /> How to Request Account Deletion
                </h2>
              </div>
              <div className="p-6 space-y-7">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center font-black text-red-400 text-lg">
                    1
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">Open your email application and compose a new email to:</p>
                    <a href="mailto:support@pswb.co.in" className="text-red-400 font-mono text-lg font-semibold hover:underline break-all inline-block mt-1">
                      support@pswb.co.in
                    </a>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center font-black text-red-400 text-lg">
                    2
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">Use this exact subject line:</p>
                    <code className="inline-block mt-1 px-4 py-2 bg-gray-900 rounded-xl text-red-300 font-mono text-sm border border-gray-700">
                      Account Deletion Request – PSWB
                    </code>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center font-black text-red-400 text-lg">
                    3
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">Include the following details in your email:</p>
                    <ul className="mt-3 space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <FaMobileAlt className="text-red-400 text-sm mt-1" />
                        <span>Your registered mobile number <span className="text-gray-500 text-xs">(used to identify your account)</span></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaUser className="text-red-400 text-sm mt-1" />
                        <span>Your full name</span>
                      </li>
                    </ul>
                    <div className="mt-3 text-xs text-gray-500 bg-gray-900/50 p-2 rounded-lg inline-flex items-center gap-1">
                      <FaInfoCircle className="text-blue-400" />
                      <span>Note: Your mobile number is used to identify your account.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Template Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/30 transition-all">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                  <FaFileAlt /> Email Template
                </h2>
              </div>
              <div className="p-6">
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-700 font-mono text-sm shadow-inner">
                  <p className="text-gray-400 text-xs mb-1">To:</p>
                  <p className="text-blue-400 font-semibold">support@pswb.co.in</p>
                  <p className="text-gray-400 text-xs mt-3 mb-1">Subject:</p>
                  <p className="text-blue-400 font-semibold">Account Deletion Request – PSWB</p>
                  <div className="border-t border-gray-700 my-4"></div>
                  <p className="text-gray-300">Please delete my account from PSWB platform.</p>
                  <p className="text-gray-300 mt-3">My registered mobile number is: <span className="text-yellow-500">[your mobile number]</span></p>
                  <p className="text-gray-300 mt-1">My name is: <span className="text-yellow-500">[your full name]</span></p>
                  <p className="text-gray-400 text-xs mt-4 italic">— Replace the bracketed information with your details</p>
                </div>
                <button 
                  onClick={handleComposeEmail}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  <FaEnvelope />
                  Compose Email Now
                </button>
              </div>
            </div>

            {/* What Data Will Be Deleted */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-green-500/30 transition-all">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-green-400 flex items-center gap-2">
                  <FaTrashAlt /> What Data Will Be Deleted
                </h2>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {dataToDelete.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-400 text-lg">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar Info */}
          <div className="space-y-6">
            
            {/* Processing Time */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-yellow-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-yellow-400 text-2xl" />
                <h3 className="text-lg font-bold text-yellow-400">Processing Time</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our support team will review your request and process the deletion within <strong className="text-yellow-400">3–5 business days</strong>.
                You will receive a confirmation once your account is deleted.
              </p>
            </div>

            {/* Data That May Be Retained */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-orange-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <FaDatabase className="text-orange-400 text-2xl" />
                <h3 className="text-lg font-bold text-orange-400">Data That May Be Retained</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Some information may be retained for a limited time if required for:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  Legal and regulatory compliance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  Fraud prevention
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  Security and system integrity
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                Any retained data will be deleted within 30–90 days, as per regulations.
              </p>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-red-400 text-2xl" />
                <h3 className="text-lg font-bold text-red-400">Important Note</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Any ongoing service request may be cancelled after account deletion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Account deletion is permanent and cannot be reversed
                </li>
              </ul>
            </div>

            {/* Need Help? */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-purple-400 text-2xl" />
                <h3 className="text-lg font-bold text-purple-400">Need Help?</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                If you have any questions about the account deletion process, please contact us at:
              </p>
              <a 
                href="mailto:support@pswb.co.in" 
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-mono"
              >
                <FaEnvelope />
                support@pswb.co.in
              </a>
            </div>

            {/* Final Disclaimer Card */}
            <div className="bg-gray-900/70 rounded-2xl border border-gray-700 p-5 text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                <FaExclamationTriangle className="inline mr-1 text-amber-500" />
                PSWB is a private platform and is not affiliated with any government organization.
                We do not provide loans, financial services, or direct government services.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
          <p>© {new Date().getFullYear()} PSWB. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Deletation;