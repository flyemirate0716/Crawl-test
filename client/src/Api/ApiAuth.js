import BaseApi from './BaseApi';

const ApiAuth = () => {
    const _api = BaseApi.api;

    const login = (credential) => {
        return _api.post('auth/login', credential);
    };
    const register = (credential) => {
        return _api.post('auth/register', credential.user);
    };
    const logout = () => {
        return _api.get('auth/logout');
    };
    return {
        login,
        register,
        logout,
    };
};

export default ApiAuth();