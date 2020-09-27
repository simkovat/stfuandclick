import { TeamDataT } from '../types';
import { createSlice } from '@reduxjs/toolkit';

export type LeaderBoardStateT = null | TeamDataT[];

const initialState: LeaderBoardStateT = null;

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
});

// export const {
//     displayRepo,
//     setCurrentDisplayType,
//     setCurrentPage
//   } = issuesDisplaySlice.actions
