import { RootStateT } from '../rootReducer';

export const sessionTokenSelector = (state: RootStateT) =>
  state.session.data.token;
