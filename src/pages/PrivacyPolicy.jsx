import React from "react";
import { Link } from "react-router-dom";
import { 
  FaLock, 
  FaArrowRight, 
  FaShieldAlt, 
  FaUserSecret,
  FaDatabase,
  FaShareAlt,
  FaClock,
  FaUserCheck,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaRegCalendarAlt,
  FaFileAlt
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 rounded-full bg-violet-500/10 mb-4">
            <FaLock className="text-violet-400 text-3xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Your privacy matters. Learn how we collect, use, and protect your information.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
            <FaRegCalendarAlt className="text-amber-400 text-xs" />
            <span>Last Updated: January 2026</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-violet-500/30 shadow-2xl overflow-hidden">
          
          {/* Introduction */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" /> Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              PSWB Business Private Limited ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use 
              our platform, services, or visit our website.
            </p>
            <div className="mt-3 p-3 bg-amber-500/10 rounded-lg border-l-4 border-amber-500">
              <p className="text-sm text-amber-300">
                <strong>Note:</strong> We are a private platform providing support services and are not a government entity.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaDatabase className="text-cyan-400" /> Information We Collect
            </h2>
            <p className="text-gray-300 mb-3">
              We may collect the following types of information:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <h3 className="font-semibold text-green-400 mb-2">Personal Information</h3>
                <p className="text-gray-400 text-sm">Name, email address, phone number, and basic identification details provided by users for service requests.</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <h3 className="font-semibold text-yellow-400 mb-2">User-Submitted Data</h3>
                <p className="text-gray-400 text-sm">Information and documents voluntarily submitted by users for processing requests and support services.</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl">
                <h3 className="font-semibold text-blue-400 mb-2">Usage Data</h3>
                <p className="text-gray-400 text-sm">Information about how users interact with our platform, including device information and usage patterns.</p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaUserSecret className="text-purple-400" /> How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-3">
              We use the collected information for:
            </p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Processing user requests and submitted information</li>
              <li>Providing support services and assistance</li>
              <li>Communicating updates related to user requests</li>
              <li>Improving our platform and user experience</li>
              <li>Maintaining platform security and preventing misuse</li>
            </ul>
          </div>

          {/* Data Sharing and Disclosure */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaShareAlt className="text-orange-400" /> Data Sharing and Disclosure
            </h2>
            <p className="text-gray-300 mb-3">
              We may share your information with:
            </p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate and improve our platform</li>
              <li><strong>Legal Requirements:</strong> When required to comply with applicable laws or to protect our rights</li>
            </ul>
            <div className="mt-3 p-3 bg-green-500/10 rounded-lg border-l-4 border-green-500">
              <p className="text-sm text-green-300">
                <strong>We do not sell, rent, or trade your personal information to third parties.</strong>
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaShieldAlt className="text-emerald-400" /> Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement reasonable technical and organizational measures to protect your information 
              from unauthorized access, misuse, or disclosure. However, no system can guarantee complete security.
            </p>
          </div>

          {/* Data Retention */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaClock className="text-yellow-400" /> Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We retain user data only as long as necessary to provide services, fulfill legal obligations, 
              and resolve disputes.
            </p>
          </div>

          {/* Your Rights */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaUserCheck className="text-green-400" /> Your Rights
            </h2>
            <p className="text-gray-300 mb-3">You have the right to:</p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> Contact Us
            </h2>
            <p className="text-gray-300 mb-3">
              If you have any questions about this Privacy Policy or our practices, please contact us at:
            </p>
            <div className="space-y-2 text-gray-400">
              <p><strong>Email:</strong> <a href="mailto:privacy@pswinners.com" className="text-violet-400 hover:underline">privacy@pswinners.com</a></p>
              <p><strong>Address:</strong> PSWB Business Private Limited, India</p>
            </div>
          </div>

          {/* Important Notice / Disclaimer */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-red-500/5 to-orange-500/5">
            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/30">
              <FaExclamationTriangle className="text-red-400 text-xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Important Note:</h3>
                <p className="text-sm text-gray-400">
                  PSWB Business Private Limited is a private platform and does not represent any government organization.
                  We do not provide financial services, loans, or direct government services.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="p-6 sm:p-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-violet-500/20"
            >
              <FaArrowRight />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PSWB Business Private Limited | All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;