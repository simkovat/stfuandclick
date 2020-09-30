import { LeaderBoardDataT, TeamDataT } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppThunk } from '../store';
import { getLeaderboardApi } from '../../api/getLeaderBoardApi';

export type LeaderBoardStateT = {
  data: TeamDataT[] | null;
  error: string | null;
  pending: boolean;
};

const initialState: LeaderBoardStateT = {
  data: null,
  error: null,
  pending: false,
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    getLeaderBoardPending(state) {
      state.pending = true;
    },
    getLeaderBoardSuccess(
      state,
      action: PayloadAction<{ data: LeaderBoardDataT }>
    ) {
      state.data = action.payload.data;
      state.error = null;
      state.pending = false;
    },
    getLeaderBoardFailed(state, action: PayloadAction<string>) {
      state.data = null;
      state.error = action.payload;
      state.pending = false;
    },
  },
});

export const {
  getLeaderBoardPending,
  getLeaderBoardSuccess,
  getLeaderBoardFailed,
} = leaderboardSlice.actions;

export const fetchLeaderboard = (): AppThunk => async (dispatch) => {
  dispatch(getLeaderBoardPending());
  let leaderboard;
  try {
    leaderboard = await getLeaderboardApi();
  } catch (err) {
    dispatch(getLeaderBoardFailed(err.toString()));
    return;
  }
  dispatch(getLeaderBoardSuccess(leaderboard));
};
