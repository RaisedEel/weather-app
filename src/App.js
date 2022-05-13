import { Routes, Route, Navigate } from 'react-router-dom';

import WeatherDetail from './components/weather/WeatherDetail';
import FavoritesPage from './pages/FavoritesPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Navigate replace to='/main' />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/weather/:locationId' element={<WeatherDetail />} />
    </Routes>
  );
}

export default App;
