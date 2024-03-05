import React from 'react';
import './App.css';
import WeatherCard from "../components/WeatherCard";

function App() {
  return <>
    <div className="flex flex-col">
      <WeatherCard/>
      <footer className="text-center">&#60;/&#62; with ❤️ by Eric Liu. Thanks for stopping by!</footer>
    </div>
  </>;
}

export default App;
