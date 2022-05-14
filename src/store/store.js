import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './alert-slice';

import favoritesSlice from './favorites-slice';
import weathersSlice from './weathers-slice';

// Redux Store creado de los Slices (Redux Toolkit)
const store = configureStore({
  reducer: {
    weathers: weathersSlice.reducer,
    favorites: favoritesSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
