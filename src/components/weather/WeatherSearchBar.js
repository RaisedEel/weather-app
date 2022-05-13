import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { weathersActions } from '../../store/weathers-slice';

function WeatherSearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      const data = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${searchTerm}`
      );

      const foundWeathers = await data.json();

      dispatch(weathersActions.resetWeathers());
      for (const weather of foundWeathers) {
        const weatherData = await fetch(
          `https://www.metaweather.com/api/location/${weather.woeid}/`
        );
        const weatherDetails = await weatherData.json();
        const [weatherInfo] = weatherDetails['consolidated_weather'];
        dispatch(
          weathersActions.addWeather({
            title: weatherDetails.title,
            id: weather.woeid,
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
    <form onSubmit={onSubmitHandler}>
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
