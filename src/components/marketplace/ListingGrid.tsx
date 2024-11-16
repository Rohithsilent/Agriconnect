import React from 'react';
import { MapPin, Star, MessageSquare } from 'lucide-react';

const mockListings = [
  {
    id: 1,
    title: 'Premium Quality Wheat',
    crop: 'Wheat',
    quantity: '50 Quintals',
    price: 2200,
    location: 'Punjab',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    seller: {
      name: 'Rajesh Kumar',
      rating: 4.8,
      reviews: 124
    }
  },
  {
    id: 2,
    title: 'Organic Basmati Rice',
    crop: 'Rice',
    quantity: '30 Quintals',
    price: 3500,
    location: 'Haryana',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    seller: {
      name: 'Amit Singh',
      rating: 4.9,
      reviews: 89
    }
  },
  {
    id: 3,
    title: 'Fresh Sweet Corn',
    crop: 'Corn',
    quantity: '20 Quintals',
    price: 1800,
    location: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    seller: {
      name: 'Suresh Reddy',
      rating: 4.7,
      reviews: 156
    }
  }
];

export default function ListingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockListings.map((listing) => (
        <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
              ₹{listing.price}/Q
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{listing.title}</h3>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{listing.location}</span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Quantity:</span> {listing.quantity}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{listing.seller.rating}</span>
                <span className="text-sm text-gray-500 ml-1">({listing.seller.reviews})</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Contact Seller
              </button>
              <button className="text-green-600 hover:text-green-700">
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}