import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "Powering Tomorrow's Innovation Today",
    author: "Welsan Electronics Vision"
  },
  {
    text: "Sustainable Energy, Smarter Living",
    author: "Our Commitment"
  },
  {
    text: "Quality That Powers Progress",
    author: "Our Promise"
  },
  {
    text: "Innovation in Every Circuit",
    author: "Engineering Excellence"
  }
];

const Quotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => {
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <Quote className="text-white" size={32} />
            </div>
          </div>
          
          <div className="relative h-32 flex items-center justify-center">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  currentQuote === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                  "{quote.text}"
                </blockquote>
                <cite className="text-primary-200 text-lg font-medium">
                  — {quote.author}
                </cite>
              </div>
            ))}
          </div>
          
          {/* Quote Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;