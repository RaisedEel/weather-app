import { configureStore } from '@reduxjs/toolkit';

import favoritesSlice from './favorites-slice';
import weathersSlice from './weathers-slice';

const store = configureStore({
  reducer: {
    weathers: weathersSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export default store;
