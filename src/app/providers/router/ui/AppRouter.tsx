import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
