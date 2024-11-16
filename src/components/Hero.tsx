import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-700">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Farmer in field"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Empowering Farmers
          <span className="block text-green-200">Connecting Markets</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-green-100">
          Join thousands of farmers who are already benefiting from direct market access,
          real-time prices, and a supportive farming community.
        </p>
        <div className="mt-10 flex space-x-4">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}