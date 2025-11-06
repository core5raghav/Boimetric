import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { getProductType } from '../data/productsDatabase';
import Breadcrumb from '../components/Breadcrumb';

const ProductListPage = ({ categoryId, productTypeId, navigate }) => {
  const productType = getProductType(categoryId, productTypeId);
  const [sortBy, setSortBy] = useState('default');

  if (!productType) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product type not found</h2>
      </div>
    );
  }

  const products = productType.products || [];
  const totalResults = products.length;

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const breadcrumbItems = [
    { label: 'Home', onClick: () => navigate('home') },
    { label: productType.name }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{productType.name}</h1>
          <p className="text-lg text-gray-600">{productType.description}</p>
        </div>

        {/* Sorting and Results Count */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{totalResults > 0 ? '1' : '0'} - {totalResults}</span> of {totalResults} results
          </p>
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option value="default">Default sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {totalResults === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No products available in this category yet.</p>
            <button
              onClick={() => navigate('home')}
              className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                productTypeId={productTypeId}
                categoryId={categoryId}
                navigate={navigate} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product, categoryId, productTypeId, navigate }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div 
        className="relative h-64 bg-gray-100 overflow-hidden cursor-pointer group"
        onClick={() => navigate('product-detail', categoryId, productTypeId, product.id)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.discount}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category Label */}
        <p className="text-sm text-gray-500 mb-2">{productTypeId.replace('-', ' ')}</p>

        {/* Product Name */}
        <h3 
          className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-emerald-600 transition-colors line-clamp-2"
          onClick={() => navigate('product-detail', categoryId, productTypeId, product.id)}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-red-600">
              {product.currency}{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.currency}{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => navigate('product-detail', categoryId, productTypeId, product.id)}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          View Details
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
