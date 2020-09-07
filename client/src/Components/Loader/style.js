import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    wrapper: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000000,
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        msTransform: 'translate(-50%,-50%)',
        width: '100px',
        height: '100px',
        backgroundColor: 'transparent',
    },
    progress: {
        margin: 10,
    },
}));