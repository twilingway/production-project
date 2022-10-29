import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <BugButton />
      {t('main page')}
      <Counter />
    </div>
  );
};

export default MainPage;
