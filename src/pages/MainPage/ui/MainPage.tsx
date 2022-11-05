/* eslint-disable i18next/no-literal-string */
import { BugButton } from 'app/providers/ErrorBoundary';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
