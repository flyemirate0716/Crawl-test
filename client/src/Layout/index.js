import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PrivateLayout from './Private';
import PublicLayout from './Public';
import BaseApi from '../Api/BaseApi';

function Layout(props) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        if (isAuthenticated) {
            BaseApi.authToken = token;
        } else {
            BaseApi.authToken = null;
            //dispatch(AuthActions.logout());
        }
    });

    const { children } = props;
    if (isAuthenticated) {
        return <PrivateLayout {...props}>{children}</PrivateLayout>;
    }

    return <PublicLayout {...props}>{children}</PublicLayout>;
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withRouter(Layout);