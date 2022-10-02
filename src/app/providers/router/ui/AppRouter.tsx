import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

function AppRouter() {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
