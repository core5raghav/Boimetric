import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar, Package, Phone, Mail, MapPin, Clock, Star, Shield, Fingerprint, Smile, Wifi, Utensils, User, Route, DoorOpen, ArrowLeftRight, ArrowRight, ArrowUp, AlertTriangle, Briefcase, Magnet, Building2, DoorClosed, Hotel, Lock, Database, Zap, Users, Building, GraduationCap, Factory, Award, CheckCircle, Headphones, Plug, DollarSign, ShieldHalf, Send, Eye, Hand, Gauge, Cloud, Layers, Landmark } from 'lucide-react';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thank you for your inquiry, ${formData.name}! Our team will contact you within 24 hours.`);
    setFormData({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .nav-scrolled {
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          background: rgba(255, 255, 255, 0.98);
        }

        .dropdown-content {
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .dropdown-parent:hover .dropdown-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.1); }
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-hover {
          transition: all 0.4s ease;
        }

        .card-hover:hover {
          transform: translateY(-12px);
        }

        .feature-icon-bg {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        }

        .stat-icon-bg {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }

        .tech-icon-bg {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .info-icon-bg {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'nav-scrolled' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-900 font-bold text-2xl cursor-pointer" onClick={() => scrollToSection('home')}>
              <Fingerprint className="text-emerald-500" size={32} />
              <span>TST Technologies</span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
              <NavLink onClick={() => scrollToSection('about')}>About Us</NavLink>
              
              <DropdownMenu title="Biometric & CCTV" items={[
                { icon: Fingerprint, text: 'Finger Print' },
                { icon: Smile, text: 'Face Recognition' },
                { icon: Wifi, text: 'UHF RFID Reader' },
                { icon: Utensils, text: 'Canteen Management' },
                { icon: User, text: 'Guard Patrol' }
              ]} />

              <DropdownMenu title="Entrance Control" items={[
                { icon: Shield, text: 'Boom Barrier' },
                { icon: DoorOpen, text: 'Boom Gate' },
                { icon: ArrowLeftRight, text: 'Flap Barrier' },
                { icon: ArrowRight, text: 'Swing Barriers' },
                { icon: ArrowUp, text: 'Turnstiles' },
                { icon: AlertTriangle, text: 'Tyre Killer' }
              ]} />

              <DropdownMenu title="Inspection Products" items={[
                { icon: Briefcase, text: 'Baggage Scanner' },
                { icon: Magnet, text: 'Metal Detector' }
              ]} />

              <DropdownMenu title="Access Controller" items={[
                { icon: Building2, text: 'Elevator Control' },
                { icon: DoorClosed, text: 'Multi Door Controller' }
              ]} />

              <DropdownMenu title="Smart Lock" items={[
                { icon: Hotel, text: 'Hotel Lock' },
                { icon: Lock, text: 'EM Locks 7-Series' },
                { icon: Lock, text: 'EM Locks 8-Series' }
              ]} />

              <button 
                onClick={() => scrollToSection('contact')}
                className="ml-2 bg-emerald-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-float" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-emerald-400 text-lg font-semibold">Trusted Security Solutions</div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight gradient-text">
                Advanced Biometric & RFID Technology Solutions
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Hardware-agnostic software solutions with proprietary fingerprint matching algorithms, serving government, enterprise, and industrial sectors across Delhi/NCR.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all hover:-translate-y-1 hover:shadow-2xl shadow-emerald-500/30"
                >
                  <Calendar size={20} />
                  Request Demo
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1"
                >
                  <Package size={20} />
                  Explore Products
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Fingerprint, title: 'Fingerprint Systems', desc: 'AFIS & Biometric Authentication' },
                { icon: Smile, title: 'Face Recognition', desc: 'Anti-Spoofing & Touchless' },
                { icon: Wifi, title: 'RFID Solutions', desc: 'Access Control Systems' },
                { icon: ShieldHalf, title: 'Security Equipment', desc: 'Scanners & Detectors' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:-translate-y-2 hover:shadow-2xl">
                  <item.icon className="text-emerald-400 mx-auto mb-4" size={56} />
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, number: '15+', label: 'Years in Business' },
              { icon: Building, number: '580+', label: 'Active Clients' },
              { icon: Package, number: '50K+', label: 'Devices Deployed' },
              { icon: Gauge, number: '99.9%', label: 'System Uptime' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-center hover:-translate-y-2 transition-all">
                <div className="stat-icon-bg w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Why Choose TST Technologies?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We deliver flexible, hardware-agnostic security solutions that adapt to your needs, providing enterprise-grade protection at scale.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plug, title: 'Hardware Agnostic', desc: 'Bring your preferred hardware while maintaining full software compliance with our proprietary matching algorithms.' },
              { icon: Zap, title: 'Advanced Technology', desc: 'Cutting-edge fingerprint and facial recognition with anti-spoofing capabilities and high-capacity matching.' },
              { icon: ShieldHalf, title: 'Enterprise Security', desc: 'Bank-grade encryption, multi-factor authentication, and full compliance with global data privacy standards.' },
              { icon: Headphones, title: 'Rapid Deployment', desc: 'Quick implementation with comprehensive training and 24/7 technical support for uninterrupted operations.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:-translate-y-3 transition-all hover:shadow-xl hover:border-blue-500">
                <div className="feature-icon-bg w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-blue-500">
                  <feature.icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">About TST Technologies</h2>
            <p className="text-xl text-slate-600">Leading provider of biometric security and RFID solutions in Delhi/NCR</p>
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              With over 15 years of excellence in biometric security, TST Technologies has established itself as a trusted partner for government agencies, Fortune 500 companies, educational institutions, and industrial facilities across India. We specialize in AFIS (Automated Fingerprint Identification Systems), facial recognition, RFID, and comprehensive access control solutions.
            </p>
            <p>
              Our unique value proposition lies in our flexible integration approach—clients can leverage their existing or preferred hardware infrastructure while maintaining full software compliance with our proprietary fingerprint matching algorithms. This ensures optimal performance, cost-effectiveness, and seamless integration with existing systems.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 mt-8">
              <h4 className="flex items-center gap-2 text-slate-900 font-bold text-xl mb-3">
                <Shield className="text-blue-500" size={24} />
                Data Privacy & Security Commitment
              </h4>
              <p className="text-slate-700 leading-relaxed">
                We prioritize data security and user privacy above all. All biometric data is encrypted end-to-end using AES-256 encryption, stored securely with multi-layer protection, and handled in full compliance with GDPR and Indian data privacy standards. Your biometric information is never shared, sold, or used for any purpose beyond authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Comprehensive Product Portfolio</h2>
            <p className="text-xl text-slate-600">Industry-leading biometric and security solutions tailored for diverse applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Notable Technology Features</h2>
            <p className="text-xl text-slate-600">Cutting-edge capabilities that set our solutions apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Advanced Anti-Spoofing', desc: 'Multi-layered liveness detection prevents photo, video, and mask spoofing attacks with advanced biometric algorithms.' },
              { icon: Eye, title: 'Visible Light Recognition', desc: 'Works seamlessly in various lighting conditions using visible light cameras, making deployment more versatile.' },
              { icon: Hand, title: 'Touchless Authentication', desc: 'Hygienic and convenient contactless verification through facial recognition and gesture-based interactions.' },
              { icon: Gauge, title: 'Real-Time Monitoring', desc: 'Live dashboard with instant alerts, attendance tracking, and comprehensive analytics accessible from anywhere.' },
              { icon: Cloud, title: 'Cloud & On-Premise', desc: 'Flexible deployment models supporting both cloud-based and on-premise installations.' },
              { icon: Layers, title: 'Multi-Factor Authentication', desc: 'Combine multiple biometrics, RFID cards, PIN codes, and mobile credentials for enhanced security.' }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:-translate-y-3 transition-all hover:shadow-xl hover:border-emerald-500">
                <div className="tech-icon-bg w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-emerald-500/30">
                  <tech.icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{tech.title}</h3>
                <p className="text-slate-600 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Trusted Across Industries</h2>
            <p className="text-xl text-slate-600">Over 580+ organizations trust TST Technologies to protect their people and assets</p>
          </div>

          <div className="space-y-8">
            {clientSegments.map((segment, idx) => (
              <div key={idx} className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                <h3 className="flex items-center justify-center gap-3 text-2xl font-bold text-slate-900 mb-8">
                  <segment.icon className="text-emerald-500" size={28} />
                  {segment.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {segment.clients.map((client, cidx) => (
                    <div key={cidx} className="bg-white p-6 rounded-xl border border-slate-200 text-center font-bold text-slate-600 hover:-translate-y-2 transition-all hover:shadow-lg hover:border-blue-500 min-h-[100px] flex items-center justify-center">
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 border-l-4 border-l-emerald-500 hover:-translate-y-2 transition-all hover:shadow-xl">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">{test.text}</p>
                <div className="font-bold text-slate-900">{test.author}</div>
                <div className="text-sm text-slate-500">{test.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Our Competitive Strengths</h2>
            <p className="text-xl text-slate-300">What makes TST Technologies the preferred choice for security solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 transition-all hover:-translate-y-2 hover:shadow-2xl">
                <cert.icon className="text-emerald-400 mx-auto mb-6" size={56} />
                <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                <p className="text-slate-300 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600">Ready to secure your organization? Contact us for a free consultation and demo</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Your organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Product Interest</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="">Select a product category</option>
                    <option value="fingerprint">Fingerprint Systems</option>
                    <option value="face">Face Recognition</option>
                    <option value="rfid">RFID Solutions</option>
                    <option value="barriers">Access Control Barriers</option>
                    <option value="scanners">Security Scanners</option>
                    <option value="locks">Smart Locks</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 flex gap-6 hover:translate-x-2 transition-all">
                  <div className="info-icon-bg w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 text-white font-bold text-2xl mb-6">
                <Fingerprint className="text-emerald-400" size={32} />
                <span>TST Technologies</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Leading provider of biometric security and RFID solutions in Delhi/NCR. Trusted by 580+ organizations for 15+ years.
              </p>
            </div>

            <div>
              <h3 className="text-emerald-400 font-bold text-lg mb-6">Products</h3>
              <ul className="space-y-3">
                {['Fingerprint Systems', 'Face Recognition', 'RFID Solutions', 'Access Control', 'Security Equipment'].map((item, idx) => (
                  <li key={idx}>
                    <button onClick={() => scrollToSection('products')} className="text-slate-400 hover:text-emerald-400 transition-colors">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-emerald-400 font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  { text: 'About Us', section: 'about' },
                  { text: 'Our Clients', section: 'clients' },
                  { text: 'Contact', section: 'contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <button onClick={() => scrollToSection(item.section)} className="text-slate-400 hover:text-emerald-400 transition-colors">{item.text}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-emerald-400 font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {['Documentation', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Technical Support'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>&copy; 2025 TST Technologies. All rights reserved. | Designed for security, built with trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-blue-500 transition-all"
  >
    {children}
  </button>
);

const DropdownMenu = ({ title, items }) => (
  <div className="relative dropdown-parent">
    <button className="flex items-center gap-1 px-4 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100 hover:text-blue-500 transition-all">
      {title}
      <ChevronDown size={16} />
    </button>
    <div className="dropdown-content absolute top-full left-0 mt-2 bg-white min-w-[280px] rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
      {items.map((item, idx) => (
        <button
          key={idx}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-500 transition-all"
        >
          <item.icon size={20} className="text-blue-500" />
          <span>{item.text}</span>
        </button>
      ))}
    </div>
  </div>
);

const ProductCard = ({ icon: Icon, category, title, description, features }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 card-hover hover:shadow-2xl hover:border-blue-500">
    <div className="h-56 bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/10" />
      <Icon className="text-blue-500 relative z-10" size={80} />
    </div>
    <div className="p-6">
      <span className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature, idx) => (
          <span key={idx} className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">
            <feature.icon size={16} className="text-blue-500" />
            {feature.text}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Data
const products = [
  {
    icon: Fingerprint,
    category: 'Biometric',
    title: 'Fingerprint Attendance Systems',
    description: 'Advanced fingerprint authentication with high-capacity storage and multi-connectivity options for seamless workforce management.',
    features: [
      { icon: Database, text: '10K+ Templates' },
      { icon: Wifi, text: 'TCP/IP, WiFi' },
      { icon: Zap, text: 'Fast Matching' }
    ]
  },
  {
    icon: Smile,
    category: 'Biometric',
    title: 'Face Recognition (UFACE-301)',
    description: 'Visible light facial recognition with anti-spoofing technology, touchless authentication, and multi-factor verification.',
    features: [
      { icon: Shield, text: 'Anti-Spoofing' },
      { icon: Hand, text: 'Touchless' },
      { icon: Eye, text: 'Visible Light' }
    ]
  },
  {
    icon: Wifi,
    category: 'RFID',
    title: 'UHF RFID Reader',
    description: 'Long-range UHF RFID readers for vehicle tracking, asset management, and access control with Wiegand support.',
    features: [
      { icon: Wifi, text: 'Long Range' },
      { icon: Package, text: 'Vehicle Tracking' },
      { icon: Plug, text: 'Wiegand' }
    ]
  },
  {
    icon: ArrowLeftRight,
    category: 'Access Control',
    title: 'Flap Barriers',
    description: 'Premium pedestrian access control with bi-directional flow management, emergency release, and anti-tailgating detection.',
    features: [
      { icon: ArrowRight, text: 'Bi-Directional' },
      { icon: Users, text: 'Anti-Tailgate' },
      { icon: DoorOpen, text: 'Emergency Open' }
    ]
  },
  {
    icon: Shield,
    category: 'Access Control',
    title: 'Boom Barriers',
    description: 'Heavy-duty vehicle access control for parking lots, toll gates, and industrial premises with variable boom lengths.',
    features: [
      { icon: Package, text: 'Vehicle Control' },
      { icon: Gauge, text: 'Fast Operation' },
      { icon: Shield, text: 'Heavy Duty' }
    ]
  },
  {
    icon: Briefcase,
    category: 'Security',
    title: 'X-Ray Baggage Scanners',
    description: 'High-resolution X-ray inspection systems for airports, government buildings, and high-security facilities.',
    features: [
      { icon: Eye, text: 'High Resolution' },
      { icon: Shield, text: 'Color Imaging' },
      { icon: Shield, text: 'Threat Detection' }
    ]
  },
  {
    icon: Magnet,
    category: 'Security',
    title: 'Walk-Through Metal Detectors',
    description: 'Multi-zone metal detection with adjustable sensitivity, visitor counting, and alarm customization.',
    features: [
      { icon: Layers, text: 'Multi-Zone' },
      { icon: Gauge, text: 'Adjustable' },
      { icon: Shield, text: 'Smart Alarms' }
    ]
  },
  {
    icon: Hotel,
    category: 'Smart Lock',
    title: 'Smart Hotel Locks',
    description: 'RFID-based hotel lock systems with master key support, audit trails, and energy-saving features.',
    features: [
      { icon: Shield, text: 'RFID Cards' },
      { icon: Clock, text: 'Audit Trail' },
      { icon: Zap, text: 'Low Power' }
    ]
  },
  {
    icon: User,
    category: 'Management',
    title: 'Guard Patrol Systems',
    description: 'GPS-enabled guard tour monitoring with checkpoint validation, real-time tracking, and comprehensive reporting.',
    features: [
      { icon: MapPin, text: 'GPS Tracking' },
      { icon: Route, text: 'Route Planning' },
      { icon: Shield, text: 'Reports' }
    ]
  }
];

const clientSegments = [
  {
    icon: Landmark,
    title: 'Government & Public Sector',
    clients: ['BSNL', 'GAIL India', 'IFFCO', 'Delhi Metro', 'Indian Railways']
  },
  {
    icon: Building,
    title: 'Corporate & Enterprise',
    clients: ['Samsung', 'Spark Minda', 'Havells', 'Hero MotoCorp', 'Maruti Suzuki', 'Dabur']
  },
  {
    icon: GraduationCap,
    title: 'Education & Healthcare',
    clients: ['DPS Schools', 'Amity University', 'Fortis Healthcare', 'Max Hospitals']
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industry',
    clients: ['Rico Auto', 'JBM Group', 'Motherson Sumi', 'Eicher Motors']
  }
];

const testimonials = [
  {
    text: "TST Technologies implemented a flawless biometric attendance system across our 15 manufacturing units. Their after-sales support and hardware-agnostic approach saved us significant costs.",
    author: "Rajesh Kumar",
    company: "HR Director, Spark Minda"
  },
  {
    text: "The facial recognition system with anti-spoofing technology has enhanced our campus security tremendously. Implementation was smooth and the technical team was highly professional.",
    author: "Dr. Priya Sharma",
    company: "Principal, DPS Ghaziabad"
  },
  {
    text: "Excellent RFID-based access control solution for our corporate offices. The system integrates perfectly with our existing infrastructure and provides detailed audit trails.",
    author: "Amit Verma",
    company: "Facilities Manager, Samsung India"
  }
];

const certifications = [
  { icon: CheckCircle, title: 'ISO Certified', desc: 'ISO 9001:2015 certified for quality management systems' },
  { icon: Award, title: 'Quality Checked', desc: 'All products undergo rigorous quality assurance testing' },
  { icon: Star, title: 'Customer Rated', desc: '4.8/5 average rating from 500+ satisfied clients' },
  { icon: ShieldHalf, title: 'Data Secure', desc: 'AES-256 encryption & GDPR compliant security' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock technical assistance and maintenance' },
  { icon: Zap, title: 'Rapid Deployment', desc: 'Quick implementation with minimal disruption' },
  { icon: Plug, title: 'Easy Integration', desc: 'Seamless compatibility with existing systems' },
  { icon: DollarSign, title: 'Cost Effective', desc: 'Competitive pricing with excellent ROI' }
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    content: 'TST Technologies\nGhaziabad, Delhi/NCR\nUttar Pradesh, India'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 XXXXX XXXXX\nMon-Sat: 9:00 AM - 6:00 PM\n24/7 Emergency Support'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@tsttechnologies.com\nsales@tsttechnologies.com\nsupport@tsttechnologies.com'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday: 9 AM - 6 PM\nSaturday: 9 AM - 2 PM\nSunday: Closed'
  }
];

export default HomePage;