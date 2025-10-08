import React from 'react';

export default function CategoryPage({ category, navigate }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate('home')} className="hover:text-red-600">Home</button>
            <span>›</span>
            <span className="text-gray-800 font-semibold">{category.name}</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl">{category.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {category.subcategories.map(subcategory => (
              <div
                key={subcategory.id}
                onClick={() => navigate(category.id, subcategory.id)}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <span className="text-3xl group-hover:scale-110 transition-transform">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600">{subcategory.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{subcategory.description}</p>
                <div className="flex items-center text-red-600 font-semibold text-sm">
                  View Products
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}