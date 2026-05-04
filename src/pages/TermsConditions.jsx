// src/pages/TermsConditions.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFileContract, FaArrowRight } from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-16 px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-violet-400 mb-8 text-center">
          <FaFileContract className="inline mr-3 mb-1" />
          Terms & Conditions
        </h1>
        
        <div className="text-gray-300 space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-600/10 border border-violet-500/30 rounded-xl p-6 mb-6">
            <p className="text-violet-300 font-semibold text-center">
              Effective Date: January 2024
            </p>
          </div>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">1. Acceptance of Terms</h3>
            <div className="space-y-3">
              <p>
                By accessing or using the services of PSWB Business Private Limited 
                ("Company", "we", "our", or "us"), including but not limited to S-D Card 
                registration, agricultural services, government scheme facilitation, and 
                project participation, you agree to be bound by these Terms and Conditions.
              </p>
              <p>
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">2. Services Description</h3>
            <div className="space-y-3">
              <p>
                PSWB Business Private Limited provides:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>S-D Card registration and associated benefits</li>
                <li>Organic agricultural development activities</li>
                <li>Land conversion services to organic farming</li>
                <li>Government agricultural scheme facilitation</li>
                <li>Multipurpose agricultural project development</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">3. Eligibility</h3>
            <div className="space-y-3">
              <p>
                To use our services, you must:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have valid identification documents</li>
                <li>Provide accurate and complete information</li>
                <li>Be engaged in agricultural activities (for certain services)</li>
                <li>Comply with government regulations and requirements</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">4. S-D Card Terms</h3>
            <div className="space-y-3">
              <p>
                4.1 The S-D Card is issued for agricultural purposes only and provides access 
                to specific benefits as outlined in our S-D Card program.
              </p>
              <p>
                4.2 The S-D Card is non-transferable and must be used only by the registered holder.
              </p>
              <p>
                4.3 We reserve the right to revoke S-D Card privileges for misuse or violation of terms.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">5. User Responsibilities</h3>
            <div className="space-y-3">
              <p>
                5.1 You agree to provide accurate, current, and complete information during registration 
                and use of our services.
              </p>
              <p>
                5.2 You are responsible for maintaining the confidentiality of your account information.
              </p>
              <p>
                5.3 You agree to use our services only for lawful agricultural purposes.
              </p>
              <p>
                5.4 You must comply with all applicable laws and regulations related to agriculture 
                and government schemes.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">6. Fees and Payments</h3>
            <div className="space-y-3">
              <p>
                6.1 Certain services may require payment of fees as specified at the time of service request.
              </p>
              <p>
                6.2 All fees are quoted in Indian Rupees (INR) unless otherwise specified.
              </p>
              <p>
                6.3 Payments are non-refundable except as specified in our Refund Policy.
              </p>
              <p>
                6.4 We reserve the right to change our fee structure with prior notice.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">7. Government Scheme Facilitation</h3>
            <div className="space-y-3">
              <p>
                7.1 We facilitate applications for government agricultural schemes but do not guarantee 
                scheme approval.
              </p>
              <p>
                7.2 Scheme approval is subject to government policies, eligibility criteria, and available funds.
              </p>
              <p>
                7.3 We are not responsible for delays or rejections by government authorities.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">8. Intellectual Property</h3>
            <div className="space-y-3">
              <p>
                8.1 All content, trademarks, and intellectual property on our platform belong to 
                PSWB Business Private Limited.
              </p>
              <p>
                8.2 You may not reproduce, distribute, or create derivative works without our 
                written permission.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">9. Limitation of Liability</h3>
            <div className="space-y-3">
              <p>
                9.1 We are not liable for any indirect, incidental, or consequential damages arising 
                from use of our services.
              </p>
              <p>
                9.2 Our total liability shall not exceed the fees paid by you for the specific service.
              </p>
              <p>
                9.3 We are not responsible for agricultural outcomes, crop yields, or market prices.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">10. Termination</h3>
            <div className="space-y-3">
              <p>
                10.1 We may terminate or suspend your access to services for violation of these terms.
              </p>
              <p>
                10.2 You may terminate your relationship with us by providing written notice.
              </p>
              <p>
                10.3 Upon termination, your right to use our services immediately ceases.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">11. Governing Law</h3>
            <div className="space-y-3">
              <p>
                11.1 These terms shall be governed by and construed in accordance with the laws of India.
              </p>
              <p>
                11.2 Any disputes shall be subject to the exclusive jurisdiction of courts in India.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">12. Changes to Terms</h3>
            <div className="space-y-3">
              <p>
                12.1 We reserve the right to modify these terms at any time.
              </p>
              <p>
                12.2 Continued use of our services after changes constitutes acceptance of new terms.
              </p>
            </div>
          </section>

          <section className="bg-gray-900/30 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-violet-300 mb-4">13. Contact Information</h3>
            <div className="space-y-3">
              <p>
                For any questions about these Terms and Conditions, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@pswinners.com<br />
                <strong>Address:</strong> PSWB Business Private Limited<br />
                Legal Department, Agricultural Development Zone, India<br />
                <strong>Phone:</strong> +91 9876543210
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

export default TermsConditions;