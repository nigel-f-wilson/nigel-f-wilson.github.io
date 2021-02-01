import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../components/Navbar/Navbar";
import SquarePhotoCard from "../components/SquarePhotoCard";
// OUR STORY
import WildlifePhotoGrid from "../components/OurStory/WildlifePhotoGrid";
import ClassroomInfo from "../components/OurStory/ClassroomInfo";


// WHAT WE GROW
import BananaInfo from "../components/CropInfo/BananaInfo";
import PapayaInfo from "../components/CropInfo/PapayaInfo";
import TurmericInfo from "../components/CropInfo/TurmericInfo";
import LimeInfo from "../components/CropInfo/LimeInfo";
import LoquatInfo from "../components/CropInfo/LoquatInfo";
import FigInfo from "../components/CropInfo/FigInfo";
import GuavaInfo from "../components/CropInfo/GuavaInfo";
import FlowerInfo from "../components/CropInfo/FlowerInfo";
import OtherCropsInfo from "../components/CropInfo/OtherCropsInfo";


// MY images
// early days images
import mattresses from "../images/early_days/mattresses.JPG";
import trash_in_dirt from "../images/early_days/trash_in_dirt.JPG";
import banana_flower from "../images/banana/banana_flower.JPG";



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
                    <Typography className={classes.titleText} align='center' color='textPrimary' component='h1' variant='h1'>
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
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h3'>
                How I Got Into Gardening
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Before I ever tried my hand at gardening I was interested in foraging for edible wild plants and 
                my garden still shows signs of this influence. While certain crops are planted in neat rows 
                and managed carefully, many other species are naturalized here and are allowed to thrive 
                wherever their seeds happen to sprout. Because of this approach, 
                a walk around the garden always has a surprize in store!
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I got serious about gardening when I was a sophomore at Ohio University. Growing under 
                the mentorship of Dr. Art Tesse in the well-loved soil of the University Research Gardens, 
                I learned one of the most important lessons about gardening, one that has stuck with
                me ever since and become a pillar of the way I practice gardening in the STEM Garden: 
                Gardening is less about taking care of plants than most folks would suspect, it is really 
                about taking care of the soil and the whole mini-ecosystem.
                Take good care of the soil and the rest of the garden takes care of itself.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h3'>
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
                        <SquarePhotoCard img={mattresses} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <SquarePhotoCard img={trash_in_dirt} />
                    </Grid>
                </Grid>
            </Box>
            
            <Typography align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                In March of 2016, I won a Civic Source auction for a blighted vacant lot at the corner of Port St. and N. Galvez, in New Orleans upper ninth ward.
                Though I started experimenting right away with what plants would do well in my new garden, for the first three years most of the work was 
                picking trash out of the soil, eliminating invasive species like ragweed, and bringing in 400 cubic yards of horse manure and other organic matter to compost.  
            </Typography>


            <Typography align='left' color='textPrimary' component='h3' variant='h3'>
                Wildlife Habitat
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Countless frogs, toads, lizards, and birds make there home in the STEM Garden and help me by eating the bugs that would have like to eat my plants.
                The garden also supports butterflies and bees from nearby hives, offering them nectar in exchange for their work as polinators. 
                I get immeasureble joy from watching all the living creatures that have found their way into this little urban oasis.
                The ability to support diverse animal life is a sign that the ecosystem as a whole is healthy.  
            </Typography>
            <WildlifePhotoGrid />

            <ClassroomInfo />
            
            
            <Typography align='left' color='textPrimary' component='h3' variant='h3'>
                Gardening Philosophy
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                The garden produces lots to eat, but productivity is never the top priority. My focus is always on improving soil health, 
                creating wildlife habitat, and increasing bio-diversity. The garden 
            </Typography>
            
        </React.Fragment>
    )
}

function WhatsGrowingTabContent() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} >
            <Grid item xs={12} md={6}>
                <BananaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <PapayaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <TurmericInfo />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <LoquatInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <LimeInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <FigInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <GuavaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <FlowerInfo />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <OtherCropsInfo />
            </Grid>
            

        </Grid>
    )
}

function BuyOurProduceTabContent () {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' component='h2' variant='h2'   >
                Availability
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                One of the STEM Garden's founding princples is that it is best for food to travel as few
                miles as possible. We prefer to sell direct to consumer whenever we can.
                The best way to get your hands on STEM Garden produce is to contact us directly and ask 
                what is coming ripe this week! We keep a list of interested buyers and reach out 
                individually a few days before harvest in order to plan the freshest possible deliveries. 
                Occasionally, when there is a large excess of one crop, we post to Facebook Marketplace, 
                sell to local restaurants, and through the Nola Food Co-op. 
                We love to meet our customers and give tours of the garden! Know where your food comes from!
            </Typography>
            <Typography align='left' color='textPrimary' component='h2' variant='h2' >
                Fresh
            </Typography>
            <Typography align='justify' component='p' variant='body1' gutterBottom>
                The following fresh produce is availaibe seasonally. All prices are per pound.
            </Typography>
            <Box px={2} py={1} >
                <Grid container spacing={1}  >
                    <Grid item xs={6}  >
                        <Typography noWrap align='left' gutterBottom component='p' variant='body1'>
                            Cucumbers <br />
                            Eggplant <br />
                            Tomatoes <br />
                            Papaya <br />
                            Burro Bananas <br />
                            Dwarf Cavendish Bananas <br />
                            Guava <br />
                            Fig <br />
                            Turmeric <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}  >
                        <Typography align='right' gutterBottom component='p' variant='body1'>
                            $2.50 <br />
                            $2.50 <br />
                            $2.50 <br />
                            $3.00 <br />
                            $2.50 <br />
                            $3.00 <br />
                            $6.00 <br />
                            $7.50 <br />
                            $15.00 <br />
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Typography align='left' color='textPrimary' component='h2' variant='h2' >
                Frozen
            </Typography>
            <Typography align='justify' component='p' variant='body1' gutterBottom>
                We also process and freeze excess fruit at the peak of ripeness. The following are available 
                year-round, pureed in quart bags: 
            </Typography>
            <Box px={2} >
                <Grid container spacing={1}  >
                    <Grid item xs={6}  >
                        <Typography noWrap align='left' gutterBottom component='p' variant='body1'>
                            Papaya <br />
                            Burro Bananas <br />
                            Fig <br />
                            Guava (strained) <br />
                            Turmeric (shredded) <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}  >
                        <Typography align='right' gutterBottom component='p' variant='body1'>
                            $3.50 <br />
                            $3.50 <br />
                            $8.00 <br />
                            $7.50 <br />
                            $18.00 <br />
                        </Typography>
                    </Grid>
                </Grid>
                
            </Box>
        </React.Fragment>
    )
}

