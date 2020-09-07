import {
    all,
    takeLatest
} from 'redux-saga/effects';
import {
    login,
    register
} from './authSaga';


export default function * root () {
    yield all([
        takeLatest('LOGIN_REQUEST', login),
        takeLatest('REGISTER_REQUEST', register)
    ]);
}