import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ChevronRight, BatteryCharging, Star, Zap, Shield, ArrowRight, Tv, ChevronLeft } from 'lucide-react';

interface ProductModel {
  id: string;
  name: string;
  image: string;
  specs: string;
  price: string;
  marketPrice: string;
  description: string;
  features: string[];
  detailedFeatures: string[];
}

interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  specs: string;
  price: string;
  marketPrice: string;
  description: string;
  image: string;
  rating: number;
  features: string[];
  detailedFeatures: string[];
  gradient: string;
  productType: 'chargers' | 'tvs';
  hasModels?: boolean;
  models?: ProductModel[];
}

const products: Product[] = [
  // E-Rickshaw Chargers
  {
    id: 'rickshaw-48v-lead',
    name: '48V Lead-Acid Charger',
    category: 'E-Rickshaw',
    type: 'Lead-Acid',
    specs: '48V/18A',
    price: '₹3,250',
    marketPrice: '₹3,700',
    description: 'High-quality charger for E-Rickshaws with advanced safety features and reliable performance.',
    image: '/E-rickshaw 48v.jpg',
    rating: 4.8,
    features: ['Fast Charging', 'Safety Protection', 'Durable Build'],
    detailedFeatures: [
      'Automatic cut-off when battery is fully charged',
      'Over-voltage and over-current protection',
      'LED indicators for charging status',
      'Compact and lightweight design',
      'Compatible with all lead-acid batteries',
      '1-year comprehensive warranty'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    productType: 'chargers',
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
        features: ['Fast Charging', 'Safety Protection', 'Durable Build'],
        detailedFeatures: [
          'Automatic cut-off when battery is fully charged',
          'Over-voltage and over-current protection',
          'LED indicators for charging status',
          'Compact and lightweight design',
          'Compatible with all lead-acid batteries',
          '1-year comprehensive warranty'
        ]
      },
      {
        id: 'model-2',
        name: 'Premium Model 1',
        image: '/e-rickshaw 48v model 2 copy.jpg',
        specs: '48V/18A',
        price: '₹3,250',
        marketPrice: '₹3,700',
        description: 'Premium 48V lead-acid charger with enhanced features and advanced protection.',
        features: ['Fast Charging', 'Advanced Protection', 'Premium Build'],
        detailedFeatures: [
          'Enhanced charging algorithm for faster charging',
          'Advanced multi-layer protection system',
          'Digital display with real-time monitoring',
          'Premium aluminum housing for better heat dissipation',
          'Smart temperature compensation',
          '1-year comprehensive warranty'
        ]
      },
      {
        id: 'model-3',
        name: 'Premium Model 2',
        image: '/e-rick 48v model3 copy.jpg',
        specs: '48V/18A',
        price: '₹3,250',
        marketPrice: '₹3,700',
        description: 'Premium 48V lead-acid charger with superior build quality and enhanced safety.',
        features: ['Fast Charging', 'Superior Safety', 'Premium Design'],
        detailedFeatures: [
          'Superior charging efficiency with smart technology',
          'Enhanced safety features with multiple protection layers',
          'Premium design with improved aesthetics',
          'Advanced cooling system for optimal performance',
          'Smart battery health monitoring',
          '1-year comprehensive warranty'
        ]
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
    description: 'Powerful charger for E-Rickshaws with enhanced efficiency and robust construction.',
    image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    features: ['High Voltage', 'Efficient Charging', 'Long Lasting'],
    detailedFeatures: [
      'High-efficiency switching technology',
      'Temperature compensation for optimal charging',
      'Reverse polarity protection',
      'Aluminum heat sink for better cooling',
      'Universal input voltage range',
      'Professional grade components'
    ],
    gradient: 'from-green-500 to-emerald-500',
    productType: 'chargers'
  },
  {
    id: 'rickshaw-48v-lithium',
    name: '48V Lithium Charger',
    category: 'E-Rickshaw',
    type: 'Lithium',
    specs: '48V/18A',
    price: '₹3,650',
    marketPrice: '₹4,500',
    description: 'Advanced lithium battery charger with smart charging technology and premium safety features.',
    image: '/ev 48 rick lithium copy.jpg',
    rating: 4.9,
    features: ['Smart Technology', 'Premium Quality', 'Advanced Safety'],
    detailedFeatures: [
      'Intelligent BMS communication',
      'Multi-stage charging algorithm',
      'CAN bus communication support',
      'Digital display with real-time data',
      'Remote monitoring capability',
      'IP65 waterproof rating'
    ],
    gradient: 'from-purple-500 to-pink-500',
    productType: 'chargers'
  },
  // E-Scooter Chargers
  {
    id: 'scooter-48v-lead',
    name: '48V E-Scooter Charger',
    category: 'E-Scooter',
    type: 'Lead-Acid',
    specs: '48V/4A',
    price: '₹730',
    marketPrice: '₹890',
    description: 'Compact charger for E-Scooters with reliable performance and cost-effective solution.',
    image: 'https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    features: ['Compact Design', 'Reliable Performance', 'Cost Effective'],
    detailedFeatures: [
      'Portable and lightweight design',
      'Universal compatibility',
      'Short circuit protection',
      'LED charging indicators',
      'Energy efficient operation',
      'Affordable pricing'
    ],
    gradient: 'from-orange-500 to-red-500',
    productType: 'chargers'
  },
  {
    id: 'scooter-60v-lead',
    name: '60V E-Scooter Charger',
    category: 'E-Scooter',
    type: 'Lead-Acid',
    specs: '60V/4A',
    price: '₹780',
    marketPrice: '₹900',
    description: 'High-voltage charger for E-Scooters with safety features and efficient charging.',
    image: 'https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    features: ['High Voltage', 'Safety Features', 'Compact Size'],
    detailedFeatures: [
      'High voltage charging capability',
      'Built-in safety mechanisms',
      'Compact and portable design',
      'LED status indicators',
      'Overcharge protection',
      'Durable construction'
    ],
    gradient: 'from-teal-500 to-blue-500',
    productType: 'chargers'
  },
  {
    id: 'scooter-lithium',
    name: '48V/60V Lithium Charger',
    category: 'E-Scooter',
    type: 'Lithium',
    specs: '48V-60V/6A',
    price: '₹2,150',
    marketPrice: '₹2,750',
    description: 'Universal lithium charger for E-Scooters with dual voltage support and smart charging.',
    image: '/scooty 48v lithium.jpg',
    rating: 4.8,
    features: ['Dual Voltage', 'Smart Charging', 'Universal Compatibility'],
    detailedFeatures: [
      'Dual voltage support (48V/60V)',
      'Smart charging algorithm',
      'Universal lithium compatibility',
      'Digital display interface',
      'Temperature monitoring',
      'Premium build quality'
    ],
    gradient: 'from-indigo-500 to-purple-500',
    productType: 'chargers'
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
    description: 'Compact smart TV perfect for bedrooms and small spaces with HD Ready resolution.',
    image: '/32 inch.jpg',
    rating: 4.6,
    features: ['HD Ready', 'Smart Apps', 'Energy Efficient'],
    detailedFeatures: [
      'HD Ready resolution (1366x768)',
      'Built-in smart platform',
      'WiFi connectivity',
      'Multiple HDMI ports',
      'USB media playback',
      'Energy efficient LED backlight'
    ],
    gradient: 'from-teal-500 to-green-500',
    productType: 'tvs'
  },
  {
    id: 'smart-tv-43',
    name: '43" Smart LED TV',
    category: 'LED TV',
    type: '4K Ultra HD',
    specs: '43" Display',
    price: 'Contact for Price',
    marketPrice: '',
    description: 'Perfect balance of size and features for living rooms with 4K Ultra HD resolution.',
    image: '/43 inch.jpg',
    rating: 4.7,
    features: ['4K Resolution', 'Smart Features', 'Premium Design'],
    detailedFeatures: [
      '4K Ultra HD resolution (3840x2160)',
      'HDR10 support',
      'Smart TV platform with apps',
      'Voice control ready',
      'Multiple connectivity options',
      'Sleek modern design'
    ],
    gradient: 'from-indigo-500 to-purple-500',
    productType: 'tvs'
  },
  {
    id: 'smart-tv-55',
    name: '55" Smart LED TV',
    category: 'LED TV',
    type: '4K Ultra HD',
    specs: '55" Display',
    price: 'Contact for Price',
    marketPrice: '',
    description: 'Large screen entertainment with stunning 4K clarity and smart features.',
    image: '/tv.jpg',
    rating: 4.8,
    features: ['4K Resolution', 'Smart Features', 'Premium Design'],
    detailedFeatures: [
      '4K Ultra HD resolution (3840x2160)',
      'HDR10+ support for enhanced colors',
      'Built-in WiFi and smart apps',
      'Multiple HDMI and USB ports',
      'Voice control compatibility',
      'Sleek bezel-less design'
    ],
    gradient: 'from-pink-500 to-rose-500',
    productType: 'tvs'
  },
  {
    id: 'smart-tv-65',
    name: '65" Smart LED TV',
    category: 'LED TV',
    type: '4K Ultra HD',
    specs: '65" Display',
    price: 'Contact for Price',
    marketPrice: '',
    description: 'Cinema-like experience with premium features and design for ultimate entertainment.',
    image: '/tv.jpg',
    rating: 4.9,
    features: ['4K Resolution', 'Premium Audio', 'Cinema Experience'],
    detailedFeatures: [
      '4K Ultra HD resolution (3840x2160)',
      'HDR10+ and Dolby Vision support',
      'Premium audio with Dolby Atmos',
      'Advanced smart TV platform',
      'Gaming mode with low latency',
      'Premium aluminum frame design'
    ],
    gradient: 'from-violet-500 to-purple-500',
    productType: 'tvs'
  }
];

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedModel, setSelectedModel] = useState<ProductModel | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const currentProduct = products.find(p => p.id === id);
    if (currentProduct) {
      setProduct(currentProduct);
      
      // Handle model selection
      if (currentProduct.hasModels && currentProduct.models) {
        const modelId = searchParams.get('model');
        const model = currentProduct.models.find(m => m.id === modelId) || currentProduct.models[0];
        setSelectedModel(model);
      }
      
      // Get related products from the same category
      const related = products
        .filter(p => p.category === currentProduct.category && p.id !== id)
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [id, searchParams]);

  const handleEnquireClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRelatedProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    if (product) {
      let activeTab = 'chargers';
      if (product.productType === 'tvs') {
        activeTab = 'tvs';
      }
      
      navigate('/products', { state: { activeTab } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleModelChange = (modelIndex: number) => {
    if (product?.models) {
      const model = product.models[modelIndex];
      setSelectedModel(model);
      navigate(`/product/${id}?model=${model.id}`, { replace: true });
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product not found</h1>
          <button
            onClick={handleBackToProducts}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const displayData = selectedModel || product;
  const savings = displayData.marketPrice ? 
    parseInt(displayData.marketPrice.replace(/[^\d]/g, '')) - parseInt(displayData.price.replace(/[^\d]/g, '')) : 0;
  const savingsPercentage = displayData.marketPrice && savings > 0 ? 
    Math.round((savings / parseInt(displayData.marketPrice.replace(/[^\d]/g, ''))) * 100) : 0;

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <button onClick={() => navigate('/')} className="hover:text-primary-600 dark:hover:text-primary-400">Home</button>
          <ChevronRight size={16} />
          <button onClick={handleBackToProducts} className="hover:text-primary-600 dark:hover:text-primary-400">Products</button>
          <ChevronRight size={16} />
          <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-8">
              <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden">
                <img
                  src={displayData.image}
                  alt={displayData.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${product.gradient} shadow-lg`}>
                {product.category}
              </span>
            </div>

            {/* Rating Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center shadow-lg">
                <Star className="text-yellow-400 fill-current" size={18} />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 ml-1">{product.rating}</span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
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
                <span className="text-gray-600 dark:text-gray-400 font-medium">{displayData.specs}</span>
              </div>
            </div>

            {/* Model Switcher */}
            {product.hasModels && product.models && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Available Models</h3>
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <button
                    onClick={() => {
                      const currentIndex = product.models!.findIndex(m => m.id === selectedModel?.id) || 0;
                      const newIndex = currentIndex > 0 ? currentIndex - 1 : product.models!.length - 1;
                      handleModelChange(newIndex);
                    }}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ChevronLeft size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <div className="text-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedModel?.name}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const currentIndex = product.models!.findIndex(m => m.id === selectedModel?.id) || 0;
                      const newIndex = currentIndex < product.models!.length - 1 ? currentIndex + 1 : 0;
                      handleModelChange(newIndex);
                    }}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ChevronRight size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            )}
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{displayData.description}</p>
            
            {/* Pricing */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {displayData.price}
                  </div>
                  {displayData.marketPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                        {displayData.marketPrice}
                      </span>
                      {savings > 0 && (
                        <span className="bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 px-3 py-1 rounded-full text-sm font-medium">
                          Save ₹{savings} ({savingsPercentage}% off)
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {displayData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    {idx === 0 && <Zap className="text-blue-500 mr-3\" size={20} />}
                    {idx === 1 && <Shield className="text-green-500 mr-3" size={20} />}
                    {idx === 2 && <Star className="text-purple-500 mr-3\" size={20} />}
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Features */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Detailed Specifications</h3>
              <ul className="space-y-3">
                {displayData.detailedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <button 
              onClick={handleEnquireClick}
              className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-lg`}
            >
              {product.productType === 'tvs' ? <Tv size={24} className="mr-3" /> : <BatteryCharging size={24} className="mr-3" />}
              Enquire Now
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Related <span className="text-primary-500">Products</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
                  onClick={() => handleRelatedProductClick(relatedProduct.id)}
                >
                  <div className="relative">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-50 dark:bg-gray-700 p-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-contain"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                        <Star className="text-yellow-400 fill-current" size={14} />
                        <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 ml-1">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                        {relatedProduct.price}
                      </span>
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center">
                        View Details
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;