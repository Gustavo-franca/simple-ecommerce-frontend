import React, {Suspense} from 'react';
import Layout from "./components/layout";
import Router from "./routes";

const App = () => (
    <Suspense fallback={<div>loading...</div>}>
        <Layout >
            <Router/>
        </Layout>
    </Suspense>

);

export default App;
