import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  candidateName: '',
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: (state) => {
      state.candidateName = '';
    },
    enterByUser: (state, action) => {
      state.candidateName = action.payload;
    },
  },
});
export const { reset, enterByUser } = counterSlice.actions;
export default counterSlice.reducer;
