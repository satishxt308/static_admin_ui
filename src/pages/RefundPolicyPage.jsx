import React from "react";
import { Link } from "react-router-dom";
import { 
  FaMoneyBillWave, 
  FaArrowRight, 
  FaClock, 
  FaEnvelope, 
  FaPhone, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaRegCalendarAlt
} from "react-icons/fa";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 rounded-full bg-violet-500/10 mb-4">
            <FaMoneyBillWave className="text-violet-400 text-3xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Refund Policy
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Understand our refund terms and conditions for various services
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
            <FaRegCalendarAlt className="text-amber-400 text-xs" />
            <span>Effective Date: January 2026</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-violet-500/30 shadow-2xl overflow-hidden">
          
          {/* Overview Section */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaMoneyBillWave className="text-violet-400" /> Refund Policy Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This Refund Policy outlines the terms under which PSWB Business Private Limited 
              ("Company", "we", "our", or "us") processes refunds for services provided through our platform.
            </p>
            <div className="mt-4 p-4 bg-gray-900/50 rounded-xl border-l-4 border-violet-500">
              <p className="text-sm text-gray-400">
                <strong className="text-violet-300">General Policy:</strong> Fees paid for services are generally 
                non-refundable once the service process has been initiated. However, refunds may be considered 
                under specific circumstances as described below.
              </p>
            </div>
          </div>

          {/* Service Fees Section */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Service Fees
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Fees paid for user services, document processing, or support requests are typically 
              non-refundable once the request has been submitted.
            </p>
            <p className="text-gray-300 mb-2 font-medium">Refunds may be considered in the following cases:</p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Duplicate payment made by mistake</li>
              <li>Technical errors resulting in multiple charges</li>
              <li>Service not delivered due to internal system issues</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Note:</strong> Refund requests must be submitted within 7 days of the payment date 
              along with relevant details.
            </p>
          </div>

          {/* Training / Program Fees Section */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaRegCalendarAlt className="text-blue-400" /> Training / Program Fees
            </h2>
            <p className="text-gray-300 mb-3">
              Refunds for training sessions or workshops are subject to the following conditions:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                <span className="text-green-400 font-semibold">7+ days before session</span>
                <p className="text-gray-300 text-sm">Up to 80% refund</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                <span className="text-yellow-400 font-semibold">3–7 days before session</span>
                <p className="text-gray-300 text-sm">Up to 50% refund</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                <span className="text-red-400 font-semibold">Less than 3 days before session</span>
                <p className="text-gray-300 text-sm">No refund</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                <span className="text-purple-400 font-semibold">Cancellation by Company</span>
                <p className="text-gray-300 text-sm">Full refund</p>
              </div>
            </div>
          </div>

          {/* Project Participation Fees Section */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaMoneyBillWave className="text-orange-400" /> Project Participation Fees
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Fees related to participation in platform-based projects are generally non-refundable 
              once the activity has started. Partial refunds may be considered in exceptional cases such as:
            </p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Project cancellation due to unforeseen circumstances</li>
              <li>Inability to deliver the service due to operational issues</li>
            </ul>
          </div>

          {/* Refund Request Process Section */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> Refund Request Process
            </h2>
            <p className="text-gray-300 mb-3">To request a refund, follow these steps:</p>
            <ol className="space-y-3 text-gray-400 ml-6 list-decimal">
              <li>Submit a request via email to <strong className="text-violet-400">refunds@pswinners.com</strong></li>
              <li>Provide your registered details and payment information</li>
              <li>Clearly mention the reason for the refund request</li>
              <li>Attach any supporting documents if applicable</li>
            </ol>
            <p className="text-sm text-gray-500 mt-4">
              All approved refunds will be processed to the original payment method.
            </p>
          </div>

          {/* Processing Time Section */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaClock className="text-yellow-400" /> Processing Time
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Refunds are typically processed within <strong className="text-yellow-400">15–30 working days</strong> after approval. 
              Processing time may vary depending on:
            </p>
            <ul className="space-y-2 text-gray-400 ml-6 list-disc">
              <li>Payment method</li>
              <li>Banking timelines</li>
              <li>Verification requirements</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="p-6 sm:p-8 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
              <FaPhone className="text-green-400" /> Contact for Refund Inquiries
            </h2>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:refunds@pswinners.com" className="text-violet-400 hover:underline">refunds@pswinners.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919876543210" className="text-violet-400 hover:underline">+91 9876543210</a></p>
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
                  We do not provide loans, financial services, or direct government services.
                  All services are provided on a request and support basis only, and approval of any request is not guaranteed.
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

export default RefundPolicyPage;