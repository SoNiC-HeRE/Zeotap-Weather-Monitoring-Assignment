import React from 'react';
import PropTypes from 'prop-types';
import './ForecastSummary.css';

const ForecastSummary = ({ summaries }) => {
  if (!summaries || summaries.length === 0) {
    return <h6>Loading forecast summaries...</h6>;
  }

  const renderSummaryCard = ({ city, date, averageTemp, maxTemp, minTemp, averageHumidity, averageWindSpeed, dominantCondition }) => (
    <div key={`${city}-${date}`} className="summary-card">
      <h5>{city} - {date}</h5>
      <p>🌡️ <strong>Average Temp:</strong> {averageTemp}°C</p>
      <p>🌡️ <strong>Max Temp:</strong> {maxTemp}°C</p>
      <p>🌡️ <strong>Min Temp:</strong> {minTemp}°C</p>
      <p>💧 <strong>Average Humidity:</strong> {averageHumidity}%</p>
      <p>🌬️ <strong>Average Wind Speed:</strong> {averageWindSpeed} km/h</p>
      <p>☀️ <strong>Dominant Condition:</strong> {dominantCondition}</p>
    </div>
  );

  return (
    <div className="forecast-summaries-container">
      <h4>Weather Forecast Summaries</h4>
      <div className="main-container">{summaries.map(renderSummaryCard)}</div>
    </div>
  );
};

ForecastSummary.propTypes = {
  summaries: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      averageTemp: PropTypes.number.isRequired,
      maxTemp: PropTypes.number.isRequired,
      minTemp: PropTypes.number.isRequired,
      averageHumidity: PropTypes.number.isRequired,
      averageWindSpeed: PropTypes.number.isRequired,
      dominantCondition: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ForecastSummary;
