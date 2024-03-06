import React from 'react';
import './App.css';
import TemperatureCard from "../components/TemperatureCard";

function App() {
  return (
    <div className="flex flex-col">
      <TemperatureCard/>
      <footer className="text-center">&#60;/&#62; with ❤️ by Eric Liu. Thanks for stopping by!</footer>
    </div>
  );
}

export default App;
