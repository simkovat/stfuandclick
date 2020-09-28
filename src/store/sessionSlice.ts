import { createSlice } from '@reduxjs/toolkit';
import { getRandomString } from '../utils/getRandomString';

export type SessionStateT = string;

const initialState: SessionStateT = getRandomString();

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    generateSessionToken(state) {
      state = getRandomString();
    },
  },
});

export const { generateSessionToken } = sessionSlice.actions;
