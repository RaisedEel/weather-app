import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import WeathersList from '../components/weather/WeatherList';
import WeatherSearchBar from '../components/weather/WeatherSearchBar';

function MainPage() {
  const { weathers } = useSelector((state) => state.weathers);
  
  return (
    <Fragment>
      <WeatherSearchBar />
      <WeathersList weathers={weathers} />
    </Fragment>
  );
}

export default MainPage;
