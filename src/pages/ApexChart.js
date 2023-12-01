import React, { useState } from 'react';
import { ApexChartBar, ApexChartDonut } from '../components'


const ApexChart = () => {
  const [chartId, setChartId] = useState(true)

  const ReactJSChart = () => {
    return chartId ? (
      <ApexChartBar />
    ) : (
      <ApexChartDonut />
    )
  }

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <div className="flex mb-8 m-10">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md mr-4  focus:outline-none" onClick={() => setChartId(true)}>
          Bar Chart
        </button>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-md focus:outline-none" onClick={() => setChartId(false)}>
          Donut Chart
        </button>
      </div>
      <div className="w-fit h-fit min-w-full bg-white rounded-lg overflow-hidden relative">
        <div className="curve"></div>
        <ReactJSChart />
      </div>
    </div>
  );
};

export default ApexChart;
