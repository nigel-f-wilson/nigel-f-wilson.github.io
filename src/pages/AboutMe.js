import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../components/Navbar/Navbar";
import SquarePhotoCard from "../components/SquarePhotoCard";


// MY images



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
    
}));


export default function AboutPage(props) {
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
                    <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
                        About Me
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
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab label="Programming" {...a11yProps(1)} />
                    <Tab label="Resume" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.tabPanel} value={activeTab} index={0}>
                <AboutMeTabContent />
            </TabPanel>

            <TabPanel className={classes.tabPanel} value={activeTab} index={1} >
                <WhatsGrowingTabContent />
            </TabPanel>

            <TabPanel className={classes.tabPanel} value={activeTab} index={2}>
                <BuyOurProduceTabContent />
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
    // if (tabName === 'chess') { return 2 }
    // if (tabName === 'test_prep') { return 3 }
    else { return 0 }
}

function AboutMeTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h3'>
                Ohio to New Orleans
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I grew up on the banks of the Scioto River in central Ohio.  As a kid, I dreamed of taking a gap year after
                high school and canoeing from my backyard down to the Ohio and then the Mississippi Rivers, all the way to
                New Orleans. When Ohio University offered me a non-deferrable full-tuition scholarship I decided to put my
                trip to New Orleans on hold and got to school. Four years later, I had my degree in math education and wanted
                to go somewhere that was a hotbed of innovation in education to launch my teaching career. New Orleans
                fit that bill, having undergone a post-Katrina transition to charter schools.
                Asside from professional motivations, during my time at OU I got really into bicycling and gardening and
                I desperately wanted to live in a warmer climate that would allow me to enjoy biking and gardening year-round.
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Three months after moving to New Orleans I won an online auction for a blighted vacant lot.
                When I first began cleaning up that lot I was living out of my van with my shovel and hoe in the
                passenger seat. Over the next five years, I remediated soil contamination and a chronic flooding issue by
                bringing in over 350 cubic yards of organic matter to compost, I built two tiny houses on trailers,
                and equiped them with solar power and rain water catch systems. Eventually the garden reached a point
                where I could use it to host private tutoring clients.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h3'>
                Current Goals
            </Typography>


            

        </React.Fragment>
    )
}

function WhatsGrowingTabContent() {
    const classes = useStyles();

    return (
        <React.Fragment >
            <Grid>

            </Grid>

        </React.Fragment >
    )
}

function BuyOurProduceTabContent() {
    return (
        <React.Fragment >
            <Grid>

            </Grid>
        </React.Fragment >
    )
}