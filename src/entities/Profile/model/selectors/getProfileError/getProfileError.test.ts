import { IStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error: '123',
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual('123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
