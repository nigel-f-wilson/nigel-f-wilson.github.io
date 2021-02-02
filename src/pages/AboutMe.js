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
                <OurStoryTabContent />
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

function OurStoryTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                How I Got Into Gardening
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Before I ever tried my hand at gardening I was interested in foraging for edible wild plants. My
                garden still shows clear signs of this influence. While certain crops are planted in neat rows
                and managed carefully, many other species are naturalized here and are allowed to thrive wherever their seeds
                happen to sprout. Because of this approach, a walk around the garden always has a surprize in store!
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I got serious about gardening when I was a sophomore at Ohio University. Working under Dr. Art Tesse, growing in the
                well-loved soil of the University Research Gardens, I learned one of the most important lessons about gardening, one that has stuck with
                me ever since and become a pillar of the way I practice gardening in the STEM Garden: Gardening is less about
                taking care of plants than most non-gardeners would suspect, it is about taking care of the soil and the whole mini-ecosystem.
                If you take good care of the soil the rest of the garden takes care of itself.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Early Days
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                After my first three years gardening in various community gardens around Athens, Ohio I wanted to move to a warmer
                climate and buy land so that I could commit to gardening in one place for years to come, a necessary commitment if you want
                to practice gardening in a way that focuses on caring for soil.
            </Typography>
            <Box py={1} >
                <Grid container spacing={2}  >
                    <Grid item xs={12} md={6} >
                        {/* <SquarePhotoCard img={mattresses} /> */}
                    </Grid>
                    <Grid item xs={12} md={6} >
                        {/* <SquarePhotoCard img={trash_in_dirt} /> */}
                    </Grid>
                </Grid>
            </Box>

            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                In March of 2016, I won a Civic Source auction for a blighted vacant lot at the corner of Port St. and N. Galvez, in New Orleans upper ninth ward.
                Though I started experimenting right away with what plants would do well in my new garden, for the first three years most of the work was
                picking trash out of the soil, eliminating invasive species like ragweed, and bringing in 400 cubic yards of horse manure and other organic matter to compost.
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