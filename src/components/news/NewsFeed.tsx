import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const mockNews = [
  {
    id: 1,
    title: 'New Organic Farming Subsidy Announced',
    category: 'Government Policies',
    date: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    excerpt: 'The government has announced a new subsidy scheme for organic farmers, offering up to ₹50,000 per hectare...'
  },
  {
    id: 2,
    title: 'Advanced Irrigation Techniques for Water Conservation',
    category: 'Technology',
    date: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    excerpt: 'Learn about the latest irrigation technologies that can help reduce water consumption by up to 40%...'
  },
  {
    id: 3,
    title: 'Monsoon Forecast: Early Arrival Expected',
    category: 'Weather',
    date: '1 day ago',
    image: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    excerpt: 'Meteorological Department predicts early monsoon arrival this year, bringing good news for farmers...'
  }
];

export default function NewsFeed() {
  return (
    <div className="space-y-6">
      {mockNews.map((news) => (
        <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={news.image}
                alt={news.title}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {news.category}
                </span>
                <div className="flex items-center ml-4 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {news.date}
                </div>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900">{news.title}</h2>
              <p className="mt-3 text-gray-600">{news.excerpt}</p>
              <div className="mt-4">
                <button className="inline-flex items-center text-green-600 hover:text-green-700">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}