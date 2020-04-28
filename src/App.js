import React from 'react';
import './App.css';
import LocationList from './components/LocationList.component';

const cities = [
  "medellín,co",
  "bogotá, co",
  "londres, ing",
  "Buenos Aires, ar",
  "Ciudad de México, mx",
  "Madrid, es"
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
