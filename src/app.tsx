import React, { FC, Suspense } from 'react';
import Layout from './components/layout';
import Router from './routes';

const App: FC = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Layout>
      <Router />
    </Layout>
  </Suspense>
);

export default App;
