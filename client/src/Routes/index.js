import React, { Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoadingComponent from '../Components/Loader/Loader';
import routes from './Routes';
import PrivateRoute from './Private';
import PublicRoute from './Public';
import Layout from '../Layout';

const history = createBrowserHistory();

const Routes = () => (
    <Router history={history}>
        <Suspense fallback={<LoadingComponent />}>
            <Layout>
                <Switch>
                    {routes.map((route, i) => {
                        if (route.auth) {
                            return <PrivateRoute key={i} {...route} />;
                        }
                        return <PublicRoute key={i} {...route} />;
                    })}
                </Switch>
            </Layout>
        </Suspense>
    </Router>
);

export default Routes;
