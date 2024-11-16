import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: 'Jan', wheat: 1800, rice: 2100, corn: 1600 },
  { date: 'Feb', wheat: 1850, rice: 2200, corn: 1650 },
  { date: 'Mar', wheat: 1900, rice: 2150, corn: 1700 },
  { date: 'Apr', wheat: 1850, rice: 2250, corn: 1650 },
  { date: 'May', wheat: 1950, rice: 2300, corn: 1750 },
];

export default function PriceChart() {
  return (
    <div className="h-[400px] w-full bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Trends</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wheat" stroke="#059669" name="Wheat" />
          <Line type="monotone" dataKey="rice" stroke="#0284c7" name="Rice" />
          <Line type="monotone" dataKey="corn" stroke="#9333ea" name="Corn" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}