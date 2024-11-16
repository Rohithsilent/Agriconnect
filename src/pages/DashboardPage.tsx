import React from 'react';
import { Tractor, Users, ShoppingBag, TrendingUp, Newspaper, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';
import MarketPrices from '../components/MarketPrices';

export default function DashboardPage() {
  const stats = [
    { label: 'Active Farmers', value: '15,000+', icon: Users },
    { label: 'Daily Transactions', value: '2,500+', icon: ShoppingBag },
    { label: 'Market Coverage', value: '250+', icon: TrendingUp },
    { label: 'Community Posts', value: '10,000+', icon: MessageSquare },
  ];

  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MarketPrices />
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Updates</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-500">2 hours ago</p>
                  <p className="text-base text-gray-900">New government subsidy announced for organic farming</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}