import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  { id: '0', name: 'Dude Lebowski' },
  { id: '1', name: 'Neil Young' },
  { id: '2', name: 'Dave Gray' },
];
const usersSlice = createSlice({
  name: 'ishrar',
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
//above users is from store reducer name and can access directly
export default usersSlice.reducer;
