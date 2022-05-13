import { createSlice } from '@reduxjs/toolkit';

const weathersSlice = createSlice({
  name: 'weathers',
  initialState: {
    weathers: [],
    searchTerm: '',
  },
  reducers: {
    addWeather(state, actions) {
      state.weathers.push(actions.payload);
    },
    resetWeathers(state) {
      state.weathers = [];
    },
    replaceSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const weathersActions = weathersSlice.actions;
export default weathersSlice;
