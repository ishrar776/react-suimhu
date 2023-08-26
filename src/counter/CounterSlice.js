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
    enterName: (state) => {
      state.candidateName = 'Zindgi muskil hai';
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, reset, incrementByAmount, enterName } =
  counterSlice.actions;
export default counterSlice.reducer;
