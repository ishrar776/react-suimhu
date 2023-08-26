import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counter/CounterSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
