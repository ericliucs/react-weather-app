import React from "react";
import "./App.css";
import AppHeader from "../components/AppHeader";
import Card from "../components/Card";
import CurrentTemperature from "../components/CurrentTemperature";
import WeekForecast from "../components/WeekForecast";

function App() {
  return <>
    <AppHeader/>
    <div className={"flex flex-wrap sm:flex-nowrap"}>
      <Card tailwindClasses={"basis-full sm:basis-1/4"}>
        <CurrentTemperature/>
      </Card>
      <Card tailwindClasses={"basis-full sm:basis-3/4"}>
        <WeekForecast/>
      </Card>
    </div>
    <footer className="text-center">&#60;/&#62; with ❤️ by Eric Liu. Thanks for stopping by!</footer>
  </>;
}

export default App;
