import { createSlice } from '@reduxjs/toolkit';

const weathersSlice = createSlice({
  name: 'weathers',
  initialState: {
    weathers: [],
  },
  reducers: {
    addWeather(state, actions) {
      state.weathers.push(actions.payload);
    },
    resetWeathers(state) {
      state.weathers = [];
    },
  },
});

export const weathersActions = weathersSlice.actions;
export default weathersSlice;
