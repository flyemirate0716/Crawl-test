import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from "./style";

const LoadingComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.loading}>
                <CircularProgress
                    className={classes.progress}
                    color="secondary"
                />
            </div>
        </div>
    );
};

export default LoadingComponent;
