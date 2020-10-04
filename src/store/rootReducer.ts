import { combineReducers } from '@reduxjs/toolkit';
import { leaderboardSlice } from './slices/leaderboardSlice';
import { recordClickSlice } from './slices/recordClickSlice';
import { userSlice } from './slices/userSlice';

export const rootReducer = combineReducers({
  leaderboard: leaderboardSlice.reducer,
  recordClick: recordClickSlice.reducer,
  user: userSlice.reducer,
});

export type RootStateT = ReturnType<typeof rootReducer>;
