/* eslint-disable i18next/no-literal-string */
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <BugButton />
      {t('main page')}
      {/* <Counter /> */}
      <Input value={value} onChange={setValue} placeholder="Введите текст" />
    </div>
  );
};

export default MainPage;
