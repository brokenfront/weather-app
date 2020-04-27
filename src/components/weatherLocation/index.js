import React, { Component } from "react";
import convert from "convert-units";
import Location from "./Location";
import WeatherData from "./weatherData";
import "./styles.css";
import { SUN } from "./../../constants/weathers.constant";

const location = "Medellín, CO";
const api_key = "50210048b80d62b73d365cdfb22f0f49";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: 10,
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Bogotá",
      data: data,
    };
  }

  getTemp = (kelvin) => {
    return convert(kelvin).from("K").to("C");
  };

  getWeatherState = (weather_data) => {
    return SUN;
  };

  getData = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);
    const temperature = this.getTemp(temp)

    const data = {
      humidity,
      temperature
      wind: speed,
      weatherState,
    };
    return data;
  };

  handleUpdateClick = () => {
    fetch(api_weather)
      .then((resolve) => {
        return resolve.json();
      })
      .then((data) => {
        const newWeather = this.getData(data);
        console.log(data);
        debugger;
        this.setState({
          data: newWeather,
        });
        debugger;
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
