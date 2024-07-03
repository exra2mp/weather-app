
import './App.css';
import weatherapplogo from './images/logoWeather.png';
import Input from './components/Input';
import InputCity from './components/InputCity';
import { useState, createContext } from 'react';


export const WeatherContext = createContext();
export const initialValuesState = {
  city: '',
  temp: '',
  guessTemp:'',
  isCitySubmitted: false,
  isTempSubmitted: false,
  compareTemp: (a, b) => {
    const compare = parseFloat(a).toFixed(2) === parseFloat(b).toFixed(2)
    console.log (compare);
    return compare;
  },
  
}

function App() {
  const [weatherState, setWeatherState] = useState(initialValuesState)

  console.log('@App.js: ', weatherState);

  return (
    <div className="weather-ask-app">
      <div className= 'app-logo-container'>
        <img 
          src={weatherapplogo} 
          className='weatherapp-logo'
          alt='applogo'
        />
      </div>
      <div className= 'guessing-container-principal'>
        <h1>Guess the Temperature in a City!!</h1>
        <WeatherContext.Provider value={{ weatherState, setWeatherState }}>
          <InputCity />
          <Input  />
          {weatherState.city !== '' && weatherState.temp !== '' && weatherState.guessTemp && (<p className='answer-holder'>The temperature in <span id='city'>{weatherState.city}</span> right now is <span id='temp'>{weatherState.temp}</span> °C, your prediction was {weatherState.compareTemp(weatherState.temp, weatherState.guessTemp) ? 'correct' : 'incorrect'}!!</p>) }     
        </WeatherContext.Provider>
      </div>     
    </div>
  );
}

export default App;
