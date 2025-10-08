import React, { useState } from 'react';
import { categories } from '../data/categories';

export default function HomePage({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.subject && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Get featured products from categories data
  const getFeaturedProducts = () => {
    const featured = [];
    
    // Get products from Finger Print subcategory
    const fingerPrintProducts = categories.biometric.subcategories.find(sub => sub.id === 'finger-print')?.products || [];
    if (fingerPrintProducts.length > 0) {
      featured.push({
        ...fingerPrintProducts[0],
        categoryId: 'biometric',
        subcategoryId: 'finger-print'
      });
    }
    
    // Get products from Face subcategory
    const faceProducts = categories.biometric.subcategories.find(sub => sub.id === 'face')?.products || [];
    if (faceProducts.length > 0) {
      featured.push({
        ...faceProducts[0],
        categoryId: 'biometric',
        subcategoryId: 'face'
      });
    }
    
    // Add more featured products if available
    if (fingerPrintProducts.length > 1) {
      featured.push({
        ...fingerPrintProducts[1],
        categoryId: 'biometric',
        subcategoryId: 'finger-print'
      });
    }
    
    if (faceProducts.length > 1) {
      featured.push({
        ...faceProducts[1],
        categoryId: 'biometric',
        subcategoryId: 'face'
      });
    }
    
    return featured;
  };

  const featuredProducts = getFeaturedProducts();

  const clients = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png'
  ];

  const reviews = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent products and outstanding customer service. The biometric system has transformed our attendance management.',
      date: '2 weeks ago'
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Very professional team. Installation was smooth and the after-sales support is top-notch.',
      date: '1 month ago'
    },
    {
      name: 'Amit Patel',
      rating: 5,
      text: 'Best quality security products at competitive prices. Highly recommended for corporate offices.',
      date: '3 weeks ago'
    },
    {
      name: 'Neha Singh',
      rating: 4,
      text: 'Great experience with TimeWatch. The face recognition system works flawlessly even in low light.',
      date: '1 week ago'
    }
  ];

  const productCategories = [
    {
      id: 'biometric',
      name: 'BIOMETRIC & CCTV',
      description: 'Advanced biometric authentication and surveillance solutions',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=400&fit=crop',
      icon: '👤'
    },
    {
      id: 'entrance',
      name: 'ENTRANCE CONTROL',
      description: 'Sophisticated entrance management systems',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&h=400&fit=crop',
      icon: '🚪'
    },
    {
      id: 'inspection',
      name: 'INSPECTION PRODUCTS',
      description: 'Security screening and inspection equipment',
      image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?w=500&h=400&fit=crop',
      icon: '🔍'
    },
    {
      id: 'access',
      name: 'ACCESS CONTROLLER',
      description: 'Intelligent access control systems',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=400&fit=crop',
      icon: '🔐'
    },
    {
      id: 'smartlock',
      name: 'SMART LOCK',
      description: 'Next-generation smart locking solutions',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&h=400&fit=crop',
      icon: '🔒'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🏆',
      title: 'Industry Leader',
      description: 'Over 15 years of excellence in security solutions'
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description: '2-year warranty on all products with ISO certification'
    },
    {
      icon: '👥',
      title: '8400+ Happy Clients',
      description: 'Trusted by leading enterprises across India'
    },
    {
      icon: '🔧',
      title: 'Expert Support',
      description: '24/7 technical assistance and maintenance'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing without compromising quality'
    },
    {
      icon: '🚀',
      title: 'Latest Technology',
      description: 'AI-powered solutions with regular updates'
    }
  ];

  return (
    <>
      {/* Hero Section with Warranty Badge */}
      <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop" alt="TrueFace Devices" className="w-full rounded-lg shadow-xl" />
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-gray-800">TrueFace Series<br/>Device With</h1>
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-12 py-6 rounded-lg shadow-lg mb-8">
                <div className="text-6xl font-bold">2</div>
                <div className="text-2xl font-bold">YEARS<br/>WARRANTY</div>
              </div>
              <div className="flex justify-center gap-6 mt-8">
                {['Face', 'Fingerprint', 'Card', 'Password', 'QR'].map((feature, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-md">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Explore our top-selling security solutions</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate(product.categoryId, product.subcategoryId, product.id)}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="h-64 bg-white flex items-center justify-center p-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full object-contain group-hover:scale-110 transition-transform" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-red-600 transition-colors">{product.name}</h3>
                  
                  {/* Rating */}
                  {product.rating > 0 && (
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                  )}
                  
                  {/* Price */}
                  {product.price && (
                    <p className="text-xl font-bold text-red-600 mb-4">₹{product.price.toLocaleString()}</p>
                  )}
                  
                  <button className="w-full px-6 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" alt="About TimeWatch" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">TimeWatch Infocom Pvt Ltd</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                TimeWatch Infocom Pvt Ltd has been at the forefront of security solutions since our inception. We specialize in providing cutting-edge biometric systems, access control, and inspection products.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 8400+ satisfied clients and a product range of 160+ security solutions, we have established ourselves as a trusted partner in the security industry across India.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction drives everything we do. We don't just sell products; we provide complete security solutions tailored to your needs.
              </p>
              <button 
                onClick={() => navigate('about')}
                className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why TST Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why TST Technologies</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose excellence, reliability, and innovation for all your security needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Esteemed Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Esteemed Clients</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Trusted by leading organizations across India</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((logo, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <img src={logo} alt={`Client ${idx + 1}`} className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 bg-white px-12 py-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">8400+</div>
                <p className="text-gray-600 font-semibold">Happy Clients</p>
              </div>
              <div className="h-16 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">160+</div>
                <p className="text-gray-600 font-semibold">Products</p>
              </div>
              <div className="h-16 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">15+</div>
                <p className="text-gray-600 font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products and Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR PRODUCTS AND SOLUTIONS</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Comprehensive security solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(category.id)}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  <span className="text-red-600 font-semibold text-sm group-hover:underline">
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Google Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Google Reviews</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-3xl">★</span>
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-800">4.8</span>
            </div>
            <p className="text-xl text-gray-600">Based on 1200+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://www.google.com/search?q=timewatch+infocom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>View All Reviews on Google</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Get in touch with our team for any inquiries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91-95999 53923</p>
                    <p className="text-gray-600">011-4191-6615</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">sales@timewatchindia.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">D-162, Okhla Phase - I</p>
                    <p className="text-gray-600">New Delhi - 110020</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" 
                  alt="Office" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" 
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" 
                    placeholder="Subject" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" 
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}