import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SessionDataT, recordClickApi } from '../../api/recordClickApi';

import { AppThunk } from '../store';
import { fetchLeaderboard } from './leaderboardSlice';

export type RecordClickStateT = {
  data: {
    yourClicks: number | null;
    teamClicks: number | null;
  };
  pending: boolean;
  error: string | null;
};

const initialState: RecordClickStateT = {
  data: {
    yourClicks: null,
    teamClicks: null,
  },
  pending: false,
  error: null,
};

export const recordClickSlice = createSlice({
  name: 'recordClick',
  initialState,
  reducers: {
    recordClickPending(state) {
      state.pending = true;
    },
    recordClickSuccess(state, action: PayloadAction<{ data: SessionDataT }>) {
      state.data.yourClicks = action.payload.data.your_clicks;
      state.data.teamClicks = action.payload.data.team_clicks;
      state.pending = false;
    },
    recordClickFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.pending = false;
    },
  },
});

export const {
  recordClickFailed,
  recordClickSuccess,
  recordClickPending,
} = recordClickSlice.actions;

export const postClick = (team: string, session: string): AppThunk => async (
  dispatch
) => {
  dispatch(recordClickPending());
  try {
    const sessionData = await recordClickApi({ team, session });
    dispatch(recordClickSuccess(sessionData));
    dispatch(fetchLeaderboard());
  } catch (err) {
    dispatch(recordClickFailed(err.toString()));
    return;
  }
};
