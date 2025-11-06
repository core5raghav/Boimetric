import React, { useState } from 'react';
import { Star, Shield, Check, Minus, Plus, ShoppingCart, Phone } from 'lucide-react';
import { getProduct } from '../data/productsDatabase';
import Breadcrumb from '../components/Breadcrumb';

const ProductDetailPage = ({ productId, categoryId, productTypeId, navigate }) => {
  const product = getProduct(productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <button
          onClick={() => navigate('home')}
          className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', onClick: () => navigate('home') },
    { label: product.categoryName, onClick: () => navigate('category', categoryId) },
    { label: product.productTypeName, onClick: () => navigate('product-list', categoryId, productTypeId) },
    { label: product.shortName || product.name }
  ];

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  const handleContactUs = () => {
    navigate('contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="mb-4 border-2 border-emerald-500 rounded-2xl overflow-hidden bg-gray-50">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div>
            {/* Category Label */}
            <p className="text-emerald-600 font-semibold mb-2">{product.productTypeName}</p>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-red-600">
                  {product.currency}{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.currency}{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.discount > 0 && (
                <p className="text-emerald-600 font-semibold mt-2">
                  Save {product.currency}{(product.originalPrice - product.price).toLocaleString()} ({product.discount}% OFF)
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty */}
            {product.warranty && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="text-yellow-600" size={32} />
                  <div>
                    <p className="font-bold text-gray-900">{product.warranty.period} Warranty</p>
                    <p className="text-sm text-gray-600">{product.warranty.type}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-12 text-center border-2 border-gray-300 rounded-lg font-semibold text-lg"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <ShoppingCart size={24} />
                Add to Cart
              </button>
              <button
                onClick={handleContactUs}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <Phone size={24} />
                Contact Us
              </button>
            </div>

            {/* Stock Status */}
            {product.inStock && (
              <p className="text-emerald-600 font-semibold">✓ In Stock</p>
            )}
          </div>
        </div>

        {/* Specifications Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="flex border-b border-gray-300 pb-4">
                  <span className="font-semibold text-gray-900 w-1/2">{key}</span>
                  <span className="text-gray-700 w-1/2">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        {product.applications && product.applications.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app, index) => (
                <span
                  key={index}
                  className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-lg font-semibold text-lg"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
