import { configureStore } from '@reduxjs/toolkit';

import weathersSlice from './weathers-slice';

const store = configureStore({
  reducer: {
    weathers: weathersSlice.reducer,
  },
});

export default store;
