import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/clients', label: 'Clients' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-white/95 via-primary-50/90 to-secondary-50/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-r from-white/90 via-primary-50/80 to-secondary-50/90 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-900/90 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={scrollToTop}>
          <div className="relative">
            <img 
              src="/logo.jpg" 
              alt="Welsan Electronics" 
              className="h-14 w-auto rounded-lg shadow-sm bg-white/10 backdrop-blur-sm p-1 mix-blend-multiply dark:mix-blend-normal dark:bg-white/20"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={scrollToTop}
              className={`text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700/30 backdrop-blur-sm ${
                location.pathname === item.path ? 'text-primary-600 dark:text-primary-400 bg-white/40 dark:bg-gray-700/40 shadow-sm' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-600/50 transition-all duration-300 backdrop-blur-sm"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="text-yellow-400\" size={20} />
            ) : (
              <Moon className="text-gray-700" size={20} />
            )}
          </button>

          <button 
            className="md:hidden text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-white/95 via-primary-50/90 to-secondary-50/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 backdrop-blur-md animate-slide-down border-t border-white/20 dark:border-gray-700/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2 font-medium px-3 rounded-lg hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 text-left ${
                  location.pathname === item.path ? 'text-primary-600 dark:text-primary-400 bg-white/40 dark:bg-gray-700/40' : ''
                }`}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;