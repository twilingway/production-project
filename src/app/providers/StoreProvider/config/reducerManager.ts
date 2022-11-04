import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ReducerManager, IStateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<IStateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: IStateSchema, action: AnyAction) => {
      const stateTemp = { ...state };
      if (keysToRemove.length > 0) {
        keysToRemove.forEach((key) => {
          delete stateTemp[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(stateTemp, action);
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
