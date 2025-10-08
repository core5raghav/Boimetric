import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { categories } from './data/categories';

function Router({ children, currentRoute }) {
  return React.Children.toArray(children).find(child => {
    const pathMatch = child.props.path === currentRoute.path;
    const subcategoryMatch = !child.props.requireSubcategory || child.props.subcategory === currentRoute.subcategory;
    const productMatch = !child.props.requireProduct || child.props.product === currentRoute.product;
    return pathMatch && subcategoryMatch && productMatch;
  }) || children[0];
}

function Route({ path, subcategory, product, requireSubcategory, requireProduct, children }) {
  return <>{children}</>;
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState({ 
    path: 'home', 
    subcategory: null,
    product: null 
  });

  const navigate = (path, subcategory = null, product = null) => {
    setCurrentRoute({ path, subcategory, product });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentRoute={currentRoute} navigate={navigate} />
      
      <Router currentRoute={currentRoute}>
        <Route path="home">
          <HomePage navigate={navigate} />
        </Route>
        
        <Route path="about">
          <AboutPage />
        </Route>
        
        <Route path="contact">
          <ContactPage />
        </Route>
        
        {Object.keys(categories).map(categoryKey => (
          <Route key={categoryKey} path={categoryKey}>
            {currentRoute.product ? (
              <ProductDetailPage 
                product={categories[categoryKey].subcategories
                  .find(sub => sub.id === currentRoute.subcategory)
                  ?.products.find(p => p.id === currentRoute.product)}
                category={categories[categoryKey]}
                subcategory={categories[categoryKey].subcategories.find(sub => sub.id === currentRoute.subcategory)}
                navigate={navigate}
              />
            ) : currentRoute.subcategory ? (
              <SubcategoryPage 
                category={categories[categoryKey]}
                subcategory={currentRoute.subcategory}
                navigate={navigate}
              />
            ) : (
              <CategoryPage 
                category={categories[categoryKey]}
                navigate={navigate}
              />
            )}
          </Route>
        ))}
      </Router>
      
      <Footer navigate={navigate} />
    </div>
  );
}