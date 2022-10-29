import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: {
        value: 5,
      },
    };
    expect(getCounter(state as IStateSchema)).toEqual({ value: 5 });
  });
});
