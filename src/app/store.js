import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../reducer/CounterSlice';
import postsSlice from '../reducer/postSlice';
import usersSlice from '../reducer/usersSlice';
export const store = configureStore({
  reducer: {
    counter1: counterSlice,
    post: postsSlice,
    user: usersSlice,
  },
});
