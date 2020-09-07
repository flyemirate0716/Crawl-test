import React, {Fragment, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {useStyles} from "./style";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import {Text} from "../../../Components/Container/Language";
import CustomSnackbar from "../../../Components/CustomSnackBar";

const Dashboard = () => {
    const classes = useStyles();
    const { authInfo } = useSelector(state => ({authInfo: state.auth}));
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    useEffect(() => {
        if (authInfo.variant) {
            setSnackBarOpen(true);
        }
    }, [authInfo.variant]);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };
    if (!authInfo.isAuthenticated) {
        return <Redirect to="/login" />;
    }
    return (
        <Fragment>
            <CustomSnackbar
                open={snackBarOpen}
                handleClose={handleClose}
                variant={authInfo.variant}
                message={authInfo.message}
            />
            <div className={classes.page_title}>
                <Text tid="dashboard" />
            </div>
        </Fragment>
    );
};

export default withRouter(Dashboard);