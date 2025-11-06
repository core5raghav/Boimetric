import React from 'react';
import { Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About TST Technologies</h1>
          <p className="text-xl text-gray-600 mb-12">Leading provider of biometric security solutions</p>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
            <p>
              With over 15 years of excellence in biometric security, TST Technologies has established itself as a trusted partner for government agencies, Fortune 500 companies, educational institutions, and industrial facilities across India.
            </p>
            <p>
              We specialize in AFIS (Automated Fingerprint Identification Systems), facial recognition, RFID, and comprehensive access control solutions with proprietary matching algorithms.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-600">
            <div className="flex items-start gap-4">
              <Shield className="text-emerald-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  All biometric data is encrypted end-to-end using AES-256 encryption, stored securely with multi-layer protection, and handled in full compliance with GDPR and Indian data privacy standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
