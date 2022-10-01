import { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import { routerConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
