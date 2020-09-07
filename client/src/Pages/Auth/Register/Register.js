import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import text validator
import {
    TextValidator,
    ValidatorForm
} from 'react-material-ui-form-validator';
// import material icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import { creators as AuthActions } from "../../../Redux/Reducers/auth";
import CustomSnackbar from "../../../Components/CustomSnackBar";
import { Logo } from "../../../Assets/js/image";
import { useStyles } from "../style";

const initialValue = {
    username: '',
    email: '',
    password: ''
};

const Register = () => {
    const classes = useStyles();
    const history = useHistory();
    // define email, password
    const [values, setValues] = useState({...initialValue});
    const {authInfo} = useSelector(state => ({
        authInfo: state.auth
    }));
    const dispatch = useDispatch();
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    // snackbar open
    useEffect(() => {
        if (authInfo.variant) {
            setSnackBarOpen(true);
        }
    }, [authInfo.variant]);
    // add validation rule
    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordLength', () =>{
            return values.password.length >= 8;
        });
    });
    // define handle change function
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    };
    // snack bar close
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };
    // define handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AuthActions.registerRequest(
            {
                username: values.username,
                email: values.email,
                password: values.password
            }
            )
        );
        history.push('/login');
    };
    const preventDefault = (event) => {
        event.preventDefault();
        dispatch(AuthActions.clear());
        history.push('/login');
    };
    return (
        <div className={classes.root}>
            <CustomSnackbar
                open={snackBarOpen}
                handleClose={handleClose}
                variant={authInfo.variant}
                message={authInfo.message}
            />
            <div className={classes.paper}>
                <div className={'paper_container'}>
                    <div className={'logo_area'}>
                        <img
                            src={Logo}
                            alt="login_logo"
                            className={'logo_icon mt-50'}
                        />
                    </div>
                    <div className={classes.main_form}>
                        <ValidatorForm
                            className={classes.form}
                            onSubmit={handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <TextValidator
                                id="username"
                                type="text"
                                name="username"
                                label="Username"
                                autoComplete="off"
                                margin="dense"
                                variant="outlined"
                                value={values.username}
                                InputProps={{
                                    classes: {
                                        root: classes.textField,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <PersonIcon />
                                        </InputAdornment>,
                                }}
                                onChange={handleChange}
                                validators={['required']}
                                errorMessages={['Username is required.']}
                            /><br/>
                            <TextValidator
                                id="email"
                                type="email"
                                name="email"
                                label="Email"
                                autoComplete="off"
                                margin="dense"
                                variant="outlined"
                                value={values.email}
                                InputProps={{
                                    classes: {
                                        root: classes.textField,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <MailOutlineIcon />
                                        </InputAdornment>,
                                }}
                                onChange={handleChange}
                                validators={['required', 'isEmail']}
                                errorMessages={['Email is required.', 'Email is not valid.']}
                            /><br/>
                            <TextValidator
                                id="password"
                                type="password"
                                name="password"
                                margin="dense"
                                variant="outlined"
                                value={values.password}
                                InputProps={{
                                    classes: {
                                        root: classes.textField,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <VpnKeyIcon />
                                        </InputAdornment>,
                                }}
                                label="Password"
                                onChange={handleChange}
                                validators={['required', 'isPasswordLength']}
                                errorMessages={['Password is required.', 'Password is too short! Must be at least 8 characters!']}
                            /><br/>
                            <button
                                type="submit"
                                className={classes.submit}
                            >
                                Register
                            </button>
                            <div className={classes.signup_button}>
                                <Typography className={classes.signup_text}>
                                    Already have an account?
                                </Typography>
                                <Link onClick={preventDefault}>
                                    <Typography className={classes.register}>
                                        Login
                                    </Typography>
                                </Link>
                            </div>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Register);