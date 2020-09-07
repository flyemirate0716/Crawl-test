import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return <Route {...rest} render={props => (
        isAuthenticated
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
    )}/>;

};

PrivateRoute.propTypes = {
    component: PropTypes.object.isRequired,
    location: PropTypes.object,
};

export default withRouter(PrivateRoute);