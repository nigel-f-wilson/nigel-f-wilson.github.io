import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../../components/Navbar/Navbar";
import SquarePhotoCard from "../../components/SquarePhotoCard";

import OurStoryTabContent from "./OurStoryTab/OurStory";
import WhatWeGrowTabContent from "./WhatWeGrowTab/WhatWeGrow";
import ForSaleTabContent from "./ForSale";



// MY images
// early days images
import mattresses from "../../images/early_days/mattresses.JPG";
import trash_in_dirt from "../../images/early_days/trash_in_dirt.JPG";
import banana_flower from "../../images/banana/banana_flower.JPG";



// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        // border: 'solid red 2px',
        height: 'auto',
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: theme.palette.common.black,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 1,
        color: theme.palette.common.white,
    },
    tabBar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 1 100%',
    },
    tabPanel: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding: '0.0rem 1.0rem'
    },
    squareImage: {
        height: 0,
        paddingTop: '100%', // square
    }
}));


export default function GardenPage(props) {
    const classes = useStyles();
    let initialTab = getTabIndex(props.location.state.selectedTab);

    return (
        <Box className={classes.root}  >
            <Navbar />

            <Container
                maxWidth='md'
                disableGutters
            >
                <Box p='4.0rem'>
                    <Typography align='center' color='textPrimary' component='h1' variant='h1'>
                        About the Garden
                    </Typography>
                </Box>

                <GardenTabs initialTab={initialTab} key={initialTab} />

            </Container>

        </Box>
    )
}



function GardenTabs(props) {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState(props.initialTab);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box className={classes.tabs}  >
            <AppBar className={classes.tabBar} position="static"  >
                <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Our Story" {...a11yProps(0)} />
                    <Tab label="What We Grow" {...a11yProps(1)} />
                    <Tab label="For Sale" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.tabPanel} value={activeTab} index={0}>
                <OurStoryTabContent />
            </TabPanel>

            <TabPanel className={classes.tabPanel} value={activeTab} index={1} >
                <WhatWeGrowTabContent />
            </TabPanel>

            <TabPanel className={classes.tabPanel} value={activeTab} index={2}>
                <ForSaleTabContent />
            </TabPanel>
        </Box>
    );
}

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
                <Box p={2}>
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

function getTabIndex(tabName) {
    if (tabName === 'our_story') { return 0 }
    if (tabName === 'whats_growing') { return 1 }
    if (tabName === 'for_sale') { return 2 }
    // if (tabName === 'test_prep') { return 3 }
    else { return 0 }
}




