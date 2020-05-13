import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import "./styles.css";
import ForecastItem from "./forecastItem/index";
import transformForecast from "../services/transformForecast.service";

const api_key = "50210048b80d62b73d365cdfb22f0f49";
const url = "http://api.openweathermap.org/data/2.5/forecast";

const ForecastExtended = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    //loader on change city
    setForecastData(null)
    //fetch or axios
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;
    fetch(url_forecast)
      .then((resolve) => resolve.json())
      .then((data) => {
        const forecastData = transformForecast(data);
        setForecastData(forecastData);
      });
  }, [city]);

  const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast) => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      ></ForecastItem>
    ));
  };

  const renderProgress = () => {
    return <h3>Cargando Pronóstico extendido...</h3>;
  };

  return (
    <div className="">
      <h2 className="forecastTitle">Pronóstico Extendido para {city}</h2>
      {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
      {}
    </div>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
