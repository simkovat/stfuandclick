import React, { FC, ReactElement } from 'react';

import { Error } from '../Error';
import { Loading } from '../Loading';
import { NoData } from '../NoData';

interface Props {
  pending: boolean;
  error: string | null;
  data: any[] | null;
  children: ReactElement;
}
export const DataWrapper: FC<Props> = ({ pending, error, data, children }) => {
  if (pending) return <Loading />;
  if (error) return <Error />;
  if (data?.length === 0) return <NoData />;

  return children;
};
