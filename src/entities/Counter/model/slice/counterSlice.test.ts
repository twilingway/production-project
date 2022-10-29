import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterAction } from './counterSlice';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 5,
    };
    expect(counterReducer(state, counterAction.decrement())).toEqual({ value: 4 });
  });
  test('increment', () => {
    const state: CounterSchema = {
      value: 5,
    };
    expect(counterReducer(state, counterAction.increment())).toEqual({ value: 6 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterAction.increment())).toEqual({ value: 1 });
  });
});
