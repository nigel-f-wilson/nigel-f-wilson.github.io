import React from 'react';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import fret_measuring from "./images/guitar_fret_spacing_crop1.jpg";
// import balance_scale from "../images/balance_scale_waldorf.jpg";
// import multiple_choice from "../images/multiple_choice_test.jpg";
import banana_papaya_turmeric from "./images/banana_papaya_turmeric.JPG";
// import chessclub from "../images/chess_demo_board.jpg";
// import chessclub from "../images/chess_club_college_track.jpg";
import profile_pic from "./images/profile_pic.JPG";


// MUI Imports
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

// const cardHeight = '1000px';

const useStyles = makeStyles((theme) => ({
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
]

// CHESS CLUBS and LESSONS 
// image={chessclub}
// title="Students playing chess"
// Chess Clubs and lessons
// Playing chess is a fun way for kids to develop their skills at problem solving,
// time-management, and communication, as well as persistence and sportsmanship. 
// We offer private and small group lessons and partner with schools to help 
// them establish chess clubs. 
// to='/teach'
// activeTab: 'chess'
// Learn Chess

export default function LandingCards(props) {
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

