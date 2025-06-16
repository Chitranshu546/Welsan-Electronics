import React from 'react';
import { Building, MapPin, Users, Award, Star, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const clients = [
  { 
    name: 'Sagar Enterprises', 
    location: 'Akhnoor, J&K',
    description: 'Leading distributor of EV charging solutions in Jammu & Kashmir region, serving over 200+ customers with reliable charging infrastructure.',
    specialization: 'E-Rickshaw Chargers',
    yearsWithUs: '3+',
    rating: 4.9,
    projects: 150
  },
  { 
    name: 'Mohan Electronics', 
    location: 'Haridwar',
    description: 'Trusted electronics retailer specializing in smart home solutions and EV charging equipment for residential and commercial use.',
    specialization: 'Smart TVs & Chargers',
    yearsWithUs: '4+',
    rating: 4.8,
    projects: 200
  },
  { 
    name: 'Evergreen Automatic', 
    location: 'R.S. Pura, Jammu',
    description: 'Automotive electronics specialist providing comprehensive EV charging solutions and maintenance services across the region.',
    specialization: 'Automotive Electronics',
    yearsWithUs: '2+',
    rating: 4.7,
    projects: 120
  },
  { 
    name: 'Jeet Motors', 
    location: 'Bulandshahr',
    description: 'Premier automotive service center offering complete EV solutions including chargers, batteries, and technical support.',
    specialization: 'EV Solutions',
    yearsWithUs: '3+',
    rating: 4.8,
    projects: 180
  },
  { 
    name: 'Sigma Electric Vehicle', 
    location: 'Indirapuram, Ghaziabad',
    description: 'Innovative EV technology company focused on sustainable transportation solutions and advanced charging infrastructure.',
    specialization: 'EV Technology',
    yearsWithUs: '5+',
    rating: 4.9,
    projects: 300
  },
  { 
    name: 'Krishna Motors', 
    location: 'Bijnor',
    description: 'Full-service automotive dealer specializing in electric vehicles and providing comprehensive charging solutions to customers.',
    specialization: 'EV Sales & Service',
    yearsWithUs: '2+',
    rating: 4.6,
    projects: 100
  },
  { 
    name: 'Raj Enterprises', 
    location: 'Dumka, Jharkhand',
    description: 'Regional electronics distributor serving rural and urban markets with quality EV charging equipment and smart electronics.',
    specialization: 'Regional Distribution',
    yearsWithUs: '3+',
    rating: 4.7,
    projects: 140
  },
  { 
    name: 'Om Balajee Automobile India Pvt. Ltd.', 
    location: 'Sahibabad',
    description: 'Large-scale automotive manufacturer and distributor providing OEM-quality EV charging solutions for commercial applications.',
    specialization: 'OEM Solutions',
    yearsWithUs: '4+',
    rating: 4.8,
    projects: 250
  },
];

const Clients: React.FC = () => {
  const navigate = useNavigate();

  const handlePartnershipInquiry = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadBrochure = () => {
    // In a real application, this would trigger a download
    alert('Brochure download will be available soon. Please contact us for more information.');
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-primary-600">Trusted Partners</span>
          </h1>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Building lasting partnerships across India with dealers and distributors who share our commitment to quality and innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '50+', label: 'Active Partners', icon: Users },
            { number: '1500+', label: 'Projects Completed', icon: Award },
            { number: '15+', label: 'States Covered', icon: MapPin },
            { number: '4.8', label: 'Average Rating', icon: Star },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="inline-block p-4 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full">
                  <Building className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 ml-1">{client.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {client.name}
              </h3>
              
              <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                <MapPin size={16} className="mr-2 text-primary-500" />
                <span className="text-sm">{client.location}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                {client.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Specialization:</span>
                  <span className="font-medium text-primary-600 dark:text-primary-400">{client.specialization}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Partnership:</span>
                  <span className="font-medium text-secondary-600 dark:text-secondary-400 flex items-center">
                    <Users size={14} className="mr-1" />
                    {client.yearsWithUs} years
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Projects:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{client.projects}+</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our network of successful dealers and distributors across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handlePartnershipInquiry}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center justify-center"
            >
              <Mail className="mr-2" size={18} />
              Partnership Inquiry
            </button>
            <button 
              onClick={handleDownloadBrochure}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors transform hover:scale-105 flex items-center justify-center"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;