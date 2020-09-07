import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";

const displayName = 'Private Layout';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles= makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        position: 'relative'
    },
    content_panel: {
        width: 'calc(100% - 280px)',
        height: '100vh',
        left: 280,
        position: "absolute"
    },
    main_panel: {
        position: 'absolute',
        top: 55,
        width: '100%'
    },
}));

function PrivateLayout({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SideBar />
            <div className={classes.content_panel}>
                <Header />
                <div className={classes.main_panel}>
                    {children}
                </div>
            </div>
        </div>
    );
}

PrivateLayout.displayName = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout;