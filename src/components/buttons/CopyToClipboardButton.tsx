import { FC } from 'react';
import React from 'react';
import copyToClipboard from '../../assets/copy-to-clipboard.png';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface Props {
  stringToCopy: string;
}
export const CopyToClipboardButton: FC<Props> = ({ stringToCopy }) => {
  const { t } = useTranslation();
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(stringToCopy);
      }}
    >
      <img src={copyToClipboard} alt={t('copyToClipboard')} />
    </Button>
  );
};

const Button = styled.button`
  margin: 5px;
  > img {
    width: 20px;
  }
`;
