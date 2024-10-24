# Weather Monitoring System

This project is a real-time weather monitoring system that retrieves and processes weather data using the OpenWeatherMap API. The system provides summarized insights, alerts based on user-defined thresholds, and visualizations for weather conditions in major metros in India.

## Project Structure

The project is divided into two main directories:

- **client**: Contains a Vite app for the front-end user interface.
- **server**: Contains a Node.js app for the back-end data processing and API integration.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- NPM or Yarn
- OpenWeatherMap API Key (sign up [here](https://openweathermap.org/))

### Installation

1. Clone the repository:

  ```bash
   git clone <repository-url>
   cd <repository-directory>
  ```

2. Navigate to the server directory and install dependencies:

  ```bash
    cd server
    npm install
  ```

3. Navigate to the client directory and install dependencies:

  ```bash
    cd client
    npm install
  ```

4. Configure your OpenWeatherMap API key in the server:

  ```bash
    Create a `.env` file in the server directory with the following content:
           
    API_KEY=your_openweathermap_api_key
  ```

### Running the Application

1. Start the server:
   
  ```bash
     cd server
     npm start
  ```
  The server will start listening for weather updates and processing data.

2. Start the client:
   
  ```bash
     cd client
     npm start
  ```
  Access the application in your web browser at http://localhost:3000

### Features:
 - Real-Time Data Retrieval: Continuously fetch weather data every 5 minutes for specified metros.
 - Temperature Conversion: Convert temperatures from Kelvin to Celsius (or Fahrenheit based on user preference).
 - Daily Weather Summaries: Calculate daily aggregates including average, maximum, minimum temperatures, and dominant weather conditions.
 - Alerting Mechanism: Trigger alerts when specific weather thresholds are breached (e.g., temperature exceeds 35°C).
 - Visualizations: Display daily weather summaries and historical trends.

### Test Cases:
The system includes comprehensive test cases to ensure:
1. Successful connection to the OpenWeatherMap API.
2. Correct data retrieval and parsing.
3. Proper triggering of alerts based on defined thresholds. 

For api testing you can use the following routes ( Postman recommended ):
1. `http://localhost:5002/api/daily-summaries`
2. `http://localhost:5002/api/forecast-summaries`
3. `http://localhost:5002/weather-data`
4. `http://localhost:5002/api/alerts`

### Working


https://github.com/user-attachments/assets/0697a490-2670-4ee9-be2c-444ffaf36040


