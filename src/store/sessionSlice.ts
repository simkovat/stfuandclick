import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SessionDataT, recordClickApi } from '../api/recordClick';

import { AppThunk } from './store';
import { getRandomString } from '../utils/getRandomString';

export type SessionStateT = {
  data: {
    token: string;
    yourClicks: number;
    teamClicks: number;
  };
  pending: boolean;
  error: string | null;
};

const initialState: SessionStateT = {
  data: {
    token: getRandomString(),
    yourClicks: 0,
    teamClicks: 0,
  },
  pending: false,
  error: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    generateSessionToken(state) {
      state.data.token = getRandomString();
    },
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
  generateSessionToken,
  recordClickFailed,
  recordClickSuccess,
  recordClickPending,
} = sessionSlice.actions;

export const postClick = (team: string, session: string): AppThunk => async (
  dispatch
) => {
  dispatch(recordClickPending());
  let sessionData;
  try {
    sessionData = await recordClickApi({ team, session });
  } catch (err) {
    dispatch(recordClickFailed(err.toString()));
    return;
  }
  dispatch(recordClickSuccess(sessionData));
};
