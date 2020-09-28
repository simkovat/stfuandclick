import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardSlice } from './leaderboardSlice';
import { sessionSlice } from './sessionSlice';

export const rootReducer = combineReducers({
  leaderboard: leaderboardSlice.reducer,
  session: sessionSlice.reducer,
});

export type RootStateT = ReturnType<typeof rootReducer>;
