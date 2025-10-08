import React from 'react';

export default function Footer({ navigate }) {
  return (
    <>
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <img src="https://www.timewatchindia.com/static/media/logo.ca8f78e2.png" alt="TimeWatch" className="h-12 mb-4" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500 text-2xl">★★★★★</span>
                <span className="font-bold">4.8</span>
              </div>
              <p className="text-sm text-gray-600">Reviews 1200+</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate('home')} className="text-gray-600 hover:text-red-600">Home</button></li>
                <li><button onClick={() => navigate('about')} className="text-gray-600 hover:text-red-600">About Us</button></li>
                <li><button onClick={() => navigate('contact')} className="text-gray-600 hover:text-red-600">Contact Us</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-red-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-800">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Email:</strong> sales@timewatchindia.com</li>
                <li><strong>Contact:</strong> +91-95999 53923</li>
                <li><strong>Address:</strong> D-162, Okhla Phase - I, New Delhi - 110020</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-red-600 text-white text-center py-3">
        <p className="text-sm">TimeWatch © 2025, All Rights Reserved</p>
      </div>
    </>
  );
}