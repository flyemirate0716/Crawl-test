import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware);
};

export default function configureStore(history = {}, preloadedState = {}) {

    const routeMiddleware = routerMiddleware(history);
    const store = createStore(
        rootReducer,
        preloadedState,
        bindMiddleware([sagaMiddleware, routeMiddleware])
    );

    sagaMiddleware.run(rootSaga);
    return store;
}