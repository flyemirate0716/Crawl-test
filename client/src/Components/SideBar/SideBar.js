import React, { useState } from "react";
import {useStyles} from "./style";
import {header_logo, Profile_photo} from "../../Assets/js/image";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { primaryColor} from "../../Assets/js/constant";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Dashboard} from "@material-ui/icons";
import SettingsIcon from '@material-ui/icons/Settings';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { withRouter } from "react-router-dom";
import { creators as AuthActions } from "../../Redux/Reducers/auth";
import {useDispatch} from "react-redux";
import {Text} from "../Container/Language";
import { Link } from "react-router-dom";

const SideBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(0);
    // update index
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
        dispatch(AuthActions.clear());
    };
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={'header_logo'}>
                    <img
                        src={header_logo}
                        alt="logo"
                        className={'logo_icon'}
                    />
                </div>
                <IconButton>
                    <MenuIcon
                        style={{
                            fontSize: 25,
                            color: primaryColor,
                            cursor: 'pointer'
                        }}
                    />
                </IconButton>
            </div>
            <div className={classes.header_user_info}>
                <div className={'white-text'} style={{paddingTop: 30}}>
                    Admin user
                </div>
                <div className={'white-text'}>
                    Andrea Garcia
                </div>
            </div>
            <div className={classes.user_avatar}>
                <img
                    src={Profile_photo}
                    alt="user_avatar"
                    className={'avatar'}
                />
            </div>
            <div className={classes.side_menu}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.menu_list}
                >
                    <Link to="/dashboard" className={classes.nav_item}>
                        <ListItem
                            button
                            className={classes.menu_item}
                            selected={selectedIndex === 0}
                            onClick={() => handleListItemClick(0)}
                        >
                            <ListItemIcon>
                                <Dashboard style={{color: '#ffffff'}}/>
                            </ListItemIcon>
                            <ListItemText primary={<Text tid="dashboard" />} />
                        </ListItem>
                    </Link>
                    <Link to="/products" className={classes.nav_item}>
                        <ListItem
                            button
                            className={classes.menu_item}
                            selected={selectedIndex === 1}
                            onClick={() => handleListItemClick(1)}
                        >
                            <ListItemIcon>
                                <LocalGroceryStoreIcon style={{color: '#ffffff'}}/>
                            </ListItemIcon>
                            <ListItemText primary={<Text tid="products" />} />
                        </ListItem>
                    </Link>
                    <Link to="/setting" className={classes.nav_item}>
                        <ListItem
                            button
                            className={classes.menu_item}
                            selected={selectedIndex === 2}
                            onClick={() => handleListItemClick(2)}
                        >
                            <ListItemIcon>
                                <SettingsIcon style={{color: '#ffffff'}}/>
                            </ListItemIcon>
                            <ListItemText primary={<Text tid="setting" />} />
                        </ListItem>
                    </Link>
                </List>
            </div>
        </div>
    );
};

export default withRouter(SideBar);
