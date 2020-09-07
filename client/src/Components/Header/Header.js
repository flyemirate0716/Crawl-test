import React from "react";
import {useStyles} from "./style";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import {primaryColor} from "../../Assets/js/constant";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import { creators as AuthActions } from "../../Redux/Reducers/auth";
import {Text} from "../Container/Language";

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleLogout = () => {
        dispatch(AuthActions.logout());
        setAnchorEl(null);
        handleMobileMenuClose();
        history.push('/login');
    };
    const goToSettingPage = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        history.push('/setting');
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={goToSettingPage}>
                <SettingsIcon style={{color: primaryColor}} />
                <p>
                    <Text tid="profile" />
                </p>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                <ExitToAppIcon style={{color: primaryColor}} />
                <p>
                    <Text tid="logout" />
                </p>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon style={{color: primaryColor}}/>
                    </Badge>
                </IconButton>
                <p>
                    <Text tid="messages" />
                </p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon style={{color: '#ffffff'}} />
                    </Badge>
                </IconButton>
                <p>
                    <Text tid="notifications" />
                </p>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <SettingsIcon style={{color: '#ffffff'}} />
                <p>
                    <Text tid="profile" />
                </p>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ExitToAppIcon style={{color: '#ffffff'}} />
                <p>
                    <Text tid="logout" />
                </p>
            </MenuItem>
        </Menu>
    );
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={classes.app_bar}
            >
                <Toolbar>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon style={{color: '#ffffff'}}/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon style={{color: '#ffffff'}}/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle style={{color: '#ffffff'}}/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            {renderMobileMenu}
        </div>
    );
};

export default Header;
