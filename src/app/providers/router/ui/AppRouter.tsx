import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

function AppRouter() {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routerConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
          return false;
        }
        return true;
      }),
    [isAuth]
  );

  return (
    <Routes>
      {routes.map(({ element, path }) => (
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

export default memo(AppRouter);
