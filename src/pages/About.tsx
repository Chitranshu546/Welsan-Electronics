import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            About <span className="text-primary-600">Welsan Electronics</span>
          </h1>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Leading the way in electronic innovation since 2017
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              To provide high-quality, innovative electronic solutions that enhance the lives of our customers while promoting sustainable and efficient energy usage.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-600">
              To become India's leading manufacturer of electronic products, recognized for quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '5+', label: 'Years Experience', icon: Shield },
            { number: '1000+', label: 'Happy Customers', icon: Users },
            { number: '50+', label: 'Dealers Network', icon: Award },
            { number: '24/7', label: 'Support', icon: Zap },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 rounded-full bg-primary-100 text-primary-600 mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Founded in 2017, Welsan Electronics emerged from a vision to revolutionize the Indian electronics industry. Starting with a focus on EV chargers, we quickly established ourselves as a trusted manufacturer of quality electronic products.
            </p>
            <p className="mb-4">
              Our journey began in Delhi with a small team of passionate engineers and has now grown into a comprehensive electronics company serving customers across India. We take pride in our commitment to quality, innovation, and customer satisfaction.
            </p>
            <p>
              Today, we continue to expand our product range while maintaining our core values of quality, reliability, and excellent customer service. Our products are designed and manufactured to meet the highest standards of performance and safety.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality First',
              description: 'We never compromise on the quality of our products and services.',
            },
            {
              title: 'Innovation',
              description: 'Constantly improving and adapting to new technologies and market needs.',
            },
            {
              title: 'Customer Focus',
              description: 'Our customers\' success and satisfaction drive everything we do.',
            },
          ].map((value, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;