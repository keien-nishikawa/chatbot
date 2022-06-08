import type { Component } from 'solid-js';

import { Router, useRoutes } from 'solid-app-router';
import { Suspense } from 'solid-js';
import { routes } from './routes';

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <Suspense>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;
