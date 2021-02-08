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
    

}));


export default function ContactPage(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}  >
            <Navbar />

            <Container maxWidth='md' disableGutters >
                <Box my='4.0rem'>
                    <Typography align='center' color='textPrimary' component='h1' variant='h1'>
                        Contact Us
                    </Typography>
                </Box>
                
                <Typography align='center' color='textPrimary' variant='h5' gutterBottom >
                    <strong>Phone:</strong>&nbsp; (504)&nbsp;252&nbsp;0762
                </Typography>
                <Typography align='center' color='textPrimary' variant='h5' gutterBottom >
                    <strong>Email:</strong>&nbsp; nolastemgarden@gmail.com
                </Typography>
                <Typography align='center' color='textPrimary' variant='h5' gutterBottom >
                    <strong>Social Media</strong>
                </Typography>
                <Grid container >
                    <Grid item xs={3} >

                    </Grid>
                </Grid>


            </Container>

        </Box>
    )
}
