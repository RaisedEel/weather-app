import { createSlice } from '@reduxjs/toolkit';

// Redux Slice para controlar el mensaje de espera
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
