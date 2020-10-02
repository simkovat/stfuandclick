import { useDispatch, useSelector } from 'react-redux';

import { ErrorMessage } from './FormErrorMessage';
import { FC } from 'react';
import { PendingButton } from '../buttons/PendingButton';
import React from 'react';
import { postClick } from '../../store/slices/recordClickSlice';
import { recordClickSelector } from '../../store/selectors/recordClickSelector';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface FormData {
  teamName: string;
}

interface Props {
  setTeam: (team: string) => void;
}

const TEAM_NAME_MAX_LENGTH = 50;

export const TeamForm: FC<Props> = ({ setTeam }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    pending,
    data: { token },
  } = useSelector(recordClickSelector);

  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(postClick(data.teamName, token));
    setTeam(data.teamName);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>{t('enterTeamName')}</Label>
        <Input
          type='text'
          placeholder={t('yourMom')}
          name='teamName'
          ref={register({
            required: { value: true, message: t('errorEnterTeamName') },
            maxLength: {
              value: TEAM_NAME_MAX_LENGTH,
              message: t('errorShorterTeamName'),
            },
          })}
        />
        {errors.teamName && (
          <ErrorMessage message={errors.teamName.message as string} />
        )}
      </InputWrapper>
      <Button type='submit' isPending={pending}>
        {t('click')}!
      </Button>
    </Wrapper>
  );
};

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
const Button = styled(PendingButton)`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.5em;
  height: 55px;
  text-transform: uppercase;
`;