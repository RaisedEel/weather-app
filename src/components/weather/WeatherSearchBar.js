import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { alertActions } from '../../store/alert-slice';
import { weathersActions } from '../../store/weathers-slice';
import classes from './WeatherSearchBar.module.css';

function WeatherSearchBar() {
  const dispatch = useDispatch();
  const { searchTerm: oldSearchTerm } = useSelector((state) => state.weathers);
  const [searchTerm, setSearchTerm] = useState(oldSearchTerm || '');

  const onChangeTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (searchTerm.length === 0) {
      return;
    }

    const fetchData = async () => {
      dispatch(alertActions.setAlert());
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
      dispatch(alertActions.hideAlert());
    };

    fetchData();
    dispatch(weathersActions.replaceSearchTerm(searchTerm));
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
