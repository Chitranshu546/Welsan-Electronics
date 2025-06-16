import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionScroll = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative mr-3">
                <img 
                  src="/logo.jpg" 
                  alt="Welsan Electronics" 
                  className="h-8 w-auto rounded-md bg-white/10 backdrop-blur-sm p-1"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                  }}
                />
              </div>
              <h3 className="text-xl font-bold">Welsan Electronics</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Powering the Future of Electric Mobility and Smart Living. Leading manufacturer of EV chargers and Smart LED TVs since 2017.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-400 hover:bg-blue-500 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('services')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/products')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/clients')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Clients
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="text-primary-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="tel:+919871329260" 
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +91 9871329260
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="mailto:contact@welsanelectronics.com" 
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  contact@welsanelectronics.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="https://maps.google.com/?q=A-473,+Mayur+Vihar+Phase-3,+Delhi+110096" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  A-473, Mayur Vihar Phase-3, Delhi – 110096
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-500 text-sm mb-4 md:mb-0">
              Welsan Electronics © {new Date().getFullYear()} | Powered by Innovation | EV Chargers & LED TVs
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => handleNavigation('/privacy')}
                className="text-gray-500 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms')}
                className="text-gray-500 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;