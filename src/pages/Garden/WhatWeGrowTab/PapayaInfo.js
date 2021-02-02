import React from 'react';

// MY components
import PhotoGrid from "../../../components/PhotoGrid";
import SquarePhotoCard from "../../../components/SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// MY images
// papaya images
import papaya_flower from   "../../../images/papaya/papaya_flower.JPG";
import papaya_trees from    "../../../images/papaya/papaya_trees.JPG";
import papaya_leaf from     "../../../images/papaya/papaya_leaf.jpg";
import papaya_halved from   "../../../images/papaya/papaya_halved.JPG";
import papaya_picking from  "../../../images/papaya/papaya_picking.JPG";
import papaya_pile from     "../../../images/papaya/papaya_pile.JPG";
import papaya_fruit from    "../../../images/papaya/papaya_fruit.JPG";

// STYLES
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    accordion: {
        backgroundColor: theme.palette.common.black,
    },
}));

const photoSet = [
    {
        img: papaya_halved,
        title: 'Ripe papaya halved',
        description: 'Ripe papaya halved',
        gridCols: 12,
        hideTitle: true,
    }, {
        img: papaya_trees,
        title: 'Papaya Halved',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: papaya_flower,
        title: 'Papaya Blossom',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, 
];
    // {
    //     img: papaya_pile,
    //     title: 'Banana and Papaya Harvest',
    //     description: '',
    //     gridCols: 4,
    //     hideTitle: true,
    // }


export default function PapayaInfo(props) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Accordion className={classes.accordion} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    IconButtonProps={{ 'color': '#fff' }}
                >
                    <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                        Papaya
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                        I didn't come to enjoy eating papaya until I grew them myself. Most papaya sold at grocery stores are picked prematurely to
                        improve shelf-life but as a result they never ripen properly. I usually leave the fruits on the trees until one or two days
                        before they are ready to eat. This way they get much sweeter and develop a interesting flavor.
                        Papaya is a key ingredient in my homegrown fruit smoothies. I sell papaya green, ripe, or frozen.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <PhotoGrid data={photoSet} />

        </React.Fragment>
    )
}

