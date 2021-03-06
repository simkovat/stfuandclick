import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}
export const RibbonHeader: FC<Props> = ({ title }) => (
  <Wrapper>
    <ShapeLeft />
    <Rectangle>{title}</Rectangle>
    <ShapeRight />
  </Wrapper>
);

const Wrapper = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9em;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Rectangle = styled.div`
  width: 150px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 10px 0;
  z-index: 3;
`;

const Shape = styled.div`
  width: 60px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  position: absolute;
  top: 10px;

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-top: 18px solid transparent;
    border-left: 11px solid white;
    border-bottom: 20px solid transparent;
    position: absolute;
    top: -1px;
    left: -1px;
  }
`;
const ShapeLeft = styled(Shape)`
  left: -50px;
`;

const ShapeRight = styled(Shape)`
  transform: scaleX(-1);
  right: -50px;
`;
