import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Building, MapPin, Users } from 'lucide-react';

const clients = [
  { 
    name: 'Sagar Enterprises', 
    location: 'Akhnoor, J&K',
    description: 'Leading distributor of electric vehicle charging solutions in the Jammu & Kashmir region, specializing in E-Rickshaw chargers and serving the growing electric mobility market.',
    specialization: 'E-Rickshaw Chargers',
    yearsWithUs: '3',
    chargersSold: 850
  },
  { 
    name: 'Mohan Electronics', 
    location: 'Haridwar, Uttarakhand',
    description: 'Established electronics retailer with expertise in consumer electronics, smart home solutions, and electric vehicle charging equipment for both residential and commercial applications.',
    specialization: 'Smart TVs & Chargers',
    yearsWithUs: '2',
    chargersSold: 650
  },
  { 
    name: 'Evergreen Automatic', 
    location: 'R.S. Pura, Jammu',
    description: 'Automotive electronics specialist providing comprehensive electric vehicle solutions including chargers, maintenance services, and technical support across the Jammu region.',
    specialization: 'Automotive Electronics',
    yearsWithUs: '2',
    chargersSold: 420
  },
  { 
    name: 'Jeet Motors', 
    location: 'Bulandshahr, UP',
    description: 'Premier automotive service center and dealer offering complete electric vehicle solutions including E-Rickshaw and E-Scooter chargers, batteries, and comprehensive technical support.',
    specialization: 'EV Solutions',
    yearsWithUs: '3',
    chargersSold: 720
  },
  { 
    name: 'Sigma Electric Vehicle', 
    location: 'Indirapuram, Ghaziabad',
    description: 'Innovative electric vehicle technology company focused on sustainable transportation solutions, advanced charging infrastructure, and promoting clean energy adoption.',
    specialization: 'EV Technology',
    yearsWithUs: '3',
    chargersSold: 1200
  },
  { 
    name: 'Krishna Motors', 
    location: 'Bijnor, UP',
    description: 'Full-service automotive dealer specializing in electric vehicles, providing comprehensive charging solutions, vehicle sales, and after-sales service to customers.',
    specialization: 'EV Sales & Service',
    yearsWithUs: '2',
    chargersSold: 380
  },
  { 
    name: 'Raj Enterprises', 
    location: 'Dumka, Jharkhand',
    description: 'Regional electronics distributor serving both rural and urban markets with quality electric vehicle charging equipment, smart electronics, and consumer appliances.',
    specialization: 'Regional Distribution',
    yearsWithUs: '3',
    chargersSold: 560
  },
  { 
    name: 'Om Balajee Automobile India Pvt. Ltd.', 
    location: 'Sahibabad, UP',
    description: 'Large-scale automotive manufacturer and distributor providing OEM-quality electric vehicle charging solutions for commercial applications and bulk orders.',
    specialization: 'OEM Solutions',
    yearsWithUs: '3',
    chargersSold: 950
  },
];

const Clients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.ceil(clients.length / 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

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

  const visibleClients = clients.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-primary-500">Trusted Partners</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We are proud to serve dealers and distributors across India with our quality products and exceptional service. 
            Our partners are the backbone of our success story.
          </p>
        </div>

        <div ref={contentRef} className="relative opacity-0 transition-all duration-700 delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleClients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full">
                    <Building className="text-primary-600" size={32} />
                  </div>
                </div>
                
                <h3 className="text-center text-xl font-bold mb-3 text-gray-800">
                  {client.name}
                </h3>
                
                <div className="flex items-center justify-center mb-4 text-gray-600">
                  <MapPin size={16} className="mr-2 text-primary-500" />
                  <span className="text-sm">{client.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {client.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Specialization:</span>
                    <span className="font-medium text-primary-600">{client.specialization}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Partnership:</span>
                    <span className="font-medium text-secondary-600 flex items-center">
                      <Users size={14} className="mr-1" />
                      {client.yearsWithUs} years
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Chargers Sold:</span>
                    <span className="font-medium text-gray-800">{client.chargersSold}+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all duration-300 transform hover:scale-110"
                aria-label="Previous clients"
              >
                <ChevronLeft className="text-primary-600" size={24} />
              </button>
              <div className="flex space-x-2 items-center">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary-500 scale-125' 
                        : 'bg-gray-300 hover:bg-primary-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-primary-50 transition-all duration-300 transform hover:scale-110"
                aria-label="Next clients"
              >
                <ChevronRight className="text-primary-600" size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;