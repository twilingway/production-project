import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IUser, userAction } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

interface ILoginUserProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<IUser, ILoginUserProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.post<IUser>('/login', authData);

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
