import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SessionDataT, recordClickApi } from '../../api/recordClickApi';

import { AppThunk } from '../store';
import { getRandomString } from '../../utils/getRandomString';

export type RecordClickStateT = {
  data: {
    token: string;
    yourClicks: number;
    teamClicks: number;
  };
  pending: boolean;
  error: string | null;
  success: boolean | null;
};

const initialState: RecordClickStateT = {
  data: {
    token: getRandomString(),
    yourClicks: 0,
    teamClicks: 0,
  },
  pending: false,
  error: null,
  success: null,
};

export const recordClickSlice = createSlice({
  name: 'recordClick',
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
      state.success = true;
    },
    recordClickFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.pending = false;
      state.success = false;
    },
  },
});

export const {
  generateSessionToken,
  recordClickFailed,
  recordClickSuccess,
  recordClickPending,
} = recordClickSlice.actions;

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
