import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import styled from 'styled-components';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Link to={routes.HOME_PAGE}>STFUANDCLICK.COM</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;
