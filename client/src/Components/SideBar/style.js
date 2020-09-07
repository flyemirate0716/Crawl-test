import { makeStyles } from "@material-ui/styles";
import {
    backgroundColor,
    backgroundColor_1,
    defaultFontColor
} from "../../Assets/js/constant";

export const useStyles = makeStyles(theme => ({
    root: {
        width: '280px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0
    },
    header: {
        width: '280px',
        height: 55,
        background: theme.palette.background.default,
        display: "flex",
        justifyContent: 'space-between',
        '& .header_logo': {
            display: 'flex',
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            '& .logo_icon': {
                width: 100,
                height: 35,
            },
            '& .title': {
                fontSize: 18,
                color: defaultFontColor,
                marginLeft: 10
            }
        }
    },
    header_user_info: {
        width: 280,
        height: 150,
        backgroundColor: backgroundColor_1,
        textAlign: 'center'
    },
    side_menu: {
        width: 280,
        height: 'calc(100vh - 205px)',
        minHeight: 700,
        maxHeight: '100vh',
        background: backgroundColor
    },
    user_avatar: {
        background: backgroundColor,
        width: 110,
        height: 110,
        margin: '-55px auto',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .avatar': {
            width: 85,
            height: 85,
            borderRadius: '50%'
        }
    },
    menu_list: {
        paddingTop: '70px!important',
        color: '#ffffff!important',
        outline: 'none'
    },
    menu_item: {
        height: 50,
        display: 'flex!important',
        alignItems: 'center',
    },
    nav_item: {
        textDecoration:'none!important',
        color: '#ffffff'
    }
}));
