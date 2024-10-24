import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root element for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App within React Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
