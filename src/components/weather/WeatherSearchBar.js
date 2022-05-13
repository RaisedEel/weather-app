import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { weathersActions } from '../../store/weathers-slice';
import classes from './WeatherSearchBar.module.css';

function WeatherSearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(searchTerm.length === 0){
      return;
    }

    const fetchData = async () => {
      const data = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${searchTerm}`
      );

      const foundLocations = await data.json();

      dispatch(weathersActions.resetWeathers());
      for (const location of foundLocations) {
        const weatherData = await fetch(
          `https://www.metaweather.com/api/location/${location.woeid}/`
        );
        const weatherDetails = await weatherData.json();
        const [weatherInfo] = weatherDetails['consolidated_weather'];
        dispatch(
          weathersActions.addWeather({
            title: weatherDetails.title,
            id: location.woeid,
            description: weatherInfo['weather_state_name'],
            temperature: weatherInfo['the_temp'].toFixed(2),
            abbr: weatherInfo['weather_state_abbr'],
          })
        );
      }
    };

    fetchData();
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label htmlFor='location'>Search Location</label>
      <input
        id='location'
        type='text'
        onChange={onChangeTermHandler}
        value={searchTerm}
      />

      <button>Search</button>
    </form>
  );
}

export default WeatherSearchBar;
