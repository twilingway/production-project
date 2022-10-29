/* eslint-disable i18next/no-literal-string */
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('main page')}
      {/* <Counter /> */}
    </div>
  );
};

export default MainPage;
