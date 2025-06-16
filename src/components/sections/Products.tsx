import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BatteryCharging, Tv, ChevronRight, Zap, Shield, Star, ArrowRight, ChevronLeft } from 'lucide-react';

const productData = [
  // EV Chargers
  {
    id: 'rickshaw-48v-lead',
    name: '48V Lead-Acid Charger',
    category: 'E-Rickshaw',
    type: 'Lead-Acid',
    specs: '48V/18A',
    price: '₹3,250',
    marketPrice: '₹3,700',
    rating: 4.8,
    features: ['Fast Charging', 'Safety Protection', 'Durable Build'],
    image: '/E-rickshaw 48v.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    badgeGradient: 'from-blue-600 to-cyan-600',
    hasModels: true,
    models: [
      {
        id: 'model-1',
        name: 'Standard Model',
        image: '/E-rickshaw 48v.jpg',
        specs: '48V/18A',
        price: '₹3,250',
        marketPrice: '₹3,700',
        description: 'Standard 48V lead-acid charger with reliable performance and safety features.',
        features: ['Fast Charging', 'Safety Protection', 'Durable Build']
      },
      {
        id: 'model-2',
        name: 'Premium Model 1',
        image: '/e-rickshaw 48v model 2 copy.jpg',
        specs: '48V/18A',
        price: '₹3,250',
        marketPrice: '₹3,700',
        description: 'Premium 48V lead-acid charger with enhanced features and advanced protection.',
        features: ['Fast Charging', 'Advanced Protection', 'Premium Build']
      },
      {
        id: 'model-3',
        name: 'Premium Model 2',
        image: '/e-rick 48v model3 copy.jpg',
        specs: '48V/18A',
        price: '₹3,250',
        marketPrice: '₹3,700',
        description: 'Premium 48V lead-acid charger with superior build quality and enhanced safety.',
        features: ['Fast Charging', 'Superior Safety', 'Premium Design']
      }
    ]
  },
  {
    id: 'rickshaw-60v-lead',
    name: '60V Lead-Acid Charger',
    category: 'E-Rickshaw',
    type: 'Lead-Acid',
    specs: '60V/18A',
    price: '₹3,450',
    marketPrice: '₹4,200',
    rating: 4.7,
    features: ['High Voltage', 'Efficient Charging', 'Long Lasting'],
    image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    gradient: 'from-green-500 to-emerald-500',
    badgeGradient: 'from-green-600 to-emerald-600'
  },
  {
    id: 'rickshaw-48v-lithium',
    name: '48V Lithium Charger',
    category: 'E-Rickshaw',
    type: 'Lithium',
    specs: '48V/18A',
    price: '₹3,650',
    marketPrice: '₹4,500',
    rating: 4.9,
    features: ['Smart Technology', 'Premium Quality', 'Advanced Safety'],
    image: '/ev 48 rick lithium copy.jpg',
    gradient: 'from-purple-500 to-pink-500',
    badgeGradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'scooter-48v-lead',
    name: '48V E-Scooter Charger',
    category: 'E-Scooter',
    type: 'Lead-Acid',
    specs: '48V/4A',
    price: '₹730',
    marketPrice: '₹890',
    rating: 4.6,
    features: ['Compact Design', 'Reliable Performance', 'Cost Effective'],
    image: 'https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    gradient: 'from-orange-500 to-red-500',
    badgeGradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'scooter-lithium',
    name: '48V/60V Lithium Charger',
    category: 'E-Scooter',
    type: 'Lithium',
    specs: '48V-60V/6A',
    price: '₹2,150',
    marketPrice: '₹2,750',
    rating: 4.8,
    features: ['Dual Voltage', 'Smart Charging', 'Universal Compatibility'],
    image: '/scooty 48v lithium.jpg',
    gradient: 'from-indigo-500 to-purple-500',
    badgeGradient: 'from-indigo-600 to-purple-600'
  },
  // LED TVs
  {
    id: 'smart-tv-32',
    name: '32" Smart LED TV',
    category: 'LED TV',
    type: 'HD Ready',
    specs: '32" Display',
    price: 'Contact for Price',
    marketPrice: '',
    rating: 4.6,
    features: ['HD Ready', 'Smart Apps', 'Energy Efficient'],
    image: '/32 inch.jpg',
    gradient: 'from-teal-500 to-blue-500',
    badgeGradient: 'from-teal-600 to-blue-600'
  },
  {
    id: 'smart-tv-43',
    name: '43" Smart LED TV',
    category: 'LED TV',
    type: '4K Ultra HD',
    specs: '43" Display',
    price: 'Contact for Price',
    marketPrice: '',
    rating: 4.7,
    features: ['4K Resolution', 'Smart Features', 'Premium Design'],
    image: '/43 inch.jpg',
    gradient: 'from-indigo-500 to-purple-500',
    badgeGradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'smart-tv-55',
    name: '55" Smart LED TV',
    category: 'LED TV',
    type: '4K Ultra HD',
    specs: '55" Display',
    price: 'Contact for Price',
    marketPrice: '',
    rating: 4.8,
    features: ['4K Resolution', 'Smart Features', 'Premium Design'],
    image: '/tv.jpg',
    gradient: 'from-pink-500 to-rose-500',
    badgeGradient: 'from-pink-600 to-rose-600'
  },
  {
    id: 'smart-tv-65',
    name: '65" Smart LED TV',
    category: 'LED TV',
    type: '4K Ultra HD',
    specs: '65" Display',
    price: 'Contact for Price',
    marketPrice: '',
    rating: 4.9,
    features: ['4K Resolution', 'Premium Audio', 'Cinema Experience'],
    image: '/tv.jpg',
    gradient: 'from-violet-500 to-purple-500',
    badgeGradient: 'from-violet-600 to-purple-600'
  }
];

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chargers' | 'tvs'>('chargers');
  const [selectedModels, setSelectedModels] = useState<Record<string, number>>({});
  const navigate = useNavigate();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const filteredProducts = productData.filter(product => 
    activeTab === 'chargers' 
      ? product.category.includes('E-') 
      : product.category === 'LED TV'
  );

  const handleProductClick = (productId: string) => {
    const product = productData.find(p => p.id === productId);
    if (product?.hasModels) {
      const selectedModelIndex = selectedModels[productId] || 0;
      const modelId = product.models?.[selectedModelIndex]?.id;
      navigate(`/product/${productId}${modelId ? `?model=${modelId}` : ''}`);
    } else {
      navigate(`/product/${productId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleModelChange = (productId: string, modelIndex: number) => {
    setSelectedModels(prev => ({
      ...prev,
      [productId]: modelIndex
    }));
  };

  const getProductData = (product: any) => {
    if (product.hasModels && product.models) {
      const selectedModelIndex = selectedModels[product.id] || 0;
      const selectedModel = product.models[selectedModelIndex];
      return {
        ...product,
        ...selectedModel,
        name: product.name, // Keep original product name
        category: product.category, // Keep original category
        type: product.type, // Keep original type
      };
    }
    return product;
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center mb-12 opacity-0 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Product <span className="text-primary-500">Showcase</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover our premium collection of EV chargers and smart TVs, engineered for excellence and designed for the future.
          </p>
        </div>

        <div ref={contentRef} className="opacity-0 transition-all duration-700 delay-300">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl shadow-xl p-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                className={`px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-500 flex items-center ${
                  activeTab === 'chargers'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('chargers')}
              >
                <BatteryCharging className="mr-2" size={20} />
                EV Chargers
              </button>
              <button
                className={`px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-500 flex items-center ${
                  activeTab === 'tvs'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('tvs')}
              >
                <Tv className="mr-2" size={20} />
                Smart LED TVs
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {filteredProducts.map((product, index) => {
              const productData = getProductData(product);
              return (
                <div
                  key={product.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border-0 flex flex-col h-full"
                  onClick={() => handleProductClick(product.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${product.badgeGradient} shadow-lg`}>
                      {product.category}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                      <Star className="text-yellow-400 fill-current" size={14} />
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 ml-1">{product.rating}</span>
                    </div>
                  </div>

                  {/* Model Switcher for 48V Lead-Acid */}
                  {product.hasModels && product.models && (
                    <div className="absolute top-16 left-4 right-4 z-10">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const currentIndex = selectedModels[product.id] || 0;
                              const newIndex = currentIndex > 0 ? currentIndex - 1 : product.models!.length - 1;
                              handleModelChange(product.id, newIndex);
                            }}
                            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <ChevronLeft size={16} className="text-gray-600 dark:text-gray-300" />
                          </button>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 px-2">
                            {product.models[selectedModels[product.id] || 0]?.name}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const currentIndex = selectedModels[product.id] || 0;
                              const newIndex = currentIndex < product.models!.length - 1 ? currentIndex + 1 : 0;
                              handleModelChange(product.id, newIndex);
                            }}
                            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <ChevronRight size={16} className="text-gray-600 dark:text-gray-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative bg-gray-50 dark:bg-gray-700 rounded-xl m-4 p-4 overflow-hidden flex-shrink-0" style={{ marginTop: product.hasModels ? '5rem' : '1rem' }}>
                    <img
                      src={productData.image}
                      alt={productData.name}
                      className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6 pt-2 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {productData.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{productData.specs}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.type === 'Lithium' 
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                          : product.type === '4K Ultra HD'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : product.type === 'HD Ready'
                          ? 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300'
                          : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      }`}>
                        {product.type}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-1 mb-4 flex-grow">
                      {productData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          {idx === 0 && <Zap className="text-blue-500 mr-2\" size={14} />}
                          {idx === 1 && <Shield className="text-green-500 mr-2" size={14} />}
                          {idx === 2 && <Star className="text-purple-500 mr-2\" size={14} />}
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {productData.price}
                      </div>
                      {productData.marketPrice && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          {productData.marketPrice}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={(e) => handleEnquireClick(e, product.id)}
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${product.gradient} hover:opacity-90 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center shadow-lg mt-auto`}
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                navigate('/products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
            >
              View All Products
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;