import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardSlice } from './slices/leaderboardSlice';
import { recordClickSlice } from './slices/recordClickSlice';

export const rootReducer = combineReducers({
  leaderboard: leaderboardSlice.reducer,
  recordClick: recordClickSlice.reducer,
});

export type RootStateT = ReturnType<typeof rootReducer>;
