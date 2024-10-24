// client/src/components/Charts.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './Charts.css';
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

const Charts = React.memo(({ summaries }) => {
  const dataByCity = summaries.reduce((acc, summary) => {
    const { city } = summary;
    if (!acc[city]) acc[city] = [];
    acc[city].push(summary);
    return acc;
  }, {});

  const createChartData = (cityData) => ({
    labels: cityData.map((s) => s.date),
    datasets: [
      {
        label: 'Average Temp (°C)',
        data: cityData.map((s) => parseFloat(s.averageTemp)),
        fill: false,
        borderColor: '#3f51b5',
      },
      {
        label: 'Average Humidity (%)',
        data: cityData.map((s) => parseFloat(s.averageHumidity)),
        fill: false,
        borderColor: '#82ca9d',
      },
      {
        label: 'Average Wind Speed (km/h)',
        data: cityData.map((s) => parseFloat(s.averageWindSpeed)),
        fill: false,
        borderColor: '#ffc658',
      },
    ],
  });

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
    <div className="charts-container">
      <h4>Weather Trends</h4>
      <div className="main-container">
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

Charts.propTypes = {
  summaries: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      averageTemp: PropTypes.number.isRequired,
      averageHumidity: PropTypes.number.isRequired,
      averageWindSpeed: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Charts;
