import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicyPage from './pages/RefundPolicyPage';
import TermsConditions from './pages/TermsConditions';
import Deletation from './pages/Deletation'; // 👈 add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/deletation" element={<Deletation />} /> {/* 👈 new route */}
      </Routes>
    </Router>
  );
}

export default App;