import { RootStateT } from '../rootReducer';

export const sessionSelector = (state: RootStateT) => state.session;

export const sessionDataSelector = (state: RootStateT) => state.session.data;

// export const sessionTokenSelector = (state: RootStateT) =>
//   state.session.data.token;
