import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from '../types/userSchema';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
