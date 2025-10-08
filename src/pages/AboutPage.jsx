import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About TimeWatch</h1>
          <p className="text-xl max-w-3xl mx-auto">Leading provider of security and access control solutions in India</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                TimeWatch Infocom Pvt Ltd has been at the forefront of security solutions since our inception. We specialize in providing cutting-edge biometric systems, access control, and inspection products.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 8400+ satisfied clients and a product range of 160+ security solutions, we have established ourselves as a trusted partner in the security industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction drives everything we do.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" alt="Office" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">8400+</div>
              <p className="text-gray-600 text-lg">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">160+</div>
              <p className="text-gray-600 text-lg">Products</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">4.8/5</div>
              <p className="text-gray-600 text-lg">Customer Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">15+</div>
              <p className="text-gray-600 text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}