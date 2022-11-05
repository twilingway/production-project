import { ILoginSchema } from '../types/loginSchema';
import { loginAction, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<ILoginSchema> = { username: '123' };
    expect(loginReducer(state as ILoginSchema, loginAction.setUsername('123123'))).toEqual({ username: '123123' });
  });

  test('test set password', () => {
    const state: DeepPartial<ILoginSchema> = { password: '123' };
    expect(loginReducer(state as ILoginSchema, loginAction.setPassword('123123'))).toEqual({ password: '123123' });
  });
});
