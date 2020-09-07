import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    setting_container: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down(400)]: {
            display: 'flex'
        }
    },
    paper: {
        marginTop:20,
        width: 800,
    },
    language_div: {
        marginTop: 50,
    },
    time_div: {
        marginTop: 20
    }
}));
