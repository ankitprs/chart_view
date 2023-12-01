import React, { useState } from 'react';
import { ScatterChart, BubbleChart } from '../components'
import { useNavigate } from 'react-router-dom'


const ReactJSChart = () => {
  const [chartId, setChartId] = useState(true)
  const navigate = useNavigate()

  const JSChart = () => {
    return chartId ? (
      <BubbleChart />
    ) : (
      <ScatterChart />
    )
  }

  return (
    <div className={`bg-gray-900 text-white h-screen flex flex-col items-center justify-center`}>
      <div className="flex mb-8 m-10">
        <button className={`text-white px-6 py-3 rounded-md mr-4  focus:outline-none  ${chartId ? 'bg-blue-500' : 'bg-gray-700'}`} onClick={() => setChartId(true)}>
          Bubble Chart
        </button>
        <button className={`text-white px-6 py-3 rounded-md mr-4  focus:outline-none  ${chartId ? 'bg-gray-700' : 'bg-blue-500'}`} onClick={() => setChartId(false)}>
          Scatter Chart
        </button>
        <button
          className="mr-4 py-3 px-6 rounded text-white bg-red-500"
          onClick={() => {
            navigate('/')
          }}
        >
          Close
        </button>
      </div>
      <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
        <div className="curve"></div>
        <JSChart />
      </div>
    </div>
  );
};

export default ReactJSChart;
