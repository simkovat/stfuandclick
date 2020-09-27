import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { RootStateT, rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default;
//     store.replaceReducer(newRootReducer);
//   });
// }

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootStateT, unknown, Action<string>>;
