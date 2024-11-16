import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

const trendingTopics = [
  {
    title: 'Sustainable Farming Practices',
    reads: '2.5k',
    tag: 'Technology'
  },
  {
    title: 'New Pest Control Methods',
    reads: '1.8k',
    tag: 'Protection'
  },
  {
    title: 'Crop Insurance Updates',
    reads: '1.2k',
    tag: 'Policy'
  }
];

export default function TrendingTopics() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Trending Topics</h2>
        <TrendingUp className="h-5 w-5 text-green-600" />
      </div>

      <div className="space-y-4">
        {trendingTopics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">{topic.title}</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500">{topic.reads} reads</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-green-600">{topic.tag}</span>
              </div>
            </div>
            <button className="text-green-600 hover:text-green-700">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}