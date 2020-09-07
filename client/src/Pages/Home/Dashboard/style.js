import { makeStyles } from "@material-ui/styles";
import {
    backgroundColor,
} from "../../../Assets/js/constant";

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        position: 'relative',
        [theme.breakpoints.down(400)]:{
            display: 'none'
        }
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
    notify_area: {
        height: 200,
        paddingTop: 20,
        paddingLeft:100,
        paddingRight: 100
    },
    page_title: {
        fontSize: 30,
        color: backgroundColor,
        fontWeight: 600,
        marginTop: 40,
        marginLeft: 110
    },
}));
