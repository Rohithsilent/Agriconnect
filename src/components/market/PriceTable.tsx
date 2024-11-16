import React from 'react';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

const mockPrices = [
  { crop: 'Wheat', price: 1850, change: 2.5, trend: 'up', volume: '12,500', region: 'North India' },
  { crop: 'Rice', price: 2200, change: -1.2, trend: 'down', volume: '15,000', region: 'South India' },
  { crop: 'Corn', price: 1650, change: 3.1, trend: 'up', volume: '8,900', region: 'Central India' },
  { crop: 'Soybeans', price: 3100, change: 1.8, trend: 'up', volume: '10,200', region: 'West India' },
  { crop: 'Cotton', price: 5600, change: -0.8, trend: 'down', volume: '7,500', region: 'Central India' },
  { crop: 'Sugarcane', price: 280, change: 1.2, trend: 'up', volume: '25,000', region: 'North India' },
];

export default function PriceTable() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹/Q)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume (Q)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockPrices.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.crop}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.region}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">₹{item.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center text-sm ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-5 w-5 mr-1" />
                    ) : (
                      <TrendingDown className="h-5 w-5 mr-1" />
                    )}
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.volume}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900 flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}