// client/src/components/ForecastCharts.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './ForecastCharts.css';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const ForecastCharts = React.memo(({ summaries }) => {
  // Group summaries by city
  const dataByCity = summaries.reduce((acc, { city, ...summary }) => {
    if (!acc[city]) acc[city] = [];
    acc[city].push(summary);
    return acc;
  }, {});

  // Create chart data
  const createChartData = (cityData) => ({
    labels: cityData.map(({ date }) => date),
    datasets: [
      {
        label: 'Average Temp (°C)',
        data: cityData.map(({ averageTemp }) => parseFloat(averageTemp)),
        fill: false,
        borderColor: '#3f51b5',
      },
      // Add other datasets as needed
    ],
  });

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="forecast-charts-container">
      <h4>Forecast Trends</h4>
      <div className='main-container'>
        {Object.entries(dataByCity).map(([city, cityData]) => (
          <div className="chart-wrapper" key={city}>
            <h5>{city}</h5>
            <Line data={createChartData(cityData)} options={chartOptions} />
          </div>
        ))}
      </div>
    </div>
  );
});

ForecastCharts.propTypes = {
  summaries: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      averageTemp: PropTypes.number.isRequired,
      // Add other properties if necessary
    })
  ).isRequired,
};

export default ForecastCharts;
