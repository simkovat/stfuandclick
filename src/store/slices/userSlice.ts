import { createSlice } from '@reduxjs/toolkit';
import { getRandomString } from '../../utils/getRandomString';

export type UserSliceStateT = {
  session: string | null;
};

const initialState: UserSliceStateT = {
  session: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    generateSessionToken(state) {
      state.session = getRandomString();
    },
  },
});

export const { generateSessionToken } = userSlice.actions;
