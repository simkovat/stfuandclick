import { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return <>{t('pageNotFound')}</>;
};
