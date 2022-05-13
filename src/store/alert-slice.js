import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alert: false,
  },
  reducers: {
    setAlert(state) {
      state.alert = true;
    },
    hideAlert(state) {
      state.alert = false;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;
