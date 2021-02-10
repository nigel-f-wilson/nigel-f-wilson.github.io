import React from 'react';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import fret_measuring from "../Landing/images/guitar_fret_spacing_crop1.jpg";
import banana_papaya_turmeric from "../Landing/images/banana_papaya_turmeric.JPG";
import profile_pic from "../Landing/images/profile_pic.JPG";


// MY components
import Navbar from "../../components/Navbar/Navbar";
import SquarePhotoCard from "../../components/SquarePhotoCard";



// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


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
    
    squareImage: {
        height: 0,
        paddingTop: '100%', // square
    },

    card: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EEE',

    },
    cardImage: {
        height: 0,
        paddingTop: '100%', // 1:1  Sets the "height" in terms of the Width since % units for padding are based on the width
        // paddingTop: '56.25%', // 16:9
    },
    cardBody: {
        height: '7rem',
        margin: '0.35rem 0.7rem',
    },
    cardButton: {
        height: '3rem',
        width: '66%',
        margin: '1.0rem auto 1.0rem',
        display: 'flex',
    },
}));

const cardData = [
    {
        'title': 'Teaching Services',
        'bodyText': 'I offer private tutoring in K-12, AP, and college level math classes, as well as chess lessons, SAT/ ACT test prep, and hands-on math enrichment.',
        'imageTitle': 'Measuring frets on a guitar',
        'image': fret_measuring,
        'pathname': '/teach',
        'selectedTab': 'tutoring',
        'buttonText': 'Learn More'
    },
    {
        'title': 'About the Garden',
        'bodyText': 'Established in 2016, the garden started as a blighted lot and gradually evolved into an oasis of fruit trees and turmeric.',
        'imageTitle': 'Homegrown bananas, papaya, and turmeric flower',
        'image': banana_papaya_turmeric,
        'pathname': '/garden',
        'selectedTab': 'our_story',
        'buttonText': 'Our Story'
    },
    {
        'title': 'Meet Nigel',
        'bodyText': 'A jack of all trades who rejoices in learning and teaching about math, technology, sustainable living, and strategy games.',
        'imageTitle': "Garden founder's profile picture",
        'image': profile_pic,
        'pathname': '/about_me',
        'selectedTab': 'overview',
        'buttonText': 'About Me'
    },
    {
        'title': 'Teaching Services',
        'bodyText': 'I offer private tutoring in K-12, AP, and college level math classes, as well as chess lessons, SAT/ ACT test prep, and hands-on math enrichment.',
        'imageTitle': 'Measuring frets on a guitar',
        'image': fret_measuring,
        'pathname': '/teach',
        'selectedTab': 'tutoring',
        'buttonText': 'Learn More'
    },
    {
        'title': 'About the Garden',
        'bodyText': 'Established in 2016, the garden started as a blighted lot and gradually evolved into an oasis of fruit trees and turmeric.',
        'imageTitle': 'Homegrown bananas, papaya, and turmeric flower',
        'image': banana_papaya_turmeric,
        'pathname': '/garden',
        'selectedTab': 'our_story',
        'buttonText': 'Our Story'
    },
    {
        'title': 'Meet Nigel',
        'bodyText': 'A jack of all trades who rejoices in learning and teaching about math, technology, sustainable living, and strategy games.',
        'imageTitle': "Garden founder's profile picture",
        'image': profile_pic,
        'pathname': '/about_me',
        'selectedTab': 'overview',
        'buttonText': 'About Me'
    },
    {
        'title': 'Teaching Services',
        'bodyText': 'I offer private tutoring in K-12, AP, and college level math classes, as well as chess lessons, SAT/ ACT test prep, and hands-on math enrichment.',
        'imageTitle': 'Measuring frets on a guitar',
        'image': fret_measuring,
        'pathname': '/teach',
        'selectedTab': 'tutoring',
        'buttonText': 'Learn More'
    },
    {
        'title': 'About the Garden',
        'bodyText': 'Established in 2016, the garden started as a blighted lot and gradually evolved into an oasis of fruit trees and turmeric.',
        'imageTitle': 'Homegrown bananas, papaya, and turmeric flower',
        'image': banana_papaya_turmeric,
        'pathname': '/garden',
        'selectedTab': 'our_story',
        'buttonText': 'Our Story'
    },
    {
        'title': 'Meet Nigel',
        'bodyText': 'A jack of all trades who rejoices in learning and teaching about math, technology, sustainable living, and strategy games.',
        'imageTitle': "Garden founder's profile picture",
        'image': profile_pic,
        'pathname': '/about_me',
        'selectedTab': 'overview',
        'buttonText': 'About Me'
    },
]


export default function PuzzleCollectionPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >
            <Navbar />

            <Container
                maxWidth='md'
                disableGutters
            >
                <Box p='4.0rem'>
                    <Typography align='center' color='textPrimary' component='h1' variant='h1'>
                        Puzzles
                    </Typography>
                    <Typography align='center' color='textPrimary' variant='body1'>
                        The following puzzles can be used with students of a wide range of ages. ...
                    </Typography>
                </Box>
                <Grid container >
                    <Grid item xs={6} sm={4} md={3} >
{/* PuzzleCards */}
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} >
{/* PuzzleCards */}
                    </Grid>
                </Grid>
                {/* <GardenTabs initialTab={initialTab} key={initialTab} /> */}

            </Container>

        </Box>
    )
}



function PuzzleCards(props) {
    const classes = useStyles();
    return (
        <Container maxWidth='md' >
            <Grid container spacing={3} >
                {cardData.map((card) => (
                    <Grid item xs={12} sm={4} >
                        <Card className={classes.card} raised>
                            <CardMedia
                                className={classes.cardImage}
                                image={card.image}
                                alt={card.imageTitle}
                                title={card.imageTitle}
                            />
                            <Box className={classes.cardBody}  >
                                <Typography color="textSecondary" component="h3" variant="h5" >
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" >
                                    {card.bodyText}
                                </Typography>
                            </Box>
                            <Button className={classes.cardButton} component={RouterLink} variant='contained' size="medium" color="primary"
                                to={{
                                    pathname: card.pathname,
                                    state: {
                                        selectedTab: card.selectedTab,
                                    }
                                }} >
                                {card.buttonText}
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

