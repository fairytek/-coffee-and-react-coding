// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { appRoutes } from './routes/app-routes';

export function App() {

  const routes = useRoutes(appRoutes);

  return (
    <>
      <div />

      <Suspense fallback={<div>Loading ...</div>}>{routes}</Suspense>
    </>
  );
}

export default App;
