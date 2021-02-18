import React from 'react';
import { Document, Page } from 'react-pdf';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import fret_measuring from "../Landing/images/guitar_fret_spacing_crop1.jpg";
import banana_papaya_turmeric from "../Landing/images/banana_papaya_turmeric.JPG";
import profile_pic from "../Landing/images/profile_pic.JPG";

import balance_rod from "./images/balance_rod.jpg";
import biker from "./images/biker.JPG";
import bouncy_ball from "./images/bouncy_ball.jpg";
import Brahmagupta from "./images/Brahmagupta.jpg";
import carrots from "./images/carrots.jpg";
import cookie_jar from "./images/cookie_jar.jpg";
import Gauss from "./images/Gauss.jpg";
import gold_scale from "./images/gold_scale.jpg";
import hens from "./images/hens.jpg";
import horse from "./images/horse.JPG"

// ICONS
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DescriptionIcon from '@material-ui/icons/Description';

// PDFs
import IncreasingTheAverage from "./pdf/IncreasingTheAverage.pdf";


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
    // cardBody: {
    //     height: '3rem',
    //     margin: '0.35rem 0.7rem',
    // },
    // cardButton: {
    //     height: '3rem',
    //     width: '66%',
    //     margin: '1.0rem auto 1.0rem',
    //     // display: 'flex',
    // },
}));

