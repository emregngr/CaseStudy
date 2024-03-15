import {Reducer, ComponentState, ReducerAction} from 'react';

export const combineReducers = (
  state: Reducer<ComponentState, ReducerAction<any>>,
  action: ReducerAction<any>,
) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
});
