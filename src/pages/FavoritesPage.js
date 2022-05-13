import { useSelector } from 'react-redux';

import WeathersList from '../components/weather/WeatherList';

function FavoritesPage() {
  const { favorites } = useSelector((state) => state.favorites);

  return <WeathersList weathers={favorites} />;
}

export default FavoritesPage;
