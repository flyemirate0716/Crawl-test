import { call, put } from 'redux-saga/effects';
import { creators as AuthActions} from "../Reducers/auth";
import ApiAuth from '../../Api/ApiAuth';

export function * login({payload}) {
    try {
        const response = yield call(ApiAuth.login, payload);

        if (response.status === 200) {
            yield put(AuthActions.loginSuccessResponse(response.data));
        } else {
            console.log("LOGIN Failed, #############");
        }
    } catch (e) {
        yield put(AuthActions.loginFailureResponse(e));
    }
}
export function * register({payload}) {
    try {
        const response = yield call(ApiAuth.register, payload);

        if (response.status === 200) {
            yield put(AuthActions.registerSuccessResponse(response.data));
        } else {
            console.log("LOGIN Failed, #############");
        }
    } catch (e) {
        yield put(AuthActions.registerFailureResponse(e));
    }
}
