import React from 'react';
import { getCategory } from '../data/productsDatabase';
import Breadcrumb from '../components/Breadcrumb';
import { Fingerprint, Smile, Wifi, Utensils, Shield } from 'lucide-react';

const iconMap = {
  Fingerprint, Smile, Wifi, Utensils, Shield
};

const CategoryPage = ({ categoryId, navigate }) => {
  const category = getCategory(categoryId);

  if (!category) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Category not found</h2>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', onClick: () => navigate('home') },
    { label: category.name }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.productTypes.map((productType) => {
            const IconComponent = iconMap[productType.icon] || Fingerprint;
            const productCount = productType.products?.length || 0;
            
            return (
              <button
                key={productType.id}
                onClick={() => navigate('product-list', categoryId, productType.id)}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2 text-left"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
                  <IconComponent className="text-emerald-600" size={80} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{productType.name}</h3>
                  <p className="text-gray-600 mb-4">{productType.description}</p>
                  <p className="text-emerald-600 font-semibold">
                    {productCount} {productCount === 1 ? 'Product' : 'Products'} Available
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
