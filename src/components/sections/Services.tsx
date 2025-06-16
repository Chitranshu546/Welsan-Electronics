import React, { useEffect, useRef } from 'react';
import { BatteryCharging, Tv, Headphones } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-primary-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            We offer a range of services designed to meet the needs of our clients, with a focus on quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 transition-all duration-700 delay-300">
          <ServiceCard
            icon={<BatteryCharging size={48} />}
            title="EV Charger Supply"
            description="Chargers for E-Rickshaws and E-Scooters in both 48V and 60V, including lithium-compatible variants. All chargers come with a 1-year warranty."
          />
          <ServiceCard
            icon={<Tv size={48} />}
            title="Smart LED TVs"
            description='A range of 4K HD LED Smart TVs available in 32", 43", 50", 55", and 65" sizes. All models include 1-year warranty and on-call service support.'
          />
          <ServiceCard
            icon={<Headphones size={48} />}
            title="Customer Service"
            description="We offer prompt assistance for any product-related issue with a goal to resolve problems as soon as possible."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;