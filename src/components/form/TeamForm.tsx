import { FC, useState } from 'react';

import { Link } from 'react-router-dom';
import React from 'react';
import { routes } from '../../router/routes';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const TeamForm: FC = () => {
  const { t } = useTranslation();

  const [team, setTeam] = useState<string>();

  return (
    <Wrapper>
      <InputWrapper>
        <Label>{t('enterTeamName')}</Label>
        <Input
          type='text'
          placeholder={t('yourMom')}
          name='teamName'
          onChange={(e) => setTeam(e.target.value)}
          value={team}
        />
      </InputWrapper>
      <StyledLink to={`${routes.CLICK_PAGE}/${team}`} disabled={!team}>
        <Button>{t('click')}!</Button>
      </StyledLink>
    </Wrapper>
  );
};

const StyledLink = styled(Link)<{ disabled: boolean }>`
  width: 40%;
  pointer-events: ${(props) => props.disabled && 'none'};
  opacity: ${(props) => props.disabled && '0.7'};
`;

const Wrapper = styled.form`
  width: 100%;
  height: 58px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  width: 60%;
  height: 100%;
`;

const Label = styled.label`
  font-style: italic;
  margin-bottom: 10px;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;
  padding: 5px 8px;

  &::placeholder {
    font-style: italic;
  }
`;
const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.5em;
  height: 55px;
  text-transform: uppercase;
`;
