import React from 'react';
import { Search, Filter, Bell } from 'lucide-react';

export default function NewsFilters() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="relative">
          <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
            <option value="">All Categories</option>
            <option value="policies">Government Policies</option>
            <option value="weather">Weather Updates</option>
            <option value="market">Market Analysis</option>
            <option value="technology">Farming Technology</option>
          </select>
          <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <Bell className="h-5 w-5" />
          <span>Subscribe to Updates</span>
        </button>
      </div>
    </div>
  );
}