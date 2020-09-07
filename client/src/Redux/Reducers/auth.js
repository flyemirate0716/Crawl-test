import { createActions, handleActions } from 'redux-actions';
import BaseApi from '../../Api/BaseApi';
import {
    error, FAILED,
    info,
    LOG_OUT,
    LOGIN_SUCCESS, REGISTER_SUCCESS,
    success
} from "../../Assets/js/messages";

const initState = {
    isAuthenticated: !!localStorage.getItem('proxy_token'),
    token: localStorage.getItem('proxy_token'),
    error: null,
    variant: null,
    message: null,
    is_registered: false
};

export const creators = createActions({
    LOGIN_REQUEST: ({email, password}) => ({email, password}),
    LOGIN_SUCCESS_RESPONSE: (response) => ({response}),
    LOGIN_FAILURE_RESPONSE: (response) => ({response}),
    REGISTER_REQUEST: (user) => ({user}),
    REGISTER_SUCCESS_RESPONSE: (response) => ({response}),
    REGISTER_FAILURE_RESPONSE: (response) => ({response}),
    LOGOUT: () => ({}),
    CLEAR: () => ({}),
});

const fetchingReducer = (state) => {
    return {
        ...state,
        fetching: true,
        error: null,
        variant: null,
        message: null
    };
};
const loginFailureReducer = (state, {payload}) => {
    return {
        ...state,
        fetching: false,
        error: payload,
        variant: error,
        message: 'failed'
    };
};

const loginSuccessReducer = (state, {payload}) => {
    BaseApi.authToken = payload.response.token;
    localStorage.setItem('proxy_token', payload.response.token);
    return {
        ...state,
        isAuthenticated: true,
        token: payload.response.token,
        fetching: false,
        error: null,
        variant: success,
        message: LOGIN_SUCCESS
    };
};
const logoutReducer = (state) => {
    BaseApi.authToken = null;
    localStorage.removeItem('proxy_token');
    localStorage.removeItem('proxy_user');
    return {
        ...state,
        isAuthenticated: false,
        token: null,
        variant: info,
        message: LOG_OUT
    };
};
const registerSuccessReducer = (state, {payload}) => {
    return {
        ...state,
        fetching: false,
        error: null,
        variant: success,
        user: payload.response,
        message: REGISTER_SUCCESS
    };
};

const registerFailureReducer = (state, {payload}) => {
    return {
        ...state,
        fetching: false,
        error: payload,
        variant: error,
        message: FAILED
    };
};
const clearReducer = (state) => {
    return {
        ...state,
        variant: null,
        message: null,
        isDeleted: false,
        isEdited: false
    };
};
export default handleActions (
    {
        LOGIN_REQUEST: fetchingReducer,
        LOGIN_SUCCESS_RESPONSE: loginSuccessReducer,
        LOGIN_FAILURE_RESPONSE: loginFailureReducer,
        REGISTER_REQUEST: fetchingReducer,
        REGISTER_SUCCESS_RESPONSE: registerSuccessReducer,
        REGISTER_FAILURE_RESPONSE: registerFailureReducer,
        LOGOUT: logoutReducer,
        CLEAR: clearReducer,
    },
    initState
);
