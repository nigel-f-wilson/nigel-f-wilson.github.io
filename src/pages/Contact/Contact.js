import React from 'react';
import PropTypes from 'prop-types';


// MY components
import Navbar from "../../components/Navbar/Navbar";
import SquarePhotoCard from "../../components/SquarePhotoCard";


// MY images
import fbLogo from "./facebook_logo.png";
// import fbLogo from "./facebook_logo.jpg";
import igLogo from "./instagram_logo.jpg";
import ghLogo from "./octocat_logo.png";
// import ghLogo from "./GitHub-logo.png";
import linkedInLogo from "./linked_in_logo.png";


// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    fbLogo: {
        height: '4.0rem',
        width: '4.0rem',
        backgroundImage: `
            url(${fbLogo})  
        `,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '105%',
    },
    igLogo: {
        height: '4.0rem',
        width: '4.0rem',
        backgroundImage: `
            url(${igLogo})  
        `,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '105%',
    },
    ghLogo: {
        height: '4.0rem',
        width: '4.0rem',
        backgroundColor: theme.palette.common.white,
        backgroundImage: `
            url(${ghLogo})  
        `,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '95%',
    },
    linkedInLogo: {
        height: '4.0rem',
        width: '4.0rem',
        backgroundColor: theme.palette.common.white,
        backgroundImage: `
            url(${linkedInLogo})  
        `,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '95%',
    }, 

}));


export default function ContactPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >
            <Navbar />

            <Container maxWidth='sm' disableGutters >
                <Box my='4.0rem'>
                    <Typography align='center' color='textPrimary' component='h1' variant='h1'>
                        Contact Us
                    </Typography>
                </Box>
                <Box mx='3rem' my='3rem'  >
                    <Typography align='center' color='textPrimary' variant='h5' gutterBottom >
                        <strong>Phone:</strong>&nbsp; <br />(504)&nbsp;252&nbsp;0762
                    </Typography>
                    <Typography align='center' color='textPrimary' variant='h5' gutterBottom >
                        <strong>Email:</strong>&nbsp; <br />nolastemgarden@gmail.com 
                    </Typography>
                    <Typography align='center' color='textPrimary' variant='h5' gutterBottom >
                        {/* <strong>Social Media</strong> */}
                    </Typography>
                </Box>
                
                

                <Box display='flex' justifyContent='space-around' >
                    <Button className={classes.fbLogo}
                        href='https://www.facebook.com/Nola-Stem-Garden-110760417109903'
                    />
                    <Button className={classes.igLogo}
                        href='https://www.instagram.com/nola_stem_garden/'
                    />
                    <Button className={classes.ghLogo}
                        href='https://github.com/nolastemgarden'
                    />
                    <Button className={classes.linkedInLogo}
                        href='https://www.linkedin.com/in/nigel-wilson-086a6377/'
                    />
                    
                </Box>
                {/* <Grid container >
                    <Grid item xs={3} >

                    </Grid>
                </Grid> */}


            </Container>

        </Box>
    )
}
