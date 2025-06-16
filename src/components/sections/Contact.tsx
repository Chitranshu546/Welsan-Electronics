import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-primary-300">Us</span>
          </h2>
          <div className="w-16 h-1 bg-primary-300 mx-auto mb-6"></div>
          <p className="text-gray-300">
            Get in touch with us for any inquiries about our products or services. We're here to help!
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 transition-all duration-700 delay-300">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-primary-300 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-primary-200">Phone</h4>
                  <a href="tel:+919871329260" className="text-gray-300 hover:text-primary-300 transition-colors">
                    +91 9871329260
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary-300 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-primary-200">Email</h4>
                  <a href="mailto:contact@welsanelectronics.com" className="text-gray-300 hover:text-primary-300 transition-colors">
                    contact@welsanelectronics.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary-300 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-primary-200">Address</h4>
                  <a 
                    href="https://maps.google.com/?q=A-473,+Mayur+Vihar+Phase-3,+Delhi+110096" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-300 transition-colors"
                  >
                    A-473, Mayur Vihar Phase-3, Delhi – 110096
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            {submitted ? (
              <div className="bg-secondary-500/20 border border-secondary-400 rounded-lg p-6 text-center animate-fade-in">
                <CheckCircle className="text-secondary-400 mx-auto mb-4" size={48} />
                <p className="text-white font-medium text-lg mb-2">
                  Thank you for your message!
                </p>
                <p className="text-gray-300">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-primary-700/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-white ${
                      errors.name ? 'border-red-500' : 'border-primary-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-primary-700/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-white ${
                      errors.email ? 'border-red-500' : 'border-primary-600'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-primary-700/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-white ${
                      errors.phone ? 'border-red-500' : 'border-primary-600'
                    }`}
                    placeholder="+91 XXXXXXXXXX"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-primary-700/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-white ${
                      errors.subject ? 'border-red-500' : 'border-primary-600'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 bg-primary-700/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 text-white ${
                      errors.message ? 'border-red-500' : 'border-primary-600'
                    }`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-secondary-500 hover:bg-secondary-600 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;