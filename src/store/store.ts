import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { RootStateT, rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootStateT, unknown, Action<string>>;
