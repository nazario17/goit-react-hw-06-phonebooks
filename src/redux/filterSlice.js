// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     renderFilter(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export const { renderFilter } = filterSlice.actions;


// filterSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload; // Оновлюємо стан значенням фільтру з екшену
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilter = (state) => state.filter; // Селектор для отримання значення фільтру зі стора

export default filterSlice.reducer;
