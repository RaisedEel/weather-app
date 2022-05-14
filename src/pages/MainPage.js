import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import WeathersList from '../components/weather/WeatherList';
import WeatherSearchBar from '../components/weather/WeatherSearchBar';

function MainPage() {
  // UseSelector permite obtener la lista de climas de las ciudades
  const { weathers } = useSelector((state) => state.weathers);

  return (
    <Fragment>
      <WeatherSearchBar />
      <WeathersList weathers={weathers} />
    </Fragment>
  );
}

export default MainPage;
