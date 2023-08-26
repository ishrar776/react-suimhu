import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  count: 5,
  candidateName: 'israr Mastan',
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    enterName: (state) => {
      state.candidateName = 'Zindgi muskil hai';
    },
    enterByUser: (state, action) => {
      state.candidateName = action.payload;
    },
  },
});
export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  enterName,
  enterByUser,
} = counterSlice.actions;
export default counterSlice.reducer;
