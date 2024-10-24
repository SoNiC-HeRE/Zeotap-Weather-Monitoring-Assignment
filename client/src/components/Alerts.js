// client/src/components/Alerts.js
import React from 'react';
import './Alerts.css';

const Alerts = ({ alerts }) => {
  if (!alerts?.length) return null; // Return null if no alerts

  const formatAlertTime = (time) => new Date(time).toLocaleString();

  return (
    <div className="alerts-container">
      <h4>Alerts</h4>
      {alerts.map(({ city, temp, condition, windSpeed, time }) => (
        <div className="alert" key={`${city}-${time}`}>
          <strong>Alert for {city}</strong>
          <p>
            <strong>Temperature:</strong> {temp}°C — {condition}
            <br />
            <strong>Wind Speed:</strong> {windSpeed} km/h
            <br />
            <strong>Time:</strong> {formatAlertTime(time)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
