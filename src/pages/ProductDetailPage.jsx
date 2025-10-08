import React, { useState } from 'react';

export default function ProductDetailPage({ product, category, subcategory, navigate }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <button 
            onClick={() => navigate('home')}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate('home')} className="hover:text-red-600">Home</button>
            <span>›</span>
            <button onClick={() => navigate(category.id)} className="hover:text-red-600">{category.name}</button>
            <span>›</span>
            <button onClick={() => navigate(category.id, subcategory.id)} className="hover:text-red-600">{subcategory.name}</button>
            <span>›</span>
            <span className="text-gray-800 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-4">
                <img 
                  src={images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>
              
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`bg-gray-50 rounded-lg p-4 border-2 transition-all ${
                        selectedImage === idx ? 'border-red-600' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-20 object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">{subcategory.name}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < product.rating ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}>★</span>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews || 0} reviews)</span>
              </div>

              {/* Price */}
              {product.price && (
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-red-600">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="text-green-600 font-semibold">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()} 
                      ({Math.round((1 - product.price / product.originalPrice) * 100)}% OFF)
                    </span>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description || 'High-quality security product from TimeWatch.'}</p>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Warranty */}
              {product.warranty && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <p className="font-bold text-gray-800">{product.warranty}</p>
                      <p className="text-sm text-gray-600">Manufacturer Warranty</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Quantity & Actions */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 font-bold text-gray-600"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300 font-semibold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 font-bold text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors">
                  Add to Cart
                </button>
                <button 
                  onClick={() => navigate('contact')}
                  className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-lg font-bold hover:bg-red-50 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Specifications</h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex border-b border-gray-200 pb-4">
                      <span className="font-semibold text-gray-700 w-1/2">{key}</span>
                      <span className="text-gray-600 w-1/2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Related Products */}
          {subcategory.products.filter(p => p.id !== product.id).length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Products</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {subcategory.products.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
                  <div 
                    key={relatedProduct.id}
                    onClick={() => navigate(category.id, subcategory.id, relatedProduct.id)}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                      <img src={relatedProduct.image} alt={relatedProduct.name} className="max-h-full object-contain" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-2">{relatedProduct.name}</h3>
                      {relatedProduct.price && (
                        <p className="text-red-600 font-bold">₹{relatedProduct.price.toLocaleString()}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}