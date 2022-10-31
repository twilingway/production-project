import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userAction } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

interface ILoginUserProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<IUser, ILoginUserProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userAction.setAuthData(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue('Wrong username or password');
    }
  }
);
