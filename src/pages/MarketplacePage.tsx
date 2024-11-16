import React from 'react';
import ListingFilters from '../components/marketplace/ListingFilters';
import ListingGrid from '../components/marketplace/ListingGrid';
import AddListingButton from '../components/marketplace/AddListingButton';

export default function MarketplacePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="mt-2 text-gray-600">Connect directly with buyers and sellers</p>
        </div>
        <AddListingButton />
      </div>

      <ListingFilters />
      <ListingGrid />
    </div>
  );
}