import { createSlice } from '@reduxjs/toolkit';

// Redux Slice para guardar las ciudades favoritas
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;
