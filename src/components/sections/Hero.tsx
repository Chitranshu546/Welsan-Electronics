import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const banners = [
  {
    title: "Revolutionary EV Charging",
    description: "Experience the future of electric mobility with our advanced charging solutions",
    image: "https://images.pexels.com/photos/3738737/pexels-photo-3738737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Explore Chargers"
  },
  {
    title: "Smart Entertainment",
    description: "Immerse yourself in crystal-clear 4K entertainment with our Smart LED TVs",
    image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "View TVs"
  },
  {
    title: "Innovation Meets Reliability",
    description: "Leading the way in electronic innovation with quality you can trust",
    image: "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Learn More"
  }
];

const Hero: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => {
      clearInterval(bannerInterval);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentBanner === index ? 'opacity-20 dark:opacity-10' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative">
          <div className="max-w-4xl">
            {/* Animated Banner Content */}
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`transition-all duration-700 absolute ${
                  currentBanner === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl">
                  {banner.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Positioned at bottom left */}
          <div className="absolute bottom-16 left-0">
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProducts}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                Explore Products
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleContactClick}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center justify-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-white opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;