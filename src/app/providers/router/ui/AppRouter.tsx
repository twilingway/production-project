import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes, Route } from 'react-router-dom';

import { routerConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
