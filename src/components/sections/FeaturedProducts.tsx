import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BatteryCharging, Tv, ArrowRight, Star, Zap, Shield } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'rickshaw-48v-lithium',
      category: 'chargers',
      title: '48V Lithium Charger',
      description: 'Advanced lithium battery charger with smart charging technology and premium safety features.',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      icon: <BatteryCharging className="w-6 h-6" />,
      price: '₹3,650',
      rating: 4.9,
      features: ['Smart Technology', 'Premium Quality', 'Advanced Safety'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'smart-tv-55',
      category: 'tvs',
      title: '55" Smart LED TV',
      description: '4K Ultra HD Smart TV with stunning picture quality, smart features, and premium design.',
      image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      icon: <Tv className="w-6 h-6" />,
      price: 'Contact for Price',
      rating: 4.8,
      features: ['4K Resolution', 'Smart Features', 'Premium Design'],
      gradient: 'from-indigo-500 to-blue-500'
    },
  ];

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Featured <span className="text-primary-500">Products</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Discover our most popular products, designed for quality and performance with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-semibold text-gray-800 ml-1">{product.rating}</span>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-50 m-4 rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500 p-4"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-br ${product.gradient} rounded-xl text-white shadow-lg`}>
                    {product.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <div className="text-xl font-bold text-primary-600 mt-1">
                      {product.price}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      {idx === 0 && <Zap className="text-blue-500 mr-3\" size={16} />}
                      {idx === 1 && <Shield className="text-green-500 mr-3" size={16} />}
                      {idx === 2 && <Star className="text-purple-500 mr-3\" size={16} />}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                  <button 
                    onClick={(e) => handleEnquireClick(e, product.id)}
                    className={`flex-1 bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center`}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;