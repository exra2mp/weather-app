import React, { useState, useContext } from 'react';
import '../stylesheets/Input.css';
import { WeatherContext } from '../App';


function Input(props){
    const {setWeatherState} = useContext(WeatherContext);
  
    const [input, setInput] = useState('');


    const inputCaption = e => {
      setInput(e.target.value);
    } ;

    const onSubmitInput2 = e => { 
      e.preventDefault();
      
      if (setWeatherState) {
        setWeatherState(prev => ({
          ...prev,
          guessTemp:input,
          isTempSubmitted: true
        }))
      }
      
      console.log(input);

      if (props.onSubmit) {
        props.onSubmit(input);
      }
    };

    return(
      <form 
      className='ask-Form'
      onSubmit={onSubmitInput2}>
        <input
        className='ask-input'
        type='text'
        placeholder='Write down a Temperature in Celsius, with decimals'
        name='text'
        onChange={inputCaption}
        />
        <button className='guess-boton'>
        Check Guess
        </button> 
      </form>
    );
}
export default Input;