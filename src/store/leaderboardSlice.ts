import { TeamDataT } from '../types';
import { createSlice } from '@reduxjs/toolkit';

export type LeaderBoardStateT = TeamDataT[];

// TODO nulll would be better
const initialState: LeaderBoardStateT = [];

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
