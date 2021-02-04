import React from 'react';
import {
    Link as RouterLink,
} from "react-router-dom";

// MY images
import tic_tac_toe_screenshot from "../../images/projects/tic_tac_toe_screenshot.JPG";

// import chessclub from "../images/chess_demo_board.jpg";
// import chessclub from "../images/chess_club_college_track.jpg";


// MUI Imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const cardHeight = '1000px';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        height: '100%',
        width: '100%',
        // color: theme.palette.common.white,
        // backgroundColor: theme.palette.common.black,
        // backgroundColor: theme.palette.common.white,
        // backgroundColor: theme.palette.primary.light,
        // backgroundColor: '#444',
        backgroundColor: '#ddd',
        padding: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    cardImage: {
        height: 0,
        paddingTop: '100%', // 1:1  Sets the "height" in terms of the Width since % units for padding are based on the width
        // paddingTop: '56.25%', // 16:9
        // width: '100%',
    },
    cardButtonArea: {
        height: { cardHeight },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

}));

// DESCRIPTION:  There will be only 4 cards on the landing page: About the Garden, Teaching Services, Chess Clubs, and Meet Nigel

export default function LandingCards(props) {
    const classes = useStyles();
    return (
        <Container
            className={classes.mobileCardGrid}
            maxWidth='md'
        >
            <Grid container
                className={classes.gridContainer}
                id='grid'
                spacing={3}

            >

                {/* TEACHING SERVICES */}
                <Grid item xs={12} sm={6} >
                    <Card className={classes.card} raised>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                image={tic_tac_toe_screenshot}
                                alt="Student measuring a guitar"
                                title="Student measuring a guitar"
                            />
                            <CardContent>
                                <Typography component="h3" variant="h5" >
                                    Tic-Tac-Toe and the 15-Game
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    A math lesson taught through two games. Learn about mathematical proof and how math helps us see the hidden structures
                                    beneath the messy and chaotic surface of the real-world, all while mastering two classic games!  
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                component={Link}
                                href='https://nolastemgarden.github.io/tic-tac-toe-and-the-fifteen-game/#/'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Play Now!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


                {/* Multiplication Fact Connect Connect Four */}
                

                {/* CHESS Club Rating Tracker */}
                

                {/* Fair Trade Coffee Industry Simulation */}
                
            </Grid>
        </Container>



    )

}