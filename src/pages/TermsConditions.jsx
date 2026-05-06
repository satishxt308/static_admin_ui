import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFileContract, 
  FaArrowRight, 
  FaGavel, 
  FaShieldAlt, 
  FaUserCheck, 
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaBalanceScale,
  FaCopyright
} from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 rounded-full bg-violet-500/10 mb-4">
            <FaFileContract className="text-violet-400 text-3xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
            <FaRegCalendarAlt className="text-amber-400 text-xs" />
            <span>Effective Date: January 2026</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-violet-500/30 shadow-2xl overflow-hidden">
          
          {/* Acceptance of Terms */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaUserCheck className="text-green-400" /> 1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using the services of PSWB Business Private Limited ("Company", "we", "our", or "us"), 
              you agree to be bound by these Terms and Conditions.
            </p>
            <div className="mt-3 p-3 bg-red-500/10 rounded-lg border-l-4 border-red-500">
              <p className="text-sm text-gray-300">
                <strong className="text-red-400">Important:</strong> If you do not agree to these terms, 
                please do not use our platform.
              </p>
            </div>
          </div>

          {/* Services Description */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" /> 2. Services Description
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              PSWB Business Private Limited is a private platform that provides:
            </p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>User registration and profile management</li>
              <li>Document submission and support services</li>
              <li>Guidance related to farming and general service processes</li>
              <li>Participation in platform-based projects and activities</li>
            </ul>
            <div className="mt-3 p-3 bg-amber-500/10 rounded-lg">
              <p className="text-sm text-amber-300">
                <strong>Note:</strong> We do not provide financial services, loans, or direct government services.
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaUserCheck className="text-cyan-400" /> 3. Eligibility
            </h2>
            <p className="text-gray-300 mb-3">To use our services, you must:</p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Be at least 18 years of age</li>
              <li>Provide accurate and complete information</li>
              <li>Use the platform for lawful purposes only</li>
            </ul>
          </div>

          {/* User Account */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaShieldAlt className="text-purple-400" /> 4. User Account
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Users may create an account to access platform services.</li>
              <li>You are responsible for maintaining the confidentiality of your account information.</li>
              <li>We reserve the right to suspend or terminate accounts in case of misuse or violation of these terms.</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaUserCheck className="text-emerald-400" /> 5. User Responsibilities
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>You agree to provide accurate and up-to-date information.</li>
              <li>You agree not to misuse the platform or submit false or misleading data.</li>
              <li>You agree to comply with applicable laws and regulations.</li>
            </ul>
          </div>

          {/* Fees and Payments */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaMoneyBillWave className="text-yellow-400" /> 6. Fees and Payments
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Some services may require fees, which will be clearly communicated before use.</li>
              <li>All payments are non-refundable unless stated otherwise in our Refund Policy.</li>
              <li>We may update pricing from time to time.</li>
            </ul>
          </div>

          {/* Service Disclaimer */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaExclamationTriangle className="text-orange-400" /> 7. Service Disclaimer
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>All services provided are for support and guidance purposes only.</li>
              <li>Submission of information or documents does not guarantee approval of any request.</li>
              <li>We are not responsible for outcomes related to third-party or external services.</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaCopyright className="text-pink-400" /> 8. Intellectual Property
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>All content, trademarks, and materials on the platform are owned by PSWB Business Private Limited.</li>
              <li>You may not copy, distribute, or reuse content without permission.</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaBalanceScale className="text-red-400" /> 9. Limitation of Liability
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>We are not liable for indirect or incidental damages arising from the use of our platform.</li>
              <li>Our liability is limited to the amount paid (if any) for the specific service.</li>
            </ul>
          </div>

          {/* Termination */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaGavel className="text-gray-400" /> 10. Termination
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>We may suspend or terminate access for violation of these terms.</li>
              <li>Users may stop using the platform at any time.</li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaBalanceScale className="text-blue-400" /> 11. Governing Law
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>These terms are governed by the laws of India.</li>
              <li>Any disputes shall be subject to the jurisdiction of courts in India.</li>
            </ul>
          </div>

          {/* Changes to Terms */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaRegCalendarAlt className="text-cyan-400" /> 12. Changes to Terms
            </h2>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>We may update these terms at any time.</li>
              <li>Continued use of the platform means acceptance of the updated terms.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> 13. Contact Information
            </h2>
            <p className="text-gray-300 mb-3">
              For questions regarding these Terms, contact us:
            </p>
            <div className="space-y-2 text-gray-400">
              <p><strong>Email:</strong> <a href="mailto:legal@pswinners.com" className="text-violet-400 hover:underline">legal@pswinners.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919876543210" className="text-violet-400 hover:underline">+91 9876543210</a></p>
              <p><strong>Address:</strong> PSWB Business Private Limited, India</p>
            </div>
          </div>

          {/* Important Notice / Disclaimer */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-red-500/5 to-orange-500/5">
            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/30">
              <FaExclamationTriangle className="text-red-400 text-xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Important Notice:</h3>
                <p className="text-sm text-gray-400">
                  PSWB Business Private Limited is a private platform and is not affiliated with any government organization.
                  We do not provide loans, financial services, or direct government scheme services.
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

export default TermsConditions;