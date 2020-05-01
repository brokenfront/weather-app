import React from 'react'
import { PropTypes } from 'prop-types';
import "./styles.css"
import ForecastItem from './forecastItem/index';

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];
const data = {
  temperature: 10,
  humidity: 10,
  weatherState: 'normal',
  wind: 10
}

const ForecastExtended = ({city}) => {

  const renderForecastItemDays = () => {
    return days.map( day => (<ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>))
  }

  return (
    <div className="">
      <h2 className="forecastTitle">
        Pronóstico Extendido para {city}
      </h2>
      {renderForecastItemDays()}
    </div>
  )
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
