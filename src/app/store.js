import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../reducer/CounterSlice';
export const store = configureStore({
  reducer: {
    counter1: counterSlice,
  },
});
