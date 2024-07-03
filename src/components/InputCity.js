import React, { useState, useContext, useEffect } from 'react';
import '../stylesheets/InputCity.css';
import { WeatherContext } from '../App';


function InputCity(props) {
  const {weatherState, setWeatherState} = useContext(WeatherContext);
  const [apiResponse, setApiResponse] = useState(null);
   
  const apiKey = 'eb9bc404b1cd23cfb07f9eedb8339685';
  const [input2, setInput2] = useState('');
  useEffect(()=> {
    if(weatherState.guessTemp !== '' ){
    setWeatherState (prev => ({
      ...prev,
      temp: apiResponse?.main.temp,
  }))
}
}, [weatherState.guessTemp, weatherState.isTempSubmitted, apiResponse?.main.temp, setWeatherState])

  const handleChangeInput = e => {
      setInput2(e.target.value);
    } ;

    const onSubmitInput = async e => { 
      e.preventDefault();
      const response = await fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input2+'&appid='+apiKey+'&units=metric')
      .then(response => response.json())
      .catch(err => alert('Wrong city name'))
      

      console.log('onInputCountry', response)
      if (props.onSubmitResponse) {
        props.onSubmitResponse(response)
      }

      setApiResponse(response)
      
      setWeatherState(prev => ({
        ...prev, 
        city:input2,
        isCitySubmitted: true
      }))
    };

    return(
      <form 
      className='ask-form-country'
      onSubmit={onSubmitInput}>
        <input
        className='ask-input-country'
        type='text'
        placeholder='Write down a City you wanna guess'
        name='text'
        onChange={handleChangeInput}
        />
        <button className='guess-boton-country' >
        Confirm 
        </button> 
      </form>
    );
}

export default InputCity;