const cardData = [
    {
        'title': 'Balance Rod',
        // 'bodyText': 'Multiplicative nature of torque, center of gravity',
        'imageTitle': 'balance rod',
        'image': balance_rod,
        'pathname': '/teach',
        'href': 'https://docs.google.com/document/d/1h6DlTf9J7M5qoEi4bHGSJHZ254gyPEhFfGV3P6AKSKY/edit?usp=sharing',
        'selectedTab': 'tutoring',
    },
    {
        'title': 'Increasing the Average',
        // 'bodyText': 'Solving for the same amount ',
        'imageTitle': 'biker',
        'image': biker,
        'pathname': '/garden',
        'href': 'https://docs.google.com/document/d/1HWwxC_ATB44oX4Kz-mjnnCSnQ3eEeTOWbukyoI_st-M/edit?usp=sharing',
        'selectedTab': 'our_story',
    },
    {
        'title': 'Bouncing Ball',
        // 'bodyText': 'Geometric Sequence Decay, Working with Percents.',
        'imageTitle': "bouncy ball",
        'image': bouncy_ball,
        'pathname': '/about_me',
        'href': 'https://docs.google.com/document/d/1EHn_FE8-pXGazjiOHoQw9udSAa_fycMOuxSJRr-n9Bo/edit?usp=sharing',
    },
    {
        'title': "Brahmagupta's Egg Puzzle",
        // 'bodyText': 'Divisibility, The Chinese Remainder Theorem.
        'imageTitle': 'Brahmagupta',
        'image': Brahmagupta,
        'pathname': '/teach',
        'selectedTab': 'tutoring',
        'href': 'https://docs.google.com/document/d/1KgULETROmJosYqhCO4x7Kl9nifi-FOXcFONdCjfdeQw/edit?usp=sharing',
    },
    {
        'title': "Carrot Harvest",
        // 'bodyText': 'Area Mazes, Factorization.
        'imageTitle': 'carrots',
        'image': carrots,
        'pathname': 'https://docs.google.com/document/d/1HQbfLY1B0iz9W23aks6j17aHux0nm-NIS6OVypDb9h0/edit?usp=sharing',
        'selectedTab': 'tutoring',
        'href': 'https://docs.google.com/document/d/1HQbfLY1B0iz9W23aks6j17aHux0nm-NIS6OVypDb9h0/edit?usp=sharing',
    },
    {
        'title': 'Cookie Jar',
        // 'bodyText': 'Established in 2016, the garden started as a blighted lot and gradually evolved into an oasis of fruit trees and turmeric.',
        'imageTitle': 'Working Backwards',
        'image': cookie_jar,
        'pathname': '/garden',
        'selectedTab': 'our_story', 
        'href': 'https://docs.google.com/document/d/1cEjhTIVE7ZFGX8pXDRfiXA4uWIVTf8lYNKKPDOAMZU0/edit?usp=sharing',
    },
    {
        'title': "The Farmer's Purchase",
        // 'bodyText': 'Sum of an Arithmetic Sequence',
        'imageTitle': "horse",
        'image': horse,
        'pathname': '/about_me',
        'selectedTab': 'overview',
        'href': 'https://docs.google.com/document/d/1i1qjHg0dr2sEwOv3RCGV-b8vqgToD6HmS8IeV2KDcU4/edit?usp=sharing',
    },
    {
        'title': 'Finding a Fake',
        // 'bodyText': 'Classic Logic, Creative Thinking',
        'imageTitle': 'gold scale',
        'image': gold_scale,
        'pathname': '/garden',
        'selectedTab': '',
        'href': 'https://docs.google.com/document/d/1M9I2g3Acs-7uzSmN6v7qS8posN3dUMrMbXQ-3uiAfLI/edit?usp=sharing',
    },
    {
        'title': "Hens for the Village",
        // 'bodyText': 'Algebraic Reasoning, Linear Systems',
        'imageTitle': "hens",
        'image': hens,
        'pathname': '/about_me',
        'selectedTab': 'overview',
        'href': 'https://docs.google.com/document/d/1yZZrOOz66c4hmQhkHhcaiGtL5XS7GJQACxkvOsNjco8/edit?usp=sharing',
    },
    {
        'title': "Gauss's Addition Shortcut",
        // 'bodyText': 'Sum of an Arithmetic Sequence',
        'imageTitle': "Gauss at his telescope",
        'image': Gauss,
        'pathname': '/about_me',
        'selectedTab': 'overview',
        'href': 'https://docs.google.com/document/d/1xGuE_7Li-AVM2-OL5HE8LSFJzldaC25dYCqIacWcrBw/edit?usp=sharing',
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
                        I have been a math and logic puzzle enthusiast since I was young.  
                        This is my collection of favorites. They come from many different books 
                        and word of mouth sources. Some are recent creations and others are classics
                        that date back thousands of years.  

                    </Typography>
                    <Typography align='center' color='textPrimary' variant='body1'>
                        These make  to use for class discussions
                        herethe following math and logic puzzles from various sources over 
                        many years of being a puzzle enthusiast. Some are classics and others are thousands of years 
                        The following puzzles can be used with students of a wide range of ages. 
                    </Typography>
                    <Typography align='center' color='textPrimary' variant='body1'>
                        Coming Soon: Two dropdown menus with checkboxes lists to enable users to 
                        filter by subject matter, and by grade range.
                    </Typography>
                </Box>
                <PuzzleCards 
                    data={cardData}
                />


                    <Typography align='center' color='textPrimary' variant='body1'>
                        CITATIONS: for puzzles
                        Crest of the peacock,

                        
                        ***I don't take credit for the clip art***
                        
                    </Typography>
            </Container>
        </Box>
    )
}



function PuzzleCards(props) {
    const classes = useStyles();

    const pdfIcon = <PictureAsPdfIcon></PictureAsPdfIcon>;
    const docsIcon = <DescriptionIcon></DescriptionIcon>;


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
                            <Box p={1}  >
                                <Typography color="textSecondary" component="h3" variant="h5" >
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" >
                                    {card.bodyText}
                                </Typography>
                            </Box>
                            <Box p={1} display='flex' justifyContent='space-around' >
                                {/* <Button variant='contained' 
                                    size="medium" color="primary"
                                    startIcon={pdfIcon}
                                    href={card.pathname}
                                >
                                    PDF
                                </Button> */}
                                <Button variant='contained' 
                                    size="medium" color="primary"
                                    startIcon={docsIcon}
                                    href={card.href}
                                >
                                    {/* Docs */}
                                    Google Docs
                                </Button>
                            </Box>
                            {/* <Button className={classes.cardButton} component={RouterLink} variant='contained' size="medium" color="primary"
                                to={{
                                    pathname: card.pathname,
                                }}  >
                                Open PDF
                            </Button> */}
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

