import React from 'react';
import PriceFilters from '../components/market/PriceFilters';
import PriceTable from '../components/market/PriceTable';
import PriceChart from '../components/market/PriceChart';

export default function MarketPricesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Market Prices</h1>
        <p className="mt-2 text-gray-600">Track real-time crop prices across different markets</p>
      </div>

      <PriceFilters />
      
      <div className="grid grid-cols-1 gap-6 mb-6">
        <PriceChart />
      </div>

      <PriceTable />
    </div>
  );
}