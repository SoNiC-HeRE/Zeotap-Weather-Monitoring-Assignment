import React, { useEffect, useState } from 'react';
import {
  fetchDailySummaries,
  fetchAlerts,
  fetchForecastSummaries,
} from './services/api';
import WeatherSummary from './components/WeatherSummary';
import ForecastSummary from './components/ForecastSummary';
import Alerts from './components/Alerts';
import Charts from './components/Charts';
import ForecastCharts from './components/ForecastCharts';

function App() {
  const [summaries, setSummaries] = useState([]);
  const [forecastSummaries, setForecastSummaries] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [summariesResponse, forecastResponse, alertsResponse] = await Promise.all([
        fetchDailySummaries(),
        fetchForecastSummaries(),
        fetchAlerts(),
      ]);
      
      setSummaries(summariesResponse.data);
      setForecastSummaries(forecastResponse.data);
      setAlerts(alertsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <h6>Loading data...</h6>;
  }

  if (error) {
    return <h6>{error}</h6>;
  }

  return (
    <div style={{ maxWidth: 'lg', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '38px' }}>Weather Monitoring Dashboard</h2>
      <Alerts alerts={alerts} />
      <WeatherSummary summaries={summaries} />
      <ForecastSummary summaries={forecastSummaries} />
      <Charts summaries={summaries} />
      <ForecastCharts summaries={forecastSummaries} />
    </div>
  );
}

export default App;
