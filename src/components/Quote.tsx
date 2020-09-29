import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  author: string;
}

export const Quote: FC<Props> = ({ text, author }) => (
  <QuoteWrapper>
    <span>"{text}"</span>
    <br />
    <QuoteAuthor>- {author}</QuoteAuthor>
  </QuoteWrapper>
);

const QuoteWrapper = styled.div`
  font-style: italic;
  min-width: 150px;
  margin-bottom: 35px;
`;
const QuoteAuthor = styled.span`
  width: 100%;
  text-align: end;
  display: inline-block;
  margin-top: 10px;
  position: relative;
  right: 38px;
`;
