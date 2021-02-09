import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../../components/Navbar/Navbar";
import TutoringTab from "./TutoringTab";
import EnrichmentTab from "./EnrichmentTab";
import ChessTab from "./ChessTab";
import TestPrepTab from "./TestPrepTab";



// MY images
import balance_scale from "../../images/balance_scale_waldorf.jpg";
import multiple_choice from "../../images/multiple_choice_test.jpg";

// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


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
}));


export default function TeachPage(props) {
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
                        Teaching Services
                    </Typography>
                </Box>
                
                <ServiceTabs initialTab={initialTab} key={initialTab} />

                <Box p={4}> 
                    <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                        Testimony:
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "I wouldn’t have made it through my first semester of grad school without Nigel. I had tried a few different tutors before 
                        Nigel but he is the perfect tutor. He takes a mathematical concept and makes it understandble and relevant. 
                        He listened to me complain about my professor, and then redirected to keep me positive and on track. He helped 
                        me to to master the steps and to understand the concepts well enough that I could explain things to the people 
                        in my study group. I wish he could always be my math teacher! 
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        J. Richelson, Graduate Student at UNO
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "I highly recommend Nigel without reservation for tutoring in mathematics because of his ability to convey the subject 
                        matter clearly while still presenting it in an interesting way with real world examples.  He taught my son 7th grade 
                        mathematics while employed at the Waldorf School in New Orleans and it was clear that he brought much preparation and care 
                        to his teaching while encouraging his students' solving ability and thirst for knowledge with an upbeat attitude."
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        W. Mains, Parent of a Student
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "I worked with Nigel and witnessed his enthusiasm for teaching math. He developed the math curriculum for and taught 4th-8th grade. 
                        Our students were very engaged in math while he was our math teacher. For the first time in a long time, 
                        they were excited to go to math because his lessons were so interesting and thought provoking. 
                        I hope Nigel can come back to our school as a chess teacher as soon as the restrictions on after 
                        school activities are lifted." 
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        J. Contento, Faculty Chair WSNO
                    </Typography>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        "The best assistant I've ever had"
                    </Typography>
                    <Typography align='right' color='textPrimary' component='h2' variant='body1' gutterBottom  >
                        G. Atkins, Owner of Atlas Electric LLC
                    </Typography>
                </Box>
                

                
            </Container>

        </Box>
    )
}



function ServiceTabs(props) {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState(props.initialTab);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box className={classes.tabs}  >
            <AppBar className={classes.tabBar} position="static"  >
                <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Tutoring" {...a11yProps(0)} />
                    <Tab label="Enrichment" {...a11yProps(1)} />
                    <Tab label="Chess" {...a11yProps(2)} />
                    <Tab label="Test Prep" {...a11yProps(3)} />

                </Tabs>
            </AppBar>
            <TabPanel id='math_tutoring' className={classes.tabPanel} value={activeTab} index={0}>    
                <TutoringTab />
            </TabPanel>


            <TabPanel id='math_enrichment' className={classes.tabPanel} value={activeTab} index={1} >
                <EnrichmentTab />
            </TabPanel>

            
            
            <TabPanel id='chess' className={classes.tabPanel} value={activeTab} index={2}>
                <ChessTab />
            </TabPanel>


            <TabPanel className={classes.tabPanel} value={activeTab} index={3}>
                <TestPrepTab />
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
    if (tabName === 'tutoring') { return 0 }
    if (tabName === 'enrichment') { return 1 }
    if (tabName === 'chess') { return 2 }
    if (tabName === 'test_prep') { return 3 }
    else { return 0 }
}




{/* <Typography  align='center' color='textPrimary' component='h2' variant='h2'>
                        Teaching Philosophy
                    </Typography>
                    <Typography className={classes.body} align='justify' color='textPrimary' component='h2' variant='body1' >
                        To be a good teacher one must remain in touch with what it feels like to be a student. <br />
                        In Eastern philosophy this is often refered to as retaining a "beginner's mind". <br />
                        To be a student is to ask questions and to pursue answers. It is to confront the unknown.
                        To be a teacher is to be a role model for students. A good teacher models excitement at learning
                        new things and is never preoccupied with keeping up the appearance of being an expert.
                        A teacher must never be afraid to say, "I don't know the answer to your question but I bet we
                        can find it together." A teacher is dedicated to being a life-long learner and realizes that all
                        learning starts with realizing that there is something you have yet to learn.
                        <a> Click Here </a> for a list of some of my favorite books and TED Talks on philosophy of education.
                    </Typography> */}