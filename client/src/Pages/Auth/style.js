import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    paper: {
        width: 450,
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        '& .paper_container': {
            width: 400,
            height: 700,
            '& .logo_area': {
                width: '100%',
                textAlign: 'center',
                '& .logo_icon': {
                    width: 185,
                    height: 70
                }
            },
            '& .title': {
                fontSize: 25,
                color: theme.palette.primary.main
            }
        }
    },
    main_form:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        margin: '20px auto',
        width: '350px',
        [theme.breakpoints.down(410)]: {
            width:280
        },

    },
    textField: {
        '&:hover': {
            border: 'none',
            outline: 'none'
        },
        width: '350px',
        height: '50px',
        border: 'none',
        borderRadius: '5px',
        [theme.breakpoints.down(410)]: {
            width:280
        },

    },
    submit: {
        width:'350px',
        marginTop:'10px',
        background:'#43b0cc',
        color:'#ffffff',
        height:'50px',
        fontSize:'20px',
        border:'none',
        marginLeft:0,
        outline:'none',
        cursor: 'pointer',
        borderRadius: '5px',
        [theme.breakpoints.down(410)]: {
            width:280
        },
    },
    signup_button: {
        margin: '20px auto',
        display: 'flex',
        width: '80%',
    },
    signup_text: {
        fontSize: 15,
    },
    register: {
        fontSize: 15,
        color: "#3a478f",
        marginLeft: 15,
        cursor: 'pointer'
    }
}));