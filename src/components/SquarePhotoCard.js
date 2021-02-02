import React from 'react';

// MUI CORE Imports
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    cardImage: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        // paddingTop: '75%', // 4:3
        paddingTop: '100%', // square
    },
}));

export default function SquarePhotoCard(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardImage}
                image={props.img}
                title={props.title}
            />
        </Card>
    );
}