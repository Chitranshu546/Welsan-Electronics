import React from 'react';

interface PricingData {
  product: string;
  voltage: string;
  amperage: string;
  price: string;
  marketPrice: string;
}

interface PricingTableProps {
  title: string;
  data: PricingData[];
}

const PricingTable: React.FC<PricingTableProps> = ({ title, data }) => {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-primary-500 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-left">Voltage</th>
            <th className="py-3 px-4 text-left">Amperage</th>
            <th className="py-3 px-4 text-left">Our Price</th>
            <th className="py-3 px-4 text-left">Market Price</th>
            <th className="py-3 px-4 text-left">Savings</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => {
            const price = parseInt(item.price.replace(/[^\d]/g, ''));
            const marketPrice = parseInt(item.marketPrice.replace(/[^\d]/g, ''));
            const savings = marketPrice - price;
            const savingsPercentage = Math.round((savings / marketPrice) * 100);
            
            return (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">{item.product}</td>
                <td className="py-3 px-4">{item.voltage}</td>
                <td className="py-3 px-4">{item.amperage}</td>
                <td className="py-3 px-4 font-medium text-primary-600">{item.price}</td>
                <td className="py-3 px-4 text-gray-500 line-through">{item.marketPrice}</td>
                <td className="py-3 px-4">
                  <span className="inline-block bg-secondary-100 text-secondary-600 px-2 py-1 rounded text-sm font-medium">
                    ₹{savings} ({savingsPercentage}% off)
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;