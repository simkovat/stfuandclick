import { RootStateT } from '../rootReducer';

export const sessionSelector = (state: RootStateT) => state.recordClick;

export const sessionDataSelector = (state: RootStateT) =>
  state.recordClick.data;

// export const sessionTokenSelector = (state: RootStateT) =>
//   state.session.data.token;
