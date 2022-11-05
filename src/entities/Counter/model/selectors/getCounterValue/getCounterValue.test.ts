import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: {
        value: 5,
      },
    };
    expect(getCounterValue(state as IStateSchema)).toEqual(5);
  });
});
