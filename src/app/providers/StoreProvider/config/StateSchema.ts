import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUserName';

export interface IStateSchema {
  counter: CounterSchema;
  user: IUserSchema;

  // Асинхронные редюсеры
  loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof IStateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager?: ReducerManager;
}
