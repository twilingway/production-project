import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        password: '123456qwe',
      },
    };
    expect(getLoginPassword(state as IStateSchema)).toEqual('123456qwe');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginPassword(state as IStateSchema)).toEqual('');
  });
});
