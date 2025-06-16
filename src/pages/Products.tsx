import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BatteryCharging, Tv, ChevronRight, Star, Zap, Shield, ArrowRight, ChevronLeft } from 'lucide-react';

interface ProductModel {
  id: string;
  name: string;
  image: string;
  specs: string;
  price: string;
  marketPrice: string;
  description: string;
  features: string[];
}

interface Product {
  id: string;
  name: string;
  type: string;
  specs: string;
  price: string;
  marketPrice: string;
  description: string;
  image: string;
  category: 'rickshaw' | 'scooter' | 'tv';
  rating: number;
  features: string[];
  gradient: string;
  hasModels?: boolean;
  models?: ProductModel[];
}

const products: Product[] = [
  // E-Rickshaw Chargers
  {
    id: 'rickshaw-48v-lead',
    name: '48V Lead-Acid Charger',
    type: 'Lead-Acid',
    specs: '48V/18A',
    price: '₹3,250',
    marketPrice: '₹3,700',
    description: 'High-quality charger for E-Rickshaws with advanced safety features',
    image: '/E-rickshaw 48v.jpg',
    category: 'rickshaw',
    rating: 4.8,
    features: ['Fast Charging', 'Safety Protection', 'Durable Build'],
    gradient: 'from-blue-500 to-cyan-500',
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
    type: 'Lead-Acid',
    specs: '60V/18A',
    price: '₹3,450',
    marketPrice: '₹4,200',
    description: 'Powerful charger for E-Rickshaws with enhanced efficiency',
    image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'rickshaw',
    rating: 4.7,
    features: ['High Voltage', 'Efficient Charging', 'Long Lasting'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'rickshaw-48v-lithium',
    name: '48V Lithium Charger',
    type: 'Lithium',
    specs: '48V/18A',
    price: '₹3,650',
    marketPrice: '₹4,500',
    description: 'Advanced lithium battery charger with smart charging technology',
    image: '/ev 48 rick lithium copy.jpg',
    category: 'rickshaw',
    rating: 4.9,
    features: ['Smart Technology', 'Premium Quality', 'Advanced Safety'],
    gradient: 'from-purple-500 to-pink-500'
  },
  // E-Scooter Chargers
  {
    id: 'scooter-48v-lead',
    name: '48V Lead-Acid Charger',
    type: 'Lead-Acid',
    specs: '48V/4A',
    price: '₹730',
    marketPrice: '₹890',
    description: 'Compact charger for E-Scooters with reliable performance',
    image: 'https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'scooter',
    rating: 4.6,
    features: ['Compact Design', 'Reliable Performance', 'Cost Effective'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'scooter-60v-lead',
    name: '60V Lead-Acid Charger',
    type: 'Lead-Acid',
    specs: '60V/4A',
    price: '₹780',
    marketPrice: '₹900',
    description: 'High-voltage charger for E-Scooters with safety features',
    image: 'https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'scooter',
    rating: 4.5,
    features: ['High Voltage', 'Safety Features', 'Compact Size'],
    gradient: 'from-teal-500 to-blue-500'
  },
  {
    id: 'scooter-lithium',
    name: '48V/60V Lithium Charger',
    type: 'Lithium',
    specs: '48V-60V/6A',
    price: '₹2,150',
    marketPrice: '₹2,750',
    description: 'Universal lithium charger for E-Scooters with dual voltage support',
    image: '/scooty 48v lithium.jpg',
    category: 'scooter',
    rating: 4.8,
    features: ['Dual Voltage', 'Smart Charging', 'Universal Compatibility'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  // LED TVs
  {
    id: 'smart-tv-32',
    name: '32" Smart LED TV',
    type: 'HD Ready',
    specs: '32" Display',
    price: 'Contact for Price',
    marketPrice: '',
    description: 'Compact smart TV perfect for bedrooms and small spaces',
    image: '/32 inch.jpg',
    category: 'tv',
    rating: 4.6,
    features: ['HD Ready', 'Smart Apps', 'Energy Efficient'],
    gradient: 'from-teal-500 to-green-500'
  },
  {
    id: 'smart-tv-43',
    name: '43" Smart LED TV',
    type: '4K Ultra HD',
    specs: '43" Display',
    price: 'Contact for Price',
    marketPrice: '',
    description: 'Perfect balance of size and features for living rooms',
    image: '/43 inch.jpg',
    category: 'tv',
    rating: 4.7,
    features: ['4K Resolution', 'Smart Features', 'Premium Design'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'smart-tv-55',
    name: '55" Smart LED TV',
    type: '4K Ultra HD',
    specs: '55" Display',
    price: 'Contact for Price',
    marketPrice: '',
    description: 'Large screen entertainment with stunning 4K clarity',
    image: '/tv.jpg',
    category: 'tv',
    rating: 4.8,
    features: ['4K Resolution', 'Smart Features', 'Premium Design'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'smart-tv-65',
    name: '65" Smart LED TV',
    type: '4K Ultra HD',
    specs: '65" Display',
    price: 'Contact for Price',
    marketPrice: '',
    description: 'Cinema-like experience with premium features and design',
    image: '/tv.jpg',
    category: 'tv',
    rating: 4.9,
    features: ['4K Resolution', 'Premium Audio', 'Cinema Experience'],
    gradient: 'from-violet-500 to-purple-500'
  }
];

const Products: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<'rickshaw' | 'scooter' | 'tv'>('rickshaw');
  const [selectedModels, setSelectedModels] = useState<Record<string, number>>({});

  // Check if there's a state passed from navigation to preserve tab
  useEffect(() => {
    if (location.state?.activeTab) {
      const { activeTab } = location.state;
      if (activeTab === 'tvs') {
        setActiveCategory('tv');
      } else if (activeTab === 'chargers') {
        setActiveCategory('rickshaw');
      }
    }
  }, [location.state]);

  const filteredProducts = products.filter(product => product.category === activeCategory);

  const handleProductClick = (productId: string) => {
    const product = products.find(p => p.id === productId);
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

  const getProductData = (product: Product) => {
    if (product.hasModels && product.models) {
      const selectedModelIndex = selectedModels[product.id] || 0;
      const selectedModel = product.models[selectedModelIndex];
      return {
        ...product,
        ...selectedModel,
        name: product.name,
        category: product.category,
        type: product.type,
      };
    }
    return product;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-primary-600">Products</span>
          </h1>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Discover our comprehensive range of high-quality products designed for reliability and performance
          </p>

          {/* Category Switcher */}
          <div className="inline-flex rounded-2xl shadow-lg p-1 bg-white dark:bg-gray-800 mb-12">
            <button
              onClick={() => setActiveCategory('rickshaw')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory === 'rickshaw'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              <BatteryCharging className="mr-2" size={18} />
              E-Rickshaw Chargers
            </button>
            <button
              onClick={() => setActiveCategory('scooter')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory === 'scooter'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              <BatteryCharging className="mr-2" size={18} />
              E-Scooter Chargers
            </button>
            <button
              onClick={() => setActiveCategory('tv')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory === 'tv'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              <Tv className="mr-2" size={18} />
              Smart LED TVs
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            const productData = getProductData(product);
            return (
              <div
                key={product.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => handleProductClick(product.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                    <Star className="text-yellow-400 fill-current" size={14} />
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 ml-1">{product.rating}</span>
                  </div>
                </div>

                {/* Model Switcher for 48V Lead-Acid */}
                {product.hasModels && product.models && (
                  <div className="absolute top-4 left-4 right-16 z-10">
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
                <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-50 dark:bg-gray-700 rounded-xl m-4" style={{ marginTop: product.hasModels ? '4rem' : '1rem' }}>
                  <img
                    src={productData.image}
                    alt={productData.name}
                    className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-500 p-4"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {productData.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{productData.description}</p>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {productData.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        {idx === 0 && <Zap className="text-blue-500 mr-2\" size={14} />}
                        {idx === 1 && <Shield className="text-green-500 mr-2" size={14} />}
                        {idx === 2 && <Star className="text-purple-500 mr-2\" size={14} />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-primary-600">{productData.price}</p>
                      {productData.marketPrice && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-through">{productData.marketPrice}</p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleEnquireClick(e, product.id)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${product.gradient} hover:opacity-90 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center shadow-lg`}
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;