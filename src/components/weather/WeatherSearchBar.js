import { useState } from 'react';

function WeatherSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    async function fetchData() {
      const data = await fetch(`https://www.metaweather.com/api/location/search/?query=${searchTerm}`);

      const foundWeathers = await data.json();

      for (const weather of foundWeathers) {
        const weatherData = await fetch(`https://www.metaweather.com/api/location/${weather.woeid}/`);
        const weatherDetails = await weatherData.json();

        console.log(weatherDetails.title);
      }

      return
    }

    fetchData();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor='location'>Search Location</label>
      <input id='location' type='text' onChange={onChangeTermHandler} value={searchTerm} />

      <button>Search</button>
    </form>
  );
}

export default WeatherSearchBar;
