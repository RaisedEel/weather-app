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

    async function fetchData() {
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

        dispatch(
          weathersActions.addWeather({
            title: weatherDetails.title,
            description:
              weatherDetails['consolidated_weather'][0]['weather_state_name'],
            temperature: weatherDetails['consolidated_weather'][0]['the_temp'],
            abbr: weatherDetails['consolidated_weather'][0][
              'weather_state_abbr'
            ],
          })
        );
      }

      return;
    }

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
