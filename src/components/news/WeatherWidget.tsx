import React from 'react';
import { Cloud, Sun, Droplets, Wind } from 'lucide-react';

export default function WeatherWidget() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Weather Forecast</h2>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Sun className="h-12 w-12 text-yellow-500" />
          <div className="ml-4">
            <div className="text-3xl font-bold">32°C</div>
            <div className="text-gray-600">Mostly Sunny</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Punjab Region</div>
          <button className="text-green-600 text-sm hover:text-green-700">Change Location</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-gray-50 rounded-lg">
          <Droplets className="h-5 w-5 mx-auto text-blue-500 mb-1" />
          <div className="text-sm text-gray-600">Humidity</div>
          <div className="font-semibold">65%</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <Cloud className="h-5 w-5 mx-auto text-gray-500 mb-1" />
          <div className="text-sm text-gray-600">Rain Chance</div>
          <div className="font-semibold">20%</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <Wind className="h-5 w-5 mx-auto text-gray-500 mb-1" />
          <div className="text-sm text-gray-600">Wind Speed</div>
          <div className="font-semibold">12 km/h</div>
        </div>
      </div>
    </div>
  );
}