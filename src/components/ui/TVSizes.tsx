import React, { useState } from 'react';
import { Tv } from 'lucide-react';

const sizes = [32, 43, 50, 55, 65];

export const TVSizes: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">LED Smart TVs</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {sizes.map((size) => (
          <button
            key={size}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
              selectedSize === size
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-primary-300'
            }`}
            onClick={() => setSelectedSize(size)}
          >
            <Tv 
              size={selectedSize === size ? 40 : 32} 
              className={`${
                selectedSize === size ? 'text-primary-500' : 'text-gray-700'
              } transition-all mb-2`} 
            />
            <span className={`font-medium ${
              selectedSize === size ? 'text-primary-600' : 'text-gray-800'
            }`}>
              {size}"
            </span>
          </button>
        ))}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-700 mb-2">
          {selectedSize ? `${selectedSize}" Smart TV Features` : 'Select a size to see features'}
        </h4>
        
        {selectedSize && (
          <div className="animate-fade-in">
            <ul className="space-y-2 text-gray-600">
              <li>• 4K Ultra HD Resolution</li>
              <li>• Smart TV with built-in apps</li>
              <li>• Multiple HDMI and USB ports</li>
              <li>• Voice control capability</li>
              <li>• 1-year comprehensive warranty</li>
              {selectedSize >= 50 && <li>• Dolby Audio support</li>}
              {selectedSize >= 55 && <li>• Enhanced gaming mode</li>}
              {selectedSize >= 65 && <li>• Premium aluminum frame</li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};