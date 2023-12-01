import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Chart Library Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="/react-chart" className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gray-700">
          <h2 className="text-xl font-semibold mb-4">React Chart</h2>
        </a>
        <a href="/recharts" className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gray-700">
          <h2 className="text-xl font-semibold mb-4">Recharts</h2>
        </a>
        <a href="/apexcharts" className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gray-700">
          <h2 className="text-xl font-semibold mb-4">ApexCharts</h2>
        </a>
      </div>
    </div>
  );
};

export default App;
