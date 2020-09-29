import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardSlice } from './leaderboardSlice';
import { recordClickSlice } from './recordClickSlice';

export const rootReducer = combineReducers({
  leaderboard: leaderboardSlice.reducer,
  recordClick: recordClickSlice.reducer,
});

export type RootStateT = ReturnType<typeof rootReducer>;
