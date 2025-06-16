import React, { useEffect, useRef } from 'react';
import { Zap, Cpu, Tv, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-primary-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="opacity-0 transition-all duration-700 delay-100">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About <span className="text-primary-500">Welsan Electronics</span>
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              Reliable. Innovative. Trusted.
            </p>
            <p className="text-gray-600">
              Founded in 2017 and headquartered in Delhi, Welsan Electronics is a leading manufacturer and supplier of EV chargers and LED smart TVs. With a strong focus on customer satisfaction, we provide both lithium and lead-acid compatible chargers for E-Rickshaws and E-Scooters.
            </p>
          </div>
        </div>

        {/* About Content with Promotional Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Features Grid */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 transition-all duration-700 delay-300">
            <FeatureCard
              icon={<Zap size={40} />}
              title="Quality Products"
              description="We manufacture high-quality EV chargers and smart LED TVs with durability and performance as our priority."
            />
            <FeatureCard
              icon={<Cpu size={40} />}
              title="Innovation"
              description="Our products incorporate the latest technology to ensure efficiency and user satisfaction."
            />
            <FeatureCard
              icon={<Tv size={40} />}
              title="Wide Range"
              description="We offer a diverse range of products to meet various customer needs and preferences."
            />
            <FeatureCard
              icon={<Shield size={40} />}
              title="Warranty Backed"
              description="All our products come with a 1-year warranty, ensuring peace of mind for our customers."
            />
          </div>

          {/* Promotional Image */}
          <div ref={imageRef} className="opacity-0 transition-all duration-700 delay-500">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="/home page poster copy.jpg"
                alt="Welsan Electronics - Good Quality Best Price"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;