import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

//TODO make button a pending button
//TODO display validation errors

export const TeamForm: FC = () => {
  const { register, handleSubmit, errors } = useForm<{ teamName: string }>();

  //TODO fix any type
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Enter your team name:</Label>
        <Input
          type='text'
          placeholder='Your mom'
          name='teamName'
          ref={register({ required: true, maxLength: 50 })}
        />
      </InputWrapper>
      <Button>CLICK!</Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
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
`;

const Label = styled.label`
  font-style: italic;
  margin-bottom: 10px;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.textGrey};
  border-radius: 5px;
  padding: 5px 8px;

  &::placeholder {
    font-style: italic;
  }
`;
const Button = styled.button`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  height: 55px;
`;
