import React from "react"
import Location from "./Location";
import WeatherData from "./weatherData";
import "./styles.css"

const WeatherLocation = () => {
  return (
    <div className="weatherLocationCont">
      <Location city={'Medellín'}/>
      <WeatherData />
    </div>

  )
}

export default WeatherLocation;