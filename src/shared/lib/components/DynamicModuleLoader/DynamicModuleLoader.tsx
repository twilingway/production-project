import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface IDynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const { reducers, removeAfterUnmount = false, children } = props;

  const dispatch = useDispatch();

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} form reducer` });
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@REMOVE ${name} form reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};
