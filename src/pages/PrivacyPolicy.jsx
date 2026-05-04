// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaArrowRight } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-16 px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-violet-400 mb-8 text-center">
          <FaLock className="inline mr-3 mb-1" />
          Privacy Policy
        </h1>
        
        <div className="text-gray-300 space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-600/10 border border-violet-500/30 rounded-xl p-6 mb-6">
            <p className="text-violet-300 font-semibold text-center">
              Last Updated: January 2024
            </p>
          </div>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Introduction</h3>
            <div className="space-y-3">
              <p>
                PSWB Business Private Limited ("we", "our", or "us") is committed to protecting your 
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our agricultural services, S-D Card program, or visit our website.
              </p>
              <p>
                We respect your privacy and are committed to protecting personally identifiable information 
                you may provide us through our services.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Information We Collect</h3>
            <div className="space-y-3">
              <p>
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Personal Information:</strong> Name, address, email, phone number, Aadhar number, 
                land ownership documents, and other identification details required for S-D Card registration 
                and agricultural schemes.</li>
                <li><strong>Agricultural Data:</strong> Farm details, crop information, land area, and 
                farming practices.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our services.</li>
                <li><strong>Government Scheme Data:</strong> Information required for processing government 
                agricultural scheme applications.</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">How We Use Your Information</h3>
            <div className="space-y-3">
              <p>
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Processing S-D Card applications and providing associated benefits</li>
                <li>Facilitating government agricultural scheme applications</li>
                <li>Providing organic farming guidance and support</li>
                <li>Improving our services and developing new agricultural projects</li>
                <li>Communicating important updates about agricultural schemes</li>
                <li>Complying with legal obligations and government requirements</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Data Sharing and Disclosure</h3>
            <div className="space-y-3">
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Government Authorities:</strong> Only when required for processing agricultural 
                schemes or as mandated by law</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in providing 
                agricultural services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Data Security</h3>
            <div className="space-y-3">
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no internet transmission is completely secure, and we cannot guarantee absolute 
                security.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Data Retention</h3>
            <div className="space-y-3">
              <p>
                We retain your personal information for as long as necessary to provide our services, 
                comply with legal obligations, resolve disputes, and enforce our agreements. Government 
                scheme data may be retained as per government regulations.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Your Rights</h3>
            <div className="space-y-3">
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Withdraw consent for data processing</li>
                <li>Request information about data sharing</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p>
                If you have any questions about this Privacy Policy or our data practices, please 
                contact us at: <br />
                <strong>Email:</strong> privacy@pswinners.com<br />
                <strong>Address:</strong> PSWB Business Private Limited, Data Protection Office, 
                Agricultural Development Zone, India
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

export default PrivacyPolicy;