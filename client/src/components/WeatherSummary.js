import React from 'react';
import PropTypes from 'prop-types';
import './WeatherSummary.css';

const WeatherSummary = ({ summaries }) => {
  if (!summaries || summaries.length === 0) {
    return <h6>Loading daily summaries...</h6>;
  }

  const renderSummaryCard = ({
    city,
    date,
    averageTemp,
    maxTemp,
    minTemp,
    averageHumidity,
    maxHumidity,
    minHumidity,
    averageWindSpeed,
    maxWindSpeed,
    minWindSpeed,
    dominantCondition
  }) => (
    <div key={`${city}-${date}`} className="summary-card">
      <h5>{`${city} - ${date}`}</h5>
      <p>🌡️ <strong>Average Temp:</strong> {averageTemp}°C</p>
      <p>🌡️ <strong>Max Temp:</strong> {maxTemp}°C</p>
      <p>🌡️ <strong>Min Temp:</strong> {minTemp}°C</p>
      <p>💧 <strong>Average Humidity:</strong> {averageHumidity}%</p>
      <p>💧 <strong>Max Humidity:</strong> {maxHumidity}%</p>
      <p>💧 <strong>Min Humidity:</strong> {minHumidity}%</p>
      <p>🌬️ <strong>Average Wind Speed:</strong> {averageWindSpeed} km/h</p>
      <p>🌬️ <strong>Max Wind Speed:</strong> {maxWindSpeed} km/h</p>
      <p>🌬️ <strong>Min Wind Speed:</strong> {minWindSpeed} km/h</p>
      <p>☀️ <strong>Dominant Condition:</strong> {dominantCondition}</p>
    </div>
  );

  return (
    <div className="weather-summaries-container">
      <h4>Daily Weather Summaries</h4>
      <div className="main-container">{summaries.map(renderSummaryCard)}</div>
    </div>
  );
};

WeatherSummary.propTypes = {
  summaries: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      averageTemp: PropTypes.number.isRequired,
      maxTemp: PropTypes.number.isRequired,
      minTemp: PropTypes.number.isRequired,
      averageHumidity: PropTypes.number.isRequired,
      maxHumidity: PropTypes.number.isRequired,
      minHumidity: PropTypes.number.isRequired,
      averageWindSpeed: PropTypes.number.isRequired,
      maxWindSpeed: PropTypes.number.isRequired,
      minWindSpeed: PropTypes.number.isRequired,
      dominantCondition: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WeatherSummary;
