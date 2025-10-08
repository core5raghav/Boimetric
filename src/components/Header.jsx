import React, { useState } from 'react';
import { categories } from '../data/categories';

export default function Header({ currentRoute, navigate }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { key: 'biometric', label: 'Biometric & CCTV', hasDropdown: true },
    { key: 'entrance', label: 'Entrance Control', hasDropdown: true },
    { key: 'inspection', label: 'Inspection Products', hasDropdown: true },
    { key: 'access', label: 'Access Controller', hasDropdown: true },
    { key: 'smartlock', label: 'Smart Lock', hasDropdown: true },
  ];

  return (
    <>
      <div className="bg-white border-b py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="text-gray-700">📧 sales@timewatchindia.com</span>
            <span className="text-gray-700">📞 +91-95999 53923</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-red-600"
            />
            <button className="px-4 py-1 border-2 border-gray-800 text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
              Become Partner
            </button>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
            <img src="https://www.timewatchindia.com/static/media/logo.ca8f78e2.png" alt="TimeWatch" className="h-12" />
          </div>
          
          <nav className="flex items-center gap-6">
            <button 
              onClick={() => navigate('home')} 
              className={`font-semibold transition-colors ${currentRoute.path === 'home' ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              Home
            </button>

            {navItems.map(item => (
              <div 
                key={item.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  onClick={() => navigate(item.key)}
                  className={`font-semibold transition-colors flex items-center gap-1 ${
                    currentRoute.path === item.key ? 'text-red-600' : 'text-gray-800 hover:text-red-600'
                  }`}
                >
                  {item.label}
                  <span className="text-xs">▼</span>
                </button>
                
                {openDropdown === item.key && categories[item.key] && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                    {categories[item.key].subcategories.map(sub => (
                      <button
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(item.key, sub.id);
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-red-600 transition-colors"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button 
              onClick={() => navigate('about')} 
              className={`font-semibold transition-colors ${currentRoute.path === 'about' ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => navigate('contact')} 
              className={`font-semibold transition-colors ${currentRoute.path === 'contact' ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}