import React from 'react';
import './App.css';
import Card from "../../../../../../../../Users/alter/OneDrive/Desktop/components/Card";
import CurrentTemperature from "../../../../../../../../Users/alter/OneDrive/Desktop/components/CurrentTemperature";
import WeekForecast from "../../../../../../../../Users/alter/OneDrive/Desktop/components/WeekForecast";

function App() {
  return <>
    <div className="flex">
      <Card tailwindClasses={"lg:w-1/4"}>
        <CurrentTemperature/>
      </Card>
      <Card tailwindClasses={"lg:w-3/4"}>
        <WeekForecast/>
      </Card>
    </div>
    <footer className="text-center">&#60;/&#62; with ❤️ by Eric Liu. Thanks for stopping by!</footer>
  </>;
}

export default App;
