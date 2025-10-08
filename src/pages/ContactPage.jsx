import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-2">+91-95999 53923</p>
              <p className="text-gray-600">011-4191-6615</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Email Us</h3>
              <p className="text-gray-600">sales@timewatchindia.com</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Visit Us</h3>
              <p className="text-gray-600">D-162, Okhla Phase - I</p>
              <p className="text-gray-600">New Delhi - 110020</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Send Us a Message</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="Subject" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="Your message..."></textarea>
                </div>
                <button className="w-full px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}