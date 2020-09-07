import React, {Fragment, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import TimezoneSelect from 'react-timezone-select';
import { useStyles } from "./style";
import { languageOptions } from '../../../Assets/Languages';
import {LanguageContext, Text} from '../../../Components/Container/Language';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Setting() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [c_lang, setC_lang] = useState('English');
    const [selectedTimezone, setSelectedTimezone] = useState({
        label: "(GMT+2:00) Brussels, Copenhagen, Madrid, Paris",
        value: "Europe/Brussels"
    });
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    // set selected language by calling context method
    const handleLanguageChange = (e) => {
        if (e.target.value === 'sp') {
            setC_lang('Spanish');
        } else if (e.target.value === 'ca') {
            setC_lang('Catalan');
        } else {
            setC_lang('English');
        }
        userLanguageChange(e.target.value);
    };

    useEffect(() => {
        let defaultLanguage = localStorage.getItem('rcml-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        userLanguageChange(defaultLanguage);
    }, [userLanguageChange]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleTimezoneChange = (zt) => {
        setSelectedTimezone(zt);
    };

    return (
        <Fragment>
            <div className={classes.setting_container}>
                <div className={classes.paper}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        indicatorColor="primary"
                    >
                        <Tab label={<Text tid="languageAndTimezone" />} {...a11yProps(0)} />
                        <Tab label={<Text tid="profileSetting" />} {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <div className={classes.language_div}>
                            <div className="normal-title-text">
                                <Text tid="languageSetting" />
                            </div>
                            <div className="d-flex mt-15">
                                <div className="W-35">
                                    <div className="normal-mid-text mt-15">
                                        <Text tid="currentLanguage" />:  {c_lang}
                                    </div>
                                </div>
                                <div className="ml-30 W-65">
                                    <select
                                        onChange={handleLanguageChange}
                                        value={userLanguage}
                                    >
                                        {Object.entries(languageOptions).map(([id, name]) => (
                                            <option key={id} value={id}>{name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex mt-20">
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                                <div className="normal-mid-text ml-10 mt-15">
                                    <Text tid="addPreferredLanguage" />
                                </div>
                            </div>
                            <div className="mt-40">
                                <hr style={{color: '#f4f7f2'}} />
                            </div>
                        </div>
                        <div className={classes.time_div}>
                            <div className="normal-title-text">
                                <Text tid="timezoneSetting" />
                            </div>
                            <div className="normal-mid-text mt-30">
                                <Text tid="currentDateTime" />
                            </div>
                            <div className="mt-10">9:22 AM, Saturday, August 22</div>
                            <div className="normal-mid-text mt-20">
                                <Text tid="pleaseSelectTimezone" />
                            </div>
                            <div className="W-65 mt-20">
                                <div className='select-wrapper'>
                                    <TimezoneSelect
                                        value={selectedTimezone}
                                        onChange={handleTimezoneChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    </TabPanel>
                </div>
            </div>
        </Fragment>
    );
}

export default Setting;
