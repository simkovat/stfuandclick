import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardSlice } from './leaderboardSlice';

export const rootReducer = combineReducers({
  leaderboard: leaderboardSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
