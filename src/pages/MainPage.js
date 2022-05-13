import { Fragment } from 'react';

import WeathersList from '../components/weather/WeatherList';
import WeatherSearchBar from '../components/weather/WeatherSearchBar';

function MainPage() {
  return (
    <Fragment>
      <WeatherSearchBar />
      <WeathersList />
    </Fragment>
  );
}

export default MainPage;
