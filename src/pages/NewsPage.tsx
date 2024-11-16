import React from 'react';
import NewsFilters from '../components/news/NewsFilters';
import NewsFeed from '../components/news/NewsFeed';
import WeatherWidget from '../components/news/WeatherWidget';
import TrendingTopics from '../components/news/TrendingTopics';

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Agricultural News</h1>
        <p className="mt-2 text-gray-600">Stay updated with the latest farming news and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NewsFilters />
          <NewsFeed />
        </div>
        
        <div className="space-y-6">
          <WeatherWidget />
          <TrendingTopics />
        </div>
      </div>
    </div>
  );
}