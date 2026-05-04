// src/pages/RefundPolicyPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-16 px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-violet-400 mb-8 text-center">
          <FaMoneyBillWave className="inline mr-3 mb-1" />
          Refund Policy
        </h1>
        
        <div className="text-gray-300 space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-600/10 border border-violet-500/30 rounded-xl p-6 mb-6">
            <p className="text-violet-300 font-semibold text-center">
              Effective Date: January 2024
            </p>
          </div>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Refund Policy Overview</h3>
            <div className="space-y-3">
              <p>
                This Refund Policy ("Policy") outlines the terms and conditions under which 
                PSWB Business Private Limited ("Company", "we", "our", or "us") processes 
                refunds for various services and fees.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">S-D Card Application Fees</h3>
            <div className="space-y-3">
              <p>
                S-D Card application fees are generally non-refundable once the application 
                process has been initiated. However, refunds may be considered in the following 
                exceptional circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Duplicate payment made by mistake</li>
                <li>Application rejected due to company error</li>
                <li>Technical error causing multiple charges</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> Refund requests must be submitted within 7 days of payment 
                along with supporting documentation.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Training Program Fees</h3>
            <div className="space-y-3">
              <p>
                Refunds for training programs and workshops are subject to the following conditions:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Cancellation 7+ days before program:</strong> 80% refund</li>
                <li><strong>Cancellation 3-7 days before program:</strong> 50% refund</li>
                <li><strong>Cancellation less than 3 days before program:</strong> No refund</li>
                <li><strong>Program cancellation by Company:</strong> Full refund</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Project Participation Fees</h3>
            <div className="space-y-3">
              <p>
                Fees paid for participation in agricultural projects are generally non-refundable 
                once the project has commenced. Partial refunds may be considered in the following 
                circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Project cancellation due to unforeseen circumstances</li>
                <li>Force majeure events preventing project execution</li>
                <li>Government order or regulatory requirement changes</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Government Scheme Processing Fees</h3>
            <div className="space-y-3">
              <p>
                Processing fees for government agricultural schemes are non-refundable once 
                the application has been submitted to government authorities. These fees cover 
                administrative costs, documentation, and processing services.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Refund Request Process</h3>
            <div className="space-y-3">
              <p>
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>Submit a written refund request to refunds@pswinners.com</li>
                <li>Include your S-D Card number (if applicable) and payment details</li>
                <li>Provide reason for refund request with supporting documents</li>
                <li>Allow 15-30 working days for processing</li>
              </ol>
              <p className="mt-4">
                All refunds will be processed to the original payment method.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Processing Time</h3>
            <div className="space-y-3">
              <p>
                Refund requests will be processed within 15-30 working days from the date of 
                approval. Processing time may vary depending on:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Payment method used</li>
                <li>Bank processing times</li>
                <li>Complexity of the refund request</li>
                <li>Verification requirements</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Contact for Refund Inquiries</h3>
            <div className="space-y-3">
              <p>
                For any questions regarding refunds or to check the status of a refund request, 
                please contact:
              </p>
              <p>
                <strong>Email:</strong> refunds@pswinners.com<br />
                <strong>Phone:</strong> +91 9876543210 (Refund Department)<br />
                <strong>Hours:</strong> Monday-Friday, 10:00 AM - 5:00 PM IST
              </p>
            </div>
          </section>

          <div className="text-center pt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            >
              <FaArrowRight />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;