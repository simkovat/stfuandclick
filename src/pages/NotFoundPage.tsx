import { FC } from 'react';
import { Layout } from '../components/layout/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  return <Layout>{t('pageNotFound')}</Layout>;
};
