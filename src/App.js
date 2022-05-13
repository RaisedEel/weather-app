import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { weathersActions } from './store/weathers-slice';
import FavoritesPage from './pages/FavoritesPage';
import LocationDetailPage from './pages/LocationDetailPage';
import MainPage from './pages/MainPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeStore = async () => {
      const locations = [
        638242, 1521894, 2165352, 44418, 116545, 2122265, 2459115, 455827,
        1105779, 1118370,
      ];

      for (const location of locations) {
        const weatherData = await fetch(
          `https://www.metaweather.com/api/location/${location}/`
        );
        const weatherDetails = await weatherData.json();
        const [weatherInfo] = weatherDetails['consolidated_weather'];
        dispatch(
          weathersActions.addWeather({
            title: weatherDetails.title,
            id: location,
            description: weatherInfo['weather_state_name'],
            temperature: weatherInfo['the_temp'].toFixed(2),
            abbr: weatherInfo['weather_state_abbr'],
          })
        );
      }
    };

    initializeStore();
  }, [dispatch]);

  return (
    <Routes>
      <Route path='*' element={<Navigate replace to='/main' />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/weather/:locationId' element={<LocationDetailPage />} />
    </Routes>
  );
}

export default App;